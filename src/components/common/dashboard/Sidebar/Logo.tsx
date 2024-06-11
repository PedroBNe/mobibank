import Image from "next/image";
import ImageLogo from "@/assets/logo/logo.png";

function Logo() {
  return (
    <div>
      <Image src={ImageLogo} alt="Logo" />
    </div>
  );
}

export default Logo;
