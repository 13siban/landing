import { Diamond } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SearchField } from "@/components/ui/search-field";

const navLinks = ["Explore", "Sequences", "About"];

function NavLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={`items-center gap-6 ${className}`}>
      {navLinks.map((l) => (
        <a
          key={l}
          href="#"
          className="text-sm font-medium text-fg transition-opacity hover:opacity-60"
        >
          {l}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <>
      {/*
       * 좁은 폭에서는 상단 바만 고정한다. 검색·내비까지 고정하면 헤더가 두 줄(약 150px)이 되어
       * 모바일 뷰포트를 지나치게 잠식하므로, 두 번째 줄은 흐름에 두고 스크롤에 흘려보낸다.
       */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-base">
        <div className="flex h-20 items-center justify-between gap-6 px-5 sm:px-8 lg:px-20">
          <div className="flex items-center gap-10">
            <a href="#" className="flex items-center gap-2">
              <Diamond className="size-3.5 text-fg" />
              <span className="text-md font-bold text-fg">Logo</span>
            </a>
            <NavLinks className="hidden md:flex" />
          </div>

          <SearchField className="hidden w-[480px] lg:flex" />

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hidden text-sm font-medium text-fg transition-opacity hover:opacity-60 sm:block"
            >
              Log in
            </a>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>

      {/* 좁은 폭 전용 두 번째 줄: 검색은 lg 미만, 내비는 md 미만에서 등장 */}
      <div className="flex flex-col gap-3 border-b border-hairline bg-base px-5 pt-1 pb-4 sm:px-8 lg:hidden">
        <NavLinks className="flex md:hidden" />
        <SearchField className="flex w-full" />
      </div>
    </>
  );
}
