"use client";

import { useEffect, useRef, useState } from "react";

const COLS = 130;
const ROWS = 34;
const TICK_MS = 400;
const STUCK_CHANCE = 0.035;
const MOUNTAIN_MAX = 8;

type Cells = Array<[number, number]>;

const SHAPES: Cells[] = [
  [[0, 0]], // dot
  [[0, 0], [1, 0]], // domino
  [[0, 0], [1, 0], [0, 1], [1, 1]], // square
  [[0, 0], [1, 0], [2, 0], [1, 1]], // T
  [[0, 0], [1, 0], [2, 0]], // line-3
];

const PALETTE = ["#F5F5F5", "#D4D4D4", "#A3A3A3", "#FFFFFF", "#E5E5E5"];

type Piece = { cells: Cells; x: number; y: number; color: string };

function collides(locked: Map<string, string>, cells: Cells, x: number, y: number) {
  for (const [cx, cy] of cells) {
    const px = x + cx;
    const py = y + cy;
    if (px < 0 || px >= COLS || py >= ROWS) return true;
    if (locked.has(`${px},${py}`)) return true;
  }
  return false;
}

function spawnPiece(locked: Map<string, string>): Piece | null {
  const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
  const maxX = Math.max(...shape.map((c) => c[0]));
  const x = Math.floor(Math.random() * (COLS - maxX));
  const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  if (collides(locked, shape, x, 0)) return null;
  return { cells: shape, x, y: 0, color };
}

function buildMountainMask(cols: number, max: number) {
  const mask: number[] = [];
  let h = Math.floor(max / 2);
  for (let i = 0; i < cols; i++) {
    h += Math.floor(Math.random() * 3) - 1;
    h = Math.max(0, Math.min(max, h));
    mask.push(h);
  }
  return mask;
}

function clearFullRows(locked: Map<string, string>) {
  const fullRows: number[] = [];
  for (let y = 0; y < ROWS; y++) {
    let full = true;
    for (let x = 0; x < COLS; x++) {
      if (!locked.has(`${x},${y}`)) {
        full = false;
        break;
      }
    }
    if (full) fullRows.push(y);
  }
  if (!fullRows.length) return locked;
  const next = new Map<string, string>();
  locked.forEach((color, key) => {
    const [xs, ys] = key.split(",");
    const x = Number(xs);
    const y = Number(ys);
    if (fullRows.includes(y)) return;
    const shift = fullRows.filter((fy) => fy > y).length;
    next.set(`${x},${y + shift}`, color);
  });
  return next;
}

export function TetrisDots() {
  const [locked, setLocked] = useState<Map<string, string>>(() => new Map());
  const [piece, setPiece] = useState<Piece | null>(null);
  // Generated client-side only (after mount) — computing this during the
  // initial render would use a different Math.random() draw on the server
  // than on the client and cause a hydration mismatch.
  const [mountainMask, setMountainMask] = useState<number[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    // Deferred to a callback (rather than called synchronously in the effect
    // body) so it lands after the client's first render matches the server's.
    const id = setTimeout(() => setMountainMask(buildMountainMask(COLS, MOUNTAIN_MAX)), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!visibleRef.current) return;

      setPiece((current) => {
        let active = current;
        if (!active) {
          active = spawnPiece(locked);
          if (!active) {
            setLocked(new Map());
            return null;
          }
        }

        const shouldStick = Math.random() < STUCK_CHANCE;
        const blocked = shouldStick || collides(locked, active.cells, active.x, active.y + 1);

        if (blocked) {
          setLocked((prevLocked) => {
            const next = new Map(prevLocked);
            for (const [cx, cy] of active!.cells) {
              const px = active!.x + cx;
              const py = active!.y + cy;
              if (py >= 0 && py < ROWS) next.set(`${px},${py}`, active!.color);
            }
            return clearFullRows(next);
          });
          return null;
        }

        return { ...active, y: active.y + 1 };
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [locked]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!visibleRef.current) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      setPiece((current) => {
        if (!current) return current;
        const dx = e.key === "ArrowLeft" ? -1 : 1;
        const nextX = current.x + dx;
        if (collides(locked, current.cells, nextX, current.y)) return current;
        e.preventDefault();
        return { ...current, x: nextX };
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [locked]);

  const cells: Record<string, { color: string; active: boolean }> = {};
  locked.forEach((color, key) => {
    cells[key] = { color, active: false };
  });
  if (piece) {
    for (const [cx, cy] of piece.cells) {
      const px = piece.x + cx;
      const py = piece.y + cy;
      if (py >= 0) cells[`${px},${py}`] = { color: piece.color, active: true };
    }
  }

  return (
    <div ref={containerRef} className="w-full select-none" aria-hidden="true">
      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const x = i % COLS;
          const y = Math.floor(i / COLS);
          const cell = cells[`${x},${y}`];
          const hiddenByMountain = !cell && mountainMask !== null && y < mountainMask[x];
          return (
            <div key={i} className="aspect-square rounded-full transition-colors duration-200"
              style={{
                backgroundColor: hiddenByMountain
                  ? "transparent"
                  : cell
                    ? cell.color
                    : "rgba(255,255,255,0.08)",
                opacity: cell ? (cell.active ? 1 : 0.55) : 1,
                boxShadow: cell?.active ? "0 0 3px rgba(255,255,255,0.6)" : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
