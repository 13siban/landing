/** Figma `Tag/Color` — 색 스와치 + hex 라벨 */
export function TagColor({ hex }: { hex: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5">
      <span
        className="size-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: hex }}
      />
      <span className="text-xs font-semibold text-fg">{hex}</span>
    </div>
  );
}
