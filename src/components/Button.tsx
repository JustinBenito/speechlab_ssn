import type { ReactNode } from "react";
import { TextureLink } from "./ui/texture-button";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "accent";
  external?: boolean;
  className?: string;
  size?: "default" | "sm" | "lg";
};

const variantMap = {
  primary: "primary",
  accent: "accent",
  ghost: "minimal",
} as const;

export function Button({
  href,
  children,
  variant = "ghost",
  external = false,
  className = "",
  size = "default",
}: ButtonProps) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <TextureLink
      href={href}
      variant={variantMap[variant]}
      size={size}
      className={`text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </TextureLink>
  );
}
