import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, color }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
