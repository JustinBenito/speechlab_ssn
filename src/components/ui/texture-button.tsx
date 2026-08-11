"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariantsOuter = cva("inline-flex shrink-0", {
  variants: {
    variant: {
      primary:
        "border border-black/10 bg-gradient-to-b from-black/70 to-black p-[1px] transition duration-300 ease-in-out",
      accent:
        "border border-black/10 bg-gradient-to-b from-accent-300/90 to-accent-600 p-[1px] transition duration-300 ease-in-out",
      secondary:
        "border border-black/15 bg-white/60 p-[1px] transition duration-300 ease-in-out",
      minimal:
        "group/texture-button border border-black/15 bg-white/60 p-[1px] active:bg-neutral-200 hover:bg-gradient-to-t hover:from-neutral-100 hover:to-white transition duration-300 ease-in-out",
      icon: "group/texture-button rounded-full border border-black/10 bg-white/60 p-[1px] active:bg-neutral-200 hover:bg-gradient-to-t hover:from-neutral-100 hover:to-white transition duration-300 ease-in-out",
    },
    size: {
      sm: "rounded-[6px]",
      default: "rounded-full",
      lg: "rounded-full",
      icon: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const innerVariants = cva(
  "flex w-full items-center justify-center",
  {
    variants: {
      variant: {
        primary:
          "gap-2 bg-gradient-to-b from-neutral-800 to-black text-white/90 transition duration-300 ease-in-out hover:from-stone-800 hover:to-neutral-800/70 active:bg-gradient-to-b active:from-black active:to-black",
        accent:
          "gap-2 bg-gradient-to-b from-accent-400 to-accent-600 text-white/95 transition duration-300 ease-in-out hover:from-accent-400/80 hover:to-accent-600/80 active:from-accent-500 active:to-accent-700",
        secondary:
          "bg-gradient-to-b from-neutral-100/80 to-neutral-200/50 text-neutral-900 transition duration-300 ease-in-out hover:from-neutral-200/40 hover:to-neutral-300/60 active:from-neutral-200/60 active:to-neutral-300/70",
        minimal:
          "bg-gradient-to-b from-white to-neutral-50/50 text-neutral-900 transition duration-300 ease-in-out group-hover/texture-button:from-neutral-50/50 group-hover/texture-button:to-neutral-100/60 group-active/texture-button:from-neutral-100/60 group-active/texture-button:to-neutral-100/90",
        icon: "bg-gradient-to-b from-white to-neutral-50/50 group-active/texture-button:bg-neutral-200 rounded-full",
      },
      size: {
        sm: "text-xs rounded-[6px] px-3.5 py-1.5",
        default: "text-sm rounded-full px-5 py-2.5",
        lg: "text-base rounded-full px-6 py-3",
        icon: "rounded-full p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type TextureVariants = VariantProps<typeof buttonVariantsOuter>;

export interface TextureButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    TextureVariants {}

const TextureButton = React.forwardRef<HTMLButtonElement, TextureButtonProps>(
  ({ children, variant = "primary", size = "default", className, ...props }, ref) => (
    <button
      className={cn(buttonVariantsOuter({ variant, size }), className)}
      ref={ref}
      {...props}
    >
      <div className={cn(innerVariants({ variant, size }))}>{children}</div>
    </button>
  )
);
TextureButton.displayName = "TextureButton";

export interface TextureLinkProps extends LinkProps, TextureVariants {
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const TextureLink = React.forwardRef<HTMLAnchorElement, TextureLinkProps>(
  ({ children, variant = "primary", size = "default", className, ...props }, ref) => (
    <Link
      className={cn(buttonVariantsOuter({ variant, size }), className)}
      ref={ref}
      {...props}
    >
      <span className={cn(innerVariants({ variant, size }))}>{children}</span>
    </Link>
  )
);
TextureLink.displayName = "TextureLink";

export { TextureButton, TextureLink };
