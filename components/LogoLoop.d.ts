import { ComponentType, CSSProperties, ReactNode } from "react";

interface LogoItem {
  node: ReactNode;
  title?: string;
}

interface LogoLoopProps {
  logos?: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (logo: LogoItem, index: number) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const LogoLoop: ComponentType<LogoLoopProps>;
export default LogoLoop;
