/*
 * Figma에서 SVG로 내보낸 아이콘(6:196 search, 13:13 diamond, 6:184 x-circle)을
 * currentColor 로 바꿔 인라인한 것. 디자인의 스트로크 2 · round cap 규칙을 따른다.
 */

type IconProps = { className?: string };

export function Diamond({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.27053 6.46454C1.34126 6.29389 1.44494 6.13887 1.57562 6.00832L6.0027 1.58124C6.13325 1.45055 6.28828 1.34688 6.45892 1.27615C6.62956 1.20541 6.81247 1.16901 6.99719 1.16901C7.18191 1.16901 7.36482 1.20541 7.53546 1.27615C7.7061 1.34688 7.86113 1.45055 7.99168 1.58124L12.4188 6.00832C12.5494 6.13887 12.6531 6.29389 12.7239 6.46454C12.7946 6.63518 12.831 6.81809 12.831 7.00281C12.831 7.18753 12.7946 7.37044 12.7239 7.54108C12.6531 7.71172 12.5494 7.86675 12.4188 7.9973L7.99168 12.4244C7.86113 12.5551 7.7061 12.6587 7.53546 12.7295C7.36482 12.8002 7.18191 12.8366 6.99719 12.8366C6.81247 12.8366 6.62956 12.8002 6.45892 12.7295C6.28828 12.6587 6.13325 12.5551 6.0027 12.4244L1.57562 7.9973C1.44494 7.86675 1.34126 7.71172 1.27053 7.54108C1.1998 7.37044 1.16339 7.18753 1.16339 7.00281C1.16339 6.81809 1.1998 6.63518 1.27053 6.46454Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Search({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.7501 15.7501L12.4951 12.4951M14.25 8.25C14.25 11.5637 11.5637 14.25 8.25 14.25C4.93629 14.25 2.25 11.5637 2.25 8.25C2.25 4.93629 4.93629 2.25 8.25 2.25C11.5637 2.25 14.25 4.93629 14.25 8.25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XCircle({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.7502 5.24986L5.24992 8.75014M5.24992 5.24986L8.7502 8.75014M12.8339 7C12.8339 10.2219 10.222 12.8338 7.00006 12.8338C3.77814 12.8338 1.16626 10.2219 1.16626 7C1.16626 3.77808 3.77814 1.1662 7.00006 1.1662C10.222 1.1662 12.8339 3.77808 12.8339 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/*
 * Figma의 triangle-right 는 부모 프레임 회전이 적용되기 전 상태로 내보내져서
 * 그대로 쓰면 방향이 틀어진다. 재생 버튼 의도에 맞춰 오른쪽을 향하도록 다시 그렸다.
 */
export function Play({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10.5 6.13a1 1 0 0 1 0 1.74l-7 4.04A1 1 0 0 1 2 11.04V2.96a1 1 0 0 1 1.5-.87l7 4.04Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
