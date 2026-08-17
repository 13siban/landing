import { Search } from "@/components/icons";

/** Figma `Search/GB` — 다크 패널 위에 겹쳐 놓이는 반투명 검색 pill */
export function SearchPill({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex h-14 w-full max-w-[480px] items-center gap-3 rounded-[28px] border border-white bg-white/15 px-6 backdrop-blur-sm">
      <Search className="size-[18px] shrink-0 text-white" />
      <span className="text-md font-medium text-white">{placeholder}</span>
    </div>
  );
}
