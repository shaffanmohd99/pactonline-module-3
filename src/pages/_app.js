import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import NextProgress from "next-progress";
import Header from "./components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgInsights } from "react-icons/cg";
import { FaRegListAlt } from "react-icons/fa";
import { PiBellSimpleRingingLight } from "react-icons/pi";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const navItems = [
  {
    title: "My Task",
    href: "/dashboard",
    icon: <FaRegListAlt className=" mr-4 " size={24} />,
  },
  {
    title: "Request",
    href: "/request",
    icon: <PiBellSimpleRingingLight className=" mr-4 " size={24} />,
  },
  {
    title: "Insights",
    href: "/insight",
    icon: <CgInsights className=" mr-4 " size={24} />,
  },
];

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pathname = router.pathname;
  const showNav =
    router.pathname !== "/sign-in" && router.pathname !== "/" ? true : false;

  return (
    <>
      <NextProgress color="#DD0000" options={{ showSpinner: false }} />
      <main className={roboto.className}>
        <Header />
        <div className={`mt-[64px] ${showNav ? "flex" : ""} `}>
          {showNav && (
            <div className="w-[200px] mt-[64px] p-4 fixed h-full left-0 top-0 border-r-[1px] border-r-grayLine ">
              <nav>
                <ul className="space-y-2 flex flex-col gap-3">
                  {navItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <li
                        className={`flex items-center cursor-pointer px-4 py-3 hover:bg-baseBg hover:text-redSecondary
                                    ${
                                      pathname.includes(item.href)
                                        ? "text-redPrimary"
                                        : "text-lightGrayText"
                                    } `}
                      >
                        {item.icon}
                        <div className=" text-body1">{item.title}</div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          )}
          <section
            className={` ${
              showNav
                ? " w-full px-[24px] py-[12px] ml-[200px] overflow-y-auto mt-[30px]"
                : ""
            }`}
          >
            <Component {...pageProps} />
          </section>
        </div>
      </main>
    </>
  );
}
