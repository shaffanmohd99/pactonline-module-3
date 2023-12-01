import { Popover } from "@headlessui/react";
import NotificationHeader from "./NotificationHeader";
// import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next-nprogress-bar";
// import Cookies from "universal-cookie";
// import LoadingPage from "./LoadingPage";
// import { logout } from "@/app/api/user";
// import { signOut } from "next-auth/react";

export default function AvatarPopper({
  dialogOpen,
  styles,
  email = "taylor@email.com",
  name = "taytay",
}) {
  // const { logoutMutate } = useContext(AuthContext);
  //   const cookies = new Cookies();
  //   const router = useRouter();
  //   const { mutate: logoutMutate, isLoading: logoutIsLoading } = useMutation(
  //     () => logout(),
  //     {
  //       onSuccess: (response) => {
  //         console.log(response);
  //         cookies.remove("ticketing_token");
  //         router.push("/");
  //       },
  //       onError: (error) => {
  //         console.log(error);
  //       },
  //     }
  //   );
  //   if (logoutIsLoading) {
  //     return <LoadingPage />;
  //   }
  //   else {

  return (
    <div
      // className={`${styles}`}
      className="flex items-center gap-4"
    >
      <NotificationHeader />
      <Popover className="relative">
        <div className="w-[48px] h-[48px] rounded-full bg-defaultBg border-grayLine  border flex items-center justify-center text-blue font-bold">
          <Popover.Button className=" focus:outline-none">
            {name?.charAt(0)}
          </Popover.Button>
        </div>
        <Popover.Panel className="fixed right-[24px] w-[320px] mt-2  border border-grayLine rounded bg-white  z-[9999999] ">
          <div className="grid grid-cols-1 gap-2 py-4">
            <div className="flex items-center gap-3 border-b border-grayLine pb-2">
              <div className=" pl-4">
                <div className="w-[48px] h-[48px] rounded-full bg-defaultBg border-grayLine  border flex items-center justify-center text-blue font-bold">
                  {name?.charAt(0)}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="text-sub1 ">{name}</div>
                <div className="text-body1 text-lightGrayText w-[220px] truncate underline cursor-pointer">
                  Manage
                </div>
              </div>
            </div>
            <div className=" pl-4">
              <div
                //   onClick={dialogOpen}
                className="block cursor-pointer py-2 px-4  hover:text-lightGrayText"
              >
                Account Settings
              </div>
            </div>
            <div className=" pl-4">
              <div
                // onClick={() => router.push("/transaction")}
                className="block py-2 cursor-pointer px-4 text-darkText hover:text-lightGrayText"
              >
                Transaction History
              </div>
            </div>
            <div className=" pl-4">
              <div
                //   onClick={logoutMutate}
                className="block py-2 cursor-pointer px-4 text-redPrimary hover:text-redSecondary"
              >
                Log out
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
// }
