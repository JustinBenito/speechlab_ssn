// Ported from Originkit's SVG Particle component, trimmed to the props this
// site actually uses (single image, hide-on-hover, outside repulsion).
"use client";

import { useEffect, useRef, type RefObject } from "react";

type SourcePixel = { homeX: number; homeY: number; r: number; g: number; b: number; a: number };

type Particle = SourcePixel & {
  x: number;
  y: number;
  vx: number;
  vy: number;
  startX: number;
  startY: number;
  repX: number;
  repY: number;
  idleX: number;
  idleY: number;
  inZone: boolean;
};

type AnimState = "active" | "idle" | "assembling" | "scattering";

function containRect(iW: number, iH: number, cW: number, cH: number) {
  const a = iW / iH;
  const b = cW / cH;
  return a > b
    ? { x: 0, y: Math.round((cH - cW / a) / 2), w: cW, h: Math.round(cW / a) }
    : { x: Math.round((cW - cH * a) / 2), y: 0, w: Math.round(cH * a), h: cH };
}

function shuffle<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}

const EASE_OUT = (t: number) => 1 - (1 - t) * (1 - t);
const TRANSITION_MS = 800;

function mkParticle(src: SourcePixel, x: number, y: number, idleX: number, idleY: number): Particle {
  return {
    ...src,
    x,
    y,
    vx: 0,
    vy: 0,
    startX: x,
    startY: y,
    repX: 0,
    repY: 0,
    idleX,
    idleY,
    inZone: false,
  };
}

const PARTICLE_COUNT = 55;
const PARTICLE_SIZE = 5;
const REPULSION_FORCE = 3;
const REPULSION_RADIUS = 22;

export function ParticleImage({
  image,
  className = "",
  revealRef,
}: {
  image: string;
  className?: string;
  revealRef?: RefObject<HTMLElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -99999, y: -99999, active: false });
  const prevMouseRef = useRef({ x: -99999, y: -99999 });
  const mouseSpeedRef = useRef(0);
  const smoothMouseRef = useRef({ x: -99999, y: -99999 });
  const sceneRef = useRef<{ particles: Particle[] }>({ particles: [] });
  const dimsRef = useRef({ W: 0, H: 0 });
  const animStateRef = useRef<AnimState>("active");
  const animRef = useRef<number | null>(null);
  const animStartTimeRef = useRef(0);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startAnim = (newState: "assembling" | "scattering") => {
    const { particles } = sceneRef.current;
    particles.forEach((p) => {
      p.startX = p.x;
      p.startY = p.y;
    });
    animStartTimeRef.current = Date.now();
    animStateRef.current = newState;
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
    const next = newState === "assembling" ? "active" : "idle";
    animTimerRef.current = setTimeout(() => {
      if (animStateRef.current === newState) animStateRef.current = next;
    }, TRANSITION_MS);
  };

  const initParticles = () => {
    const { W, H } = dimsRef.current;
    const canvas = canvasRef.current;
    if (!image || !W || !H || !canvas) return;

    const gap = Math.max(2, Math.round(150 / PARTICLE_COUNT));
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    sceneRef.current = { particles: [] };

    const tryLoad = (cors: boolean) => {
      const img = new Image();
      if (cors) img.crossOrigin = "anonymous";
      img.onerror = () => cors && tryLoad(false);
      img.onload = () => {
        const base = containRect(img.naturalWidth || img.width, img.naturalHeight || img.height, W, H);
        const rect = { x: (W - base.w) / 2, y: (H - base.h) / 2, w: base.w, h: base.h };

        const off = document.createElement("canvas");
        off.width = W;
        off.height = H;
        const oc = off.getContext("2d");
        if (!oc) return;
        oc.drawImage(img, rect.x, rect.y, rect.w, rect.h);
        let px: Uint8ClampedArray;
        try {
          px = oc.getImageData(0, 0, W, H).data;
        } catch {
          return;
        }

        const src: SourcePixel[] = [];
        for (let y = 0; y < H; y += gap) {
          for (let x = 0; x < W; x += gap) {
            const i = (y * W + x) * 4;
            if (px[i + 3] >= 20) {
              src.push({ homeX: x, homeY: y, r: px[i], g: px[i + 1], b: px[i + 2], a: px[i + 3] });
            }
          }
        }
        shuffle(src);

        const hidePos = (homeX: number, homeY: number) => {
          const maxD = Math.max(W, H);
          const d = 0.5 * maxD;
          const angle = Math.random() * Math.PI * 2;
          return [homeX + Math.cos(angle) * d, homeY + Math.sin(angle) * d];
        };

        const particles = src.map((p) => {
          const [ox, oy] = hidePos(p.homeX, p.homeY);
          return mkParticle(p, ox, oy, ox, oy);
        });
        animStateRef.current = "idle";
        sceneRef.current = { particles };
      };
      img.src = image;
    };
    tryLoad(true);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = (width: number, height: number) => {
      const W = Math.round(width);
      const H = Math.round(height);
      if (!W || !H) return;
      dimsRef.current = { W, H };
      initParticles();
    };

    const ro = new ResizeObserver((entries) => {
      const r = entries[0]?.contentRect;
      if (r) measure(r.width, r.height);
    });
    ro.observe(el);

    // ResizeObserver's first callback can lag a frame behind mount (or, in
    // some environments, never fire for an already-stable size) — measure
    // once synchronously so the effect isn't left waiting on it.
    const rect = el.getBoundingClientRect();
    measure(rect.width, rect.height);

    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let idata: ImageData | null = null;
    let bW = 0;
    let bH = 0;

    const draw = () => {
      animRef.current = requestAnimationFrame(draw);
      const PW = canvas.width;
      const PH = canvas.height;
      if (!PW || !PH) return;
      const dpr = window.devicePixelRatio || 1;
      const { particles } = sceneRef.current;
      if (!particles.length) return;
      if (!idata || PW !== bW || PH !== bH) {
        idata = ctx.createImageData(PW, PH);
        bW = PW;
        bH = PH;
      }
      idata.data.fill(0);
      const buf = idata.data;

      const state = animStateRef.current;
      const { x: rawMx, y: rawMy, active } = mouseRef.current;
      const hitSpeed = mouseSpeedRef.current;
      mouseSpeedRef.current *= 0.88;

      const sm = smoothMouseRef.current;
      if (active) {
        const lerpFactor = Math.max(0.08, 0.3 - hitSpeed * 0.006);
        if (sm.x < -9000) {
          sm.x = rawMx;
          sm.y = rawMy;
        } else {
          sm.x += (rawMx - sm.x) * lerpFactor;
          sm.y += (rawMy - sm.y) * lerpFactor;
        }
      } else {
        sm.x = -99999;
        sm.y = -99999;
      }
      const mx = sm.x;
      const my = sm.y;
      const ps = Math.max(1, Math.ceil((PARTICLE_SIZE / 4) * dpr));
      const elapsed = Date.now() - animStartTimeRef.current;
      const animT = EASE_OUT(Math.min(1, elapsed / TRANSITION_MS));
      const half = ps / 2;

      const drawParticle = (cx: number, cy: number, r: number, g: number, b: number, a: number) => {
        const px0 = Math.round(cx) - (ps >> 1);
        const py0 = Math.round(cy) - (ps >> 1);
        for (let dy = 0; dy < ps; dy++) {
          const iy = py0 + dy;
          if (iy < 0 || iy >= PH) continue;
          const row = iy * PW;
          for (let dx = 0; dx < ps; dx++) {
            const ddx = dx - half + 0.5;
            const ddy = dy - half + 0.5;
            if (ddx * ddx + ddy * ddy > half * half) continue;
            const ix = px0 + dx;
            if (ix < 0 || ix >= PW) continue;
            const i = (row + ix) * 4;
            buf[i] = r;
            buf[i + 1] = g;
            buf[i + 2] = b;
            buf[i + 3] = a;
          }
        }
      };

      const repCutoff = Math.max(1, REPULSION_RADIUS);
      const repCutoffSq = repCutoff * repCutoff;

      for (const p of particles) {
        let baseX = p.x;
        let baseY = p.y;
        if (state === "assembling") {
          baseX = p.startX + (p.homeX - p.startX) * animT;
          baseY = p.startY + (p.homeY - p.startY) * animT;
        } else if (state === "scattering") {
          baseX = p.startX + (p.idleX - p.startX) * animT;
          baseY = p.startY + (p.idleY - p.startY) * animT;
        } else if (state === "active") {
          baseX = p.homeX;
          baseY = p.homeY;
        } else if (state === "idle") {
          baseX = p.idleX;
          baseY = p.idleY;
        }

        if (active) {
          const dx = baseX - mx;
          const dy = baseY - my;
          const distSq = dx * dx + dy * dy;
          if (distSq > 0 && distSq < repCutoffSq) {
            const dist = Math.sqrt(distSq);
            const nx = dx / dist;
            const ny = dy / dist;
            const falloff = 1 - dist / repCutoff;
            const push = falloff * hitSpeed * REPULSION_FORCE * 0.05;
            p.repX += nx * push;
            p.repY += ny * push;
            const targetRepX = nx * (repCutoff - dist);
            const targetRepY = ny * (repCutoff - dist);
            p.repX += (targetRepX - p.repX) * 0.06;
            p.repY += (targetRepY - p.repY) * 0.06;
            p.inZone = true;
          } else {
            p.inZone = false;
          }
        } else {
          p.inZone = false;
        }
        if (!p.inZone) {
          p.repX *= 0.97;
          p.repY *= 0.97;
        }
        p.x = baseX + p.repX;
        p.y = baseY + p.repY;

        let da: number;
        if (state === "active") da = p.a;
        else if (state === "idle") da = 0;
        else if (state === "assembling") da = animT * p.a;
        else da = (1 - animT) * p.a;
        if (da < 1) continue;

        drawParticle(p.x * dpr, p.y * dpr, p.r, p.g, p.b, da);
      }
      ctx.putImageData(idata, 0, 0);
    };
    draw();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const canvas = canvasRef.current;
      const zoneEl = revealRef?.current ?? containerRef.current;
      if (!canvas || !zoneEl) return;

      const zoneRect = zoneEl.getBoundingClientRect();
      const inside =
        e.clientX >= zoneRect.left &&
        e.clientX <= zoneRect.right &&
        e.clientY >= zoneRect.top &&
        e.clientY <= zoneRect.bottom;

      const canvasRect = canvas.getBoundingClientRect();
      const { W, H } = dimsRef.current;
      const scaleX = canvasRect.width > 0 ? W / canvasRect.width : 1;
      const scaleY = canvasRect.height > 0 ? H / canvasRect.height : 1;
      const mx = (e.clientX - canvasRect.left) * scaleX;
      const my = (e.clientY - canvasRect.top) * scaleY;

      const prev = prevMouseRef.current;
      if (prev.x > -9999) {
        const ddx = mx - prev.x;
        const ddy = my - prev.y;
        mouseSpeedRef.current = Math.sqrt(ddx * ddx + ddy * ddy);
      }
      prevMouseRef.current = { x: mx, y: my };
      mouseRef.current = { x: mx, y: my, active: inside };

      const s = animStateRef.current;
      if (inside) {
        if (s === "idle" || s === "scattering") startAnim("assembling");
      } else if (s === "assembling" || s === "active") {
        startAnim("scattering");
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [revealRef]);

  const maskStyle = {
    maskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 12%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage: "radial-gradient(circle at center, rgba(0,0,0,1) 12%, rgba(0,0,0,0) 100%)",
    maskMode: "alpha",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  } as const;

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" style={maskStyle} />
    </div>
  );
}
