const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * public/ 아래 정적 파일의 URL을 만든다.
 *
 * next/link 와 라우팅은 basePath가 자동으로 붙지만, 정적 내보내기에서
 * `images.unoptimized` 를 쓰면 next/image 는 src를 손대지 않고 그대로 내보낸다.
 * 그래서 public/ 에셋을 참조할 땐 이걸 거쳐야 /landing 접두사가 붙는다.
 *
 *   <Image src={asset("/hero.png")} ... />
 *   <div style={{ backgroundImage: `url(${asset("/bg.svg")})` }} />
 */
export function asset(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
