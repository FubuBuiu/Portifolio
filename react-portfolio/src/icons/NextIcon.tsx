export function NextIcon({
  width = undefined,
  height = undefined,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <g>
        <path
          d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
          fill="black"
        />
        <path
          d="M39.8692 42.0052L18.4383 14.3999H14.4004V33.5919H17.6307V18.5022L37.3335 43.9586C38.2225 43.3636 39.0695 42.7106 39.8692 42.0052Z"
          fill="url(#paint0_linear_558_810)"
        />
        <path
          d="M33.867 14.3999H30.667V33.5999H33.867V14.3999Z"
          fill="url(#paint1_linear_558_810)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_558_810"
          x1="29.0671"
          y1="31.0666"
          x2="38.5337"
          y2="42.7999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_558_810"
          x1="32.267"
          y1="14.3999"
          x2="32.2134"
          y2="28.4999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
