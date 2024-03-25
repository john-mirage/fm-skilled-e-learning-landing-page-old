export default function DesignIcon({ ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none" {...props}>
      <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_0_25)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M35 19H21C19.9 19 19 19.9 19 21V35C19 36.1 19.9 37 21 37H35C36.1 37 37 36.1 37 35V21C37 19.9 36.1 19 35 19ZM35 35L28 27V35H21L28 27V21H35V35Z" fill="white" />
      <mask id="mask0_0_25" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="19" y="19" width="18" height="18">
        <path fillRule="evenodd" clipRule="evenodd" d="M35 19H21C19.9 19 19 19.9 19 21V35C19 36.1 19.9 37 21 37H35C36.1 37 37 36.1 37 35V21C37 19.9 36.1 19 35 19ZM35 35L28 27V35H21L28 27V21H35V35Z" fill="white" />
      </mask>
      <g mask="url(#mask0_0_25)">
      </g>
      <defs>
        <linearGradient id="paint0_linear_0_25" x1="0" y1="0" x2="0" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6F48" />
          <stop offset="1" stopColor="#F02AA6" />
        </linearGradient>
      </defs>
    </svg>
  );
}