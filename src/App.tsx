const projects = [
  {
    name: '아늑 (Anook)',
    desc: '1인 가구를 위한 주거 커뮤니티 · RAG 기반 AI 상담',
    stack: ['Next.js', 'Spring Boot', 'FastAPI', 'pgvector'],
    href: 'https://anook.mymyy.com',
  },
  {
    name: '베뉴온 (Venueon)',
    desc: '공간 대여 · 이벤트 예약 플랫폼',
    stack: ['Next.js', 'Spring Boot', 'MySQL'],
    href: 'https://venueon.mymyy.com',
  },
  {
    name: 'ncafe',
    desc: '카페 커뮤니티 서비스',
    stack: ['Next.js', 'Spring Boot'],
    href: 'https://mymyy.com',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase">
          Full-stack Developer
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight">조영일</h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          한 대의 서버 위에 세 개의 팀 프로젝트를 올려두고 직접 굴리고 있습니다.
          기획부터 배포·운영까지 흐름이 끊기지 않는 개발을 지향합니다.
        </p>

        <h2 className="mt-20 text-sm font-medium tracking-widest text-neutral-500 uppercase">
          Projects
        </h2>
        <ul className="mt-6 space-y-4">
          {projects.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                className="block rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 transition hover:border-neutral-600 hover:bg-neutral-900"
              >
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-neutral-400">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-20 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          <a href="mailto:13siban@gmail.com" className="hover:text-neutral-300">
            13siban@gmail.com
          </a>
        </footer>
      </div>
    </main>
  )
}

export default App
