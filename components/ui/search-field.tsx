import { Search, XCircle } from "@/components/icons";

/** 헤더의 검색 필드 (Figma 480x44, r22). 좁은 폭에서는 헤더 두 번째 줄로 내려간다. */
export function SearchField({
  placeholder = "try 'search'",
  className = "",
}: {
  placeholder?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-11 items-center justify-between rounded-[22px] bg-field px-4 ${className}`}
    >
      <div className="flex items-center gap-2">
        <Search className="size-4 text-fg-muted" />
        <span className="text-sm font-normal text-fg-muted">{placeholder}</span>
      </div>
      <XCircle className="size-3.5 shrink-0 text-fg-muted" />
    </div>
  );
}
