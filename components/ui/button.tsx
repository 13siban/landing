/*
 * 디자인 전반에 반복되는 pill 버튼.
 * Figma에는 크기가 세 벌 존재한다 (헤더 Sign up 14/600, Hero CTA 16/600,
 * View yours 12/600). 각각을 size 로, 채움/외곽선/흰배경을 variant 로 뒀다.
 */

type Variant = "solid" | "outline" | "surface";
type Size = "xs" | "sm" | "md";

const variants: Record<Variant, string> = {
  solid: "bg-fg text-on-action",
  outline: "border border-fg text-fg",
  surface: "bg-surface text-fg",
};

const sizes: Record<Size, string> = {
  xs: "h-7 rounded-[14px] px-3 text-xs",
  sm: "rounded-[20px] px-6 py-3 text-sm",
  md: "rounded-3xl px-8 py-3 text-md",
};

export function Button({
  children,
  href = "#",
  variant = "solid",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center font-semibold transition-opacity hover:opacity-85 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
