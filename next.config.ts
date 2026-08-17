import type { NextConfig } from "next";

// 배포 경로. 여기 한 곳만 바꾸면 설정과 런타임 양쪽에 반영된다.
const basePath = "/landing";

const nextConfig: NextConfig = {
  // 정적 HTML로만 내보낸다 → 서버에 Node 프로세스가 필요 없고 nginx가 파일을 직접 서빙
  output: "export",

  // https://mymyy.com/landing/ 하위 경로로 서빙되므로 라우트·에셋 URL 전부 이 접두사를 탄다
  basePath,

  // 각 라우트를 <경로>/index.html 로 떨어뜨려서 nginx try_files 와 맞물리게 한다
  trailingSlash: true,

  // 정적 내보내기에서는 next/image 최적화 서버가 없으므로 비활성화.
  // 주의: unoptimized 로더는 src를 그대로 내보내서 basePath를 붙여주지 않는다.
  // 그래서 public/ 에셋은 lib/asset.ts 의 asset() 을 거쳐야 한다.
  images: { unoptimized: true },

  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
