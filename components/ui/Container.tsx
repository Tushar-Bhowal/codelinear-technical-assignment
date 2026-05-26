import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Container({ as: Tag = "div", className = "", children }: Props) {
  return <Tag className={`container-page ${className}`.trim()}>{children}</Tag>;
}
