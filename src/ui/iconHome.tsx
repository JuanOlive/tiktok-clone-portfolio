import * as React from "react";

// By: mdi
// See: https://v0.app/icon/mdi/home
// Example: <IconMdiHome width="24px" height="24px" style={{color: "#000000"}} />

export const IconMdiHome = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path fill={fill} d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
  </svg>
);
