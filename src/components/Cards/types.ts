import { ReactNode } from "react";

export interface ShortcutCardProps {
  title: string;
  icon?: ReactNode;
}

export interface DotStyleProps {
  color?: string;
}

export interface BarStyleProps {
  color?: string;
  porcentage?: number;
}