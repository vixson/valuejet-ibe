import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  size?: number;
};

export const Logo = ({ size = 120 }: Props) => {
  let src = "/logo/valuejet-logo-white.png";

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt="Value Jet"
      className={cn("rounded-sm")}
    />
  );
};

export const SmallLogo = ({ size = 120 }: Props) => {
  let src = "/logo/logo-header.png";

  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt="Value Jet"
      className={cn("rounded-sm")}
    />
  );
};
