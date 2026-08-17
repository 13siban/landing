/** Figma `Card/UnderText` — 이미지 자리 + 아래 캡션 */
export function CardUnderText({
  caption,
  overlay,
}: {
  caption: string;
  overlay?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* 412x564 (Figma). 실제 이미지가 들어오면 이 블록을 교체하면 된다. */}
      <div className="relative aspect-[412/564] w-full rounded-md bg-placeholder">
        {overlay}
      </div>
      <p className="text-center text-[15px] font-medium text-fg">{caption}</p>
    </div>
  );
}
