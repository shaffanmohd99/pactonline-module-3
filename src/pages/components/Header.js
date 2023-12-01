import { useRouter } from "next/router";
import AvatarPopper from "./AvatarPopper";

export default function Header() {
  const router = useRouter();
  const showAvatar = router.pathname !== "/sign-in" ? true : false;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white h-16 border-b border-grayLine flex items-center justify-between px-4 z-[99999]">
      <img src="/ptlogo.png" alt="Logo" classname="h-8" />
      {showAvatar && (
        <AvatarPopper name="Taylor Swift" email="taylorswift@gmail.com" />
      )}
    </header>
  );
}
