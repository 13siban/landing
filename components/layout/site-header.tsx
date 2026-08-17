import { Diamond } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SearchField } from "@/components/ui/search-field";

const navLinks = ["Explore", "Sequences", "About"];

function NavLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex shrink-0 items-center ${className}`}>
      {navLinks.map((l) => (
        <a
          key={l}
          href="#"
          className="text-xs font-medium whitespace-nowrap text-fg transition-opacity hover:opacity-60 sm:text-sm"
        >
          {l}
        </a>
      ))}
    </nav>
  );
}

/*
 * 내비는 모바일에서도 항상 헤더 한 줄에 같이 있어야 한다(둘째 줄로 안 떨어짐).
 * 검색창을 lg 미만에서 아예 숨긴 덕에(SearchField 참고) 확보된 폭을 내비에 쓴다.
 * 좁은 화면에서는 좌우 패딩·gap·글자 크기를 줄여서 한 줄에 맞춘다. 로고·내비·
 * 버튼 모두 shrink-0로 고정해서 — 자리가 모자라면 보이지 않게 안으로 찌그러져
 * 겹치는 대신 실제로 넘치게 만들어(측정 가능하게) 폭 튜닝 실수를 바로 드러낸다.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-base">
      <div className="flex h-20 items-center justify-between gap-2 px-4 sm:gap-6 sm:px-8 lg:px-20">
        <div className="flex shrink-0 items-center gap-3 sm:gap-10">
          <a href="#" className="flex shrink-0 items-center gap-2">
            <Diamond className="size-3.5 text-fg" />
            <span className="text-md font-bold text-fg">Logo</span>
          </a>
          <NavLinks className="gap-2.5 sm:gap-6" />
        </div>

        <SearchField className="hidden w-[480px] lg:flex" />

        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
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
  );
}
