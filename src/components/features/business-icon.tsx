export default function BusinessIcon({ ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" {...props}>
      <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_0_79)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35 22H33C33 19.24 30.76 17 28 17C25.24 17 23 19.24 23 22H21C19.9 22 19.01 22.9 19.01 24L19 36C19 37.1 19.9 38 21 38H35C36.1 38 37 37.1 37 36V24C37 22.9 36.1 22 35 22ZM28 19C29.66 19 31 20.34 31 22H25C25 20.34 26.34 19 28 19ZM28 29C25.24 29 23 26.76 23 24H25C25 25.66 26.34 27 28 27C29.66 27 31 25.66 31 24H33C33 26.76 30.76 29 28 29Z" fill="white" />
      <mask id="mask0_0_79" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="19" y="17" width="18" height="21">
        <path fillRule="evenodd" clipRule="evenodd" d="M35 22H33C33 19.24 30.76 17 28 17C25.24 17 23 19.24 23 22H21C19.9 22 19.01 22.9 19.01 24L19 36C19 37.1 19.9 38 21 38H35C36.1 38 37 37.1 37 36V24C37 22.9 36.1 22 35 22ZM28 19C29.66 19 31 20.34 31 22H25C25 20.34 26.34 19 28 19ZM28 29C25.24 29 23 26.76 23 24H25C25 25.66 26.34 27 28 27C29.66 27 31 25.66 31 24H33C33 26.76 30.76 29 28 29Z" fill="white" />
      </mask>
      <g mask="url(#mask0_0_79)">
      </g>
      <defs>
        <linearGradient id="paint0_linear_0_79" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6F48" />
          <stop offset="1" stopColor="#F02AA6" />
        </linearGradient>
      </defs>
    </svg>
  );
}