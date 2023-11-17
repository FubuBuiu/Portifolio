export function CypressIcon({
  width = undefined,
  height = undefined,
  isLightIcon = false,
}: {
  width?: number;
  height?: number;
  isLightIcon?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <defs>
        <linearGradient
          id="logosCypressIcon0"
          x1="6.32%"
          x2="87.52%"
          y1="44.028%"
          y2="58.406%"
        >
          <stop offset="0%" stop-color={isLightIcon ? "#92DFBF" : "#315C55"} />
          <stop offset="100%" stop-color={isLightIcon ? "white" : "#09293F"} />
        </linearGradient>
        <linearGradient
          id="logosCypressIcon1"
          x1="54.298%"
          x2="50%"
          y1="27.262%"
          y2="100%"
        >
          <stop offset="0%" stop-color={isLightIcon ? "#74D6AD" : "#4FB38D"} />
          <stop
            offset="100%"
            stop-color={isLightIcon ? "#92DFBF" : "#315C55"}
          />
        </linearGradient>
        <linearGradient
          id="logosCypressIcon2"
          x1="13.909%"
          x2="70.819%"
          y1="50%"
          y2="54.96%"
        >
          <stop offset="0%" stop-color={isLightIcon ? "#74D6AD" : "#4FB38D"} />
          <stop
            offset="100%"
            stop-color={isLightIcon ? "#74D6AD" : "#97DEC0"}
          />
        </linearGradient>
        <linearGradient
          id="logosCypressIcon3"
          x1="53.86%"
          x2="38.388%"
          y1="30.892%"
          y2="95.794%"
        >
          <stop offset="0%" stop-color={isLightIcon ? "#74D6AD" : "#97DEC0"} />
          <stop offset="100%" stop-color="ivory" stop-opacity="0" />
          <stop offset="100%" stop-color="ivory" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#logosCypressIcon0)"
        d="m141.651 223.943l-4.335 10.526c-.861 2.084-2.83 3.495-5.046 3.59c-1.464.056-2.94.097-4.431.097c-51.024-.027-96.169-36.113-107.355-85.836l-17.369 3.933c6.277 27.89 22.032 53.204 44.365 71.295c22.592 18.296 51.052 28.397 80.167 28.452h.26c1.71 0 3.406-.041 5.101-.11c9.136-.383 17.3-6.126 20.788-14.637l5.661-13.76l-17.806-3.55Z"
      />
      <path
        fill="url(#logosCypressIcon1)"
        d="M4.54 161.914A128.496 128.496 0 0 1 0 128.007C0 75.516 32.863 27.52 81.782 8.593l6.414 16.652c-42.108 16.295-70.39 57.59-70.39 102.762a110.66 110.66 0 0 0 3.898 29.178L4.54 161.914Z"
      />
      <path
        fill="url(#logosCypressIcon2)"
        d="M225.693 77.298c-19.037-36.662-56.509-59.44-97.769-59.44c-14.62 0-28.828 2.823-42.204 8.374L78.897 9.744C94.446 3.29 110.939 0 127.924 0c47.934 0 91.45 26.451 113.564 69.047l-15.795 8.25Z"
      />
      {/* COR DA LETRA C */}
      <path
        fill={isLightIcon ? "white" : "#09293F"}
        d="M89.727 101.597c10.326 0 18.737 5.523 23.058 15.158l.342.754l17.34-5.907l-.369-.891c-6.715-16.405-22.182-26.602-40.37-26.602c-12.787 0-23.181 4.112-31.77 12.554c-8.533 8.388-12.855 18.94-12.855 31.371c0 12.321 4.322 22.82 12.855 31.207c8.589 8.443 18.983 12.554 31.77 12.554c18.188 0 33.655-10.197 40.37-26.588l.37-.89l-17.368-5.922l-.329.782c-3.87 9.47-12.486 15.13-23.044 15.13c-7.193 0-13.265-2.521-18.08-7.483c-4.867-5.03-7.329-11.348-7.329-18.776c0-7.483 2.407-13.678 7.33-18.94c4.8-4.99 10.886-7.511 18.08-7.511Z"
      />
      {/* COR DA LETRA Y */}
      <path
        fill={isLightIcon ? "white" : "#09293F"}
        d="m198.341 85.726l-24.712 62.729l-24.877-62.729h-20.35l34.888 85.617l-24.822 60.385l17.792 3.55l61.309-149.552z"
      />
      <path
        fill="url(#logosCypressIcon3)"
        d="M241.488 69.047C250.491 86.585 256 107.185 256 128.27c0 49.2-27.671 91.916-68.253 113.343l-8.768-15.548c35.19-18.352 59.227-55.258 59.227-97.795c0-18.46-4.513-35.691-12.513-50.973l15.795-8.251Z"
      />
    </svg>
  );
}
