export function FlutterIcon({
    width = undefined,
    height = undefined,
  }: {
    width?: number;
    height?: number;
  }){
    return(<svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 766 949"
        fill="none"
      >
        <path
          d="M766.4 438.095H474.333L218.812 693.657L364.816 839.647L766.4 438.095Z"
          fill="#54C5F8"
        />
        <path
          d="M145.795 620.63L-0.268555 474.579L474.348 0H766.415L145.795 620.63Z"
          fill="#54C5F8"
        />
        <path
          d="M364.829 839.649L474.346 949.157H766.413L510.833 693.659L364.829 839.649Z"
          fill="#01579B"
        />
        <path
          d="M364.829 839.649L581.427 764.674L510.833 693.659L364.829 839.649Z"
          fill="url(#paint0_linear_925_447)"
        />
        <path
          d="M364.809 547.588L218.801 693.582L364.809 839.579L510.815 693.582L364.809 547.588Z"
          fill="#29B6F6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_925_447"
            x1="150.437"
            y1="1132.46"
            x2="744.372"
            y2="809.071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1A237E" stopOpacity="0.4" />
            <stop offset="1" stopColor="#1A237E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>)
}