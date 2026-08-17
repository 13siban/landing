import { Diamond } from "@/components/icons";

const social = ["Instagram", "TikTok", "X", "Substack"];
const legal = ["Careers", "Terms", "Privacy"];

function LinkRow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {items.map((l) => (
        <a
          key={l}
          href="#"
          className="text-sm font-medium text-fg-muted transition-colors hover:text-fg"
        >
          {l}
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-12 overflow-hidden">
      {/* 데스크톱은 좌 소셜 / 중앙 마크 / 우 법적고지 3분할, 모바일은 세로 스택 */}
      <div className="flex flex-col items-center gap-6 px-5 sm:px-8 md:flex-row md:justify-between lg:px-20">
        <LinkRow items={social} />
        <Diamond className="size-3.5 shrink-0 text-fg" />
        <LinkRow items={legal} />
      </div>

      {/*
       * 디자인상 240px 워드마크. 폭에 맞춰 줄어들되 좌우로 넘치지 않도록
       * 부모에서 overflow-hidden 으로 잘라낸다.
       */}
      <div className="text-center leading-none font-extrabold tracking-tight text-fg text-wordmark">
        YOURLOGO
      </div>
    </footer>
  );
}
