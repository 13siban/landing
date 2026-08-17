import { Play } from "@/components/icons";
import { CardUnderText, FormButton3, SearchGB, TagColor } from "@/components/parts";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/* Figma의 1300px 콘텐츠 폭. 좁아지면 좌우 여백만 줄어든다. */
const container = "mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-10";

/* 공통 CTA 버튼 (Sign up / Get the app / Download the app) */
function PillButton({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center rounded-3xl px-8 py-3 text-md font-semibold transition-opacity hover:opacity-85 ${
        variant === "solid"
          ? "bg-fg text-on-action"
          : "border border-fg text-fg"
      }`}
    >
      {children}
    </a>
  );
}

const modeCards = ["By color", "by visual similarity", "and without AI."];

export default function Home() {
  return (
    <div className="bg-base">
      <SiteHeader />

      <main>
        {/* ---------- Section 1 · Hero ---------- */}
        <section className="flex min-h-[560px] flex-col items-center justify-between gap-16 pt-20 pb-12 sm:pt-30 lg:min-h-[900px]">
          <div className={`flex max-w-[800px] flex-col items-center gap-6 ${container}`}>
            <p className="text-sm font-bold text-fg-muted">TITLE</p>
            <h1 className="text-center font-semibold text-balance text-fg text-hero">
              Welcome to
              <br />
              our new website!
            </h1>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <PillButton>Sign up</PillButton>
              <PillButton variant="outline">Get the app</PillButton>
            </div>
          </div>

          <div className={`flex items-center justify-center gap-2.5 ${container}`}>
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fg">
              <Play className="size-2.5 text-on-action" />
            </span>
            <p className="text-sm font-medium text-fg">
              Watch our new website. Watch our new website.
            </p>
          </div>
        </section>

        {/* ---------- Section 2 · Film ---------- */}
        <section className="py-20 lg:py-30">
          <div className={`flex flex-col gap-6 ${container}`}>
            {/* 1300x600 → 비율 유지. 실제 영상/이미지가 들어갈 자리. */}
            <div className="flex aspect-[13/6] min-h-[280px] items-end rounded-lg bg-placeholder p-6 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface">
                  <Play className="size-4 text-fg" />
                </span>
                <span className="text-lg font-semibold text-fg">Watch</span>
              </div>
            </div>
            <p className="text-center text-sm font-normal text-fg-muted">
              this is main banner section, insert video or image
            </p>
          </div>
        </section>

        {/* ---------- Section 3 · Search ---------- */}
        <section className="py-20 lg:py-30">
          <div className={`flex flex-col items-center gap-12 ${container}`}>
            <h2 className="text-center font-semibold text-balance text-fg text-section">
              Every search opens a new world.
            </h2>

            <div className="relative aspect-[65/27] min-h-[300px] w-full overflow-hidden rounded-lg bg-panel">
              {/* 3분할 이미지 자리. Figma상 1열만 상단 정렬, 2·3열은 중앙 정렬. */}
              <div className="absolute inset-0 flex">
                <div className="flex flex-1 items-start justify-start">
                  <div className="h-[52%] w-[46%] bg-placeholder" />
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-[56%] w-[51%] bg-placeholder" />
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-[48%] w-[42%] bg-placeholder" />
                </div>
              </div>
              {/* 검색 pill은 다크 패널 정중앙에 겹쳐 놓인다 (Figma 좌표 기준). */}
              <div className="absolute inset-0 grid place-items-center px-5">
                <SearchGB placeholder="your context in here" />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="text-center text-md font-medium text-fg-muted">
                Your collections, your references, your taste.
              </p>
              <p className="text-center text-md font-medium text-fg-muted">
                Connected, searchable, yours.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Section 4 · Modes ---------- */}
        <section className="py-20 lg:py-30">
          <div className={`flex flex-col items-center gap-10 lg:gap-16 ${container}`}>
            <h2 className="text-center font-semibold text-balance text-fg text-section">
              Watch the way you think.
            </h2>

            {/* 3열 → 태블릿 2열 → 모바일 1열 */}
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {modeCards.map((caption, i) => (
                <CardUnderText
                  key={caption}
                  caption={caption}
                  overlay={
                    i === 0 ? (
                      <div className="absolute bottom-[5%] left-[6%]">
                        <TagColor hex="#BC361B" />
                      </div>
                    ) : i === 2 ? (
                      <div className="absolute top-[3.5%] right-[6%] w-[62%] min-w-[200px]">
                        <FormButton3 />
                      </div>
                    ) : undefined
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Section 5 · Provenance ---------- */}
        <section className="py-20 lg:py-30">
          {/* 데스크톱 3단(420/420/420, gap 64) → 좁아지면 세로 스택 */}
          <div className="mx-auto flex w-full max-w-[1388px] flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:justify-center lg:gap-16 lg:px-10">
            <h2 className="w-full font-semibold text-fg text-section lg:max-w-[420px] lg:text-right">
              Know what
              <br />
              you&apos;re
              <br />
              looking at.
            </h2>

            <div className="flex aspect-[420/560] w-full max-w-[420px] items-center justify-center rounded-lg bg-placeholder p-6">
              <div className="flex flex-col items-center gap-2">
                <p className="text-center text-xs font-medium text-fg-muted">
                  Photograph by your name
                </p>
                <a
                  href="#"
                  className="flex h-7 items-center rounded-[14px] bg-surface px-3 text-xs font-semibold text-fg transition-opacity hover:opacity-85"
                >
                  View yours
                </a>
              </div>
            </div>

            <p className="w-full text-md leading-[1.625] font-normal text-fg-muted lg:max-w-[420px]">
              Company researches images—surfacing the artist, source, and story.
            </p>
          </div>
        </section>

        {/* ---------- Section 6 · Logos ---------- */}
        <section className="py-20 lg:py-30">
          <div className={`flex flex-col items-center gap-10 ${container}`}>
            <h2 className="max-w-[525px] text-[clamp(1.5rem,1rem+1.6vw,2rem)] leading-[1.3] font-semibold text-fg">
              They are our collaborative partner.
            </h2>
            {/* 10개 + 9개 두 줄. 좁아지면 자연스럽게 줄바꿈된다. */}
            <div className="flex max-w-[1144px] flex-wrap justify-center gap-4">
              {Array.from({ length: 19 }, (_, i) => (
                <div
                  key={i}
                  className="h-[30px] w-[100px] rounded-[4px] bg-placeholder"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Section 7 · CTA ---------- */}
        <section className="pt-20 pb-24 lg:pt-40 lg:pb-30">
          <div className={`flex flex-col items-center gap-6 ${container}`}>
            <p className="text-lg font-medium text-fg-muted">Dream with us.</p>
            <a
              href="#"
              className="flex w-full max-w-[440px] items-center justify-center rounded-[50px] bg-fg px-8 py-6 text-center text-[clamp(1.25rem,0.8rem+1.5vw,2rem)] leading-[1.3] font-bold text-on-action transition-opacity hover:opacity-85 lg:h-25 lg:py-0"
            >
              Sign up for Company
            </a>
            <PillButton variant="outline">Download the app</PillButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
