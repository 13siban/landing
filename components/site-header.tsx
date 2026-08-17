import { Diamond, Search, XCircle } from "./icons";

const navLinks = ["Explore", "Sequences", "About"];

/* 데스크톱 검색 필드(480x44, r22). 좁은 폭에서는 헤더 두 번째 줄로 내려간다. */
function SearchField({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-11 items-center justify-between rounded-[22px] bg-field px-4 ${className}`}
    >
      <div className="flex items-center gap-2">
        <Search className="size-4 text-fg-muted" />
        <span className="text-sm font-normal text-fg-muted">try &apos;search&apos;</span>
      </div>
      <XCircle className="size-3.5 shrink-0 text-fg-muted" />
    </div>
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
        {/* 로고 + 내비 */}
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2">
            <Diamond className="size-3.5 text-fg" />
            <span className="text-md font-bold text-fg">Logo</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
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
        </div>

        <SearchField className="hidden w-[480px] lg:flex" />

        {/* 로그인 · 가입 */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="hidden text-sm font-medium text-fg transition-opacity hover:opacity-60 sm:block"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-[20px] bg-fg px-6 py-3 text-sm font-semibold text-on-action transition-opacity hover:opacity-85"
          >
            Sign up
          </a>
          </div>
        </div>
      </header>

      {/* 좁은 폭 전용 두 번째 줄: 검색은 lg 미만, 내비는 md 미만에서 등장 */}
      <div className="flex flex-col gap-3 border-b border-hairline bg-base px-5 pt-1 pb-4 sm:px-8 lg:hidden">
        <nav className="flex items-center gap-6 md:hidden">
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
        <SearchField className="flex w-full" />
      </div>
    </>
  );
}
