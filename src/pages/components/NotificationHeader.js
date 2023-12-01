import { Popover } from "@headlessui/react";
import { BsBell, BsX } from "react-icons/bs";
import Typography from "./Typography";
import { useState } from "react";
import { useRouter } from "next/router";
const fakeNotification = [
  {
    name: "Ahmad Albab",
    content: "Kamarulzaman has commented on your request",
    updated_at: "15/11/2023 11:30:00",
  },
  {
    name: "Ariana Grande Venti",
    content: "Muhammad has assigned you to a request",
    updated_at: "8/8/2023 18:30:00",
  },
  {
    name: "Hans Zimmer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque a erat et massa erat et massa  erat et massa  erat et massa  erat et massa ",
    updated_at: "15/11/2023 14:30:00",
  },
  {
    name: "Moew",
    content: "You have 2 overdue task(s) today",
    updated_at: "11/11/2023 14:30:00",
  },
  {
    name: "Dua Tiga Empat Lipa",
    content: "Kamarulzaman has commented on your request",
    updated_at: "5/10/2023 14:30:00",
  },
];
const fakeNotificationUnread = [
  {
    name: "Ahmad Albab",
    content: "Kamarulzaman has commented on your request",
    updated_at: "15/11/2023 11:30:00",
  },
  {
    name: "Ariana Grande Venti",
    content: "Muhammad has assigned you to a request",
    updated_at: "8/8/2023 18:30:00",
  },
];

export default function NotificationHeader() {
  const router = useRouter();
  const [showPage, setShowPage] = useState("all");
  const getInitials = (name) => {
    // Split the name into words
    const words = name.split(" ");

    if (words.length > 1) {
      // Extract the first letter of the first and second words
      const initials = words.slice(0, 2).map((word) => word.charAt(0));
      // Join the initials together
      return initials.join("");
    } else {
      return name.charAt(0);
    }
  };
  return (
    <div>
      <Popover>
        <Popover.Button className="outline-none">
          <BsBell size={24} className="text-lightGrayText cursor-pointer" />
        </Popover.Button>
        <Popover.Panel className="fixed right-[100px] w-[400px] mt-2  border border-grayLine rounded bg-white  z-[9999999] ">
          <div className="grid grid-cols-1 gap-2 pt-4">
            <div className="flex items-center flex-col  pb-2">
              <div className="flex items-center justify-between w-full">
                <Typography variant="sub_bold" className="px-4">
                  Notification
                </Typography>
                {/* <BsX
                    className="text-darkText hover:text-error cursor-pointer mr-4"
                    size={24}
                  /> */}
              </div>
              <div className="w-full border-b border-grayLine  flex text-sub1">
                <div
                  onClick={() => setShowPage("all")}
                  className={`p-4 cursor-pointer text-sub1 font-bold ${
                    showPage === "all"
                      ? "text-redPrimary border-b-2 border-redPrimary "
                      : "text-darkText"
                  }`}
                >
                  All
                </div>
                <div
                  onClick={() => setShowPage("unread")}
                  className={`p-4 cursor-pointer text-sub1 font-bold ${
                    showPage === "unread"
                      ? "text-redPrimary border-b-2 border-redPrimary "
                      : "text-darkText"
                  }`}
                >
                  Unread (2)
                </div>
              </div>
            </div>
            {showPage === "all" &&
              fakeNotification.map((item, index) => (
                <div
                  key={index}
                  className=" px-4 flex items-center gap-2 border-b border-grayBg py-4"
                >
                  <div>
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                      <span className="text-caption font-bold text-blue ">
                        {getInitials(item?.name)}
                      </span>
                    </span>
                  </div>
                  <div
                    //   onClick={dialogOpen}
                    className="flex flex-col"
                  >
                    <Typography variant="body1">{item.content}</Typography>
                    <Typography variant="body2" color="text-lightGrayText">
                      {item.updated_at}
                    </Typography>
                  </div>
                </div>
              ))}
            {showPage === "unread" &&
              fakeNotificationUnread.map((item, index) => (
                <div
                  key={index}
                  className=" px-4 flex items-center gap-2 border-b border-grayBg py-4"
                >
                  <div>
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                      <span className="text-caption font-bold text-blue ">
                        {getInitials(item?.name)}
                      </span>
                    </span>
                  </div>
                  <div
                    //   onClick={dialogOpen}
                    className="flex flex-col"
                  >
                    <Typography variant="body1">{item.content}</Typography>
                    <Typography variant="body2" color="text-lightGrayText">
                      {item.updated_at}
                    </Typography>
                  </div>
                </div>
              ))}
            <div className=" px-4 flex items-center justify-center  py-2">
              <Typography
                onClick={() => router.push("/notification")}
                variant="sub1"
                color="text-blue hover:text-blueHover"
                className="hover:underline cursor-pointer "
              >
                View all
              </Typography>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
