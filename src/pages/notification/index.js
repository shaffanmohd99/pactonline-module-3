import { useState } from "react";
import Typography from "../components/Typography";
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
export default function Notification() {
  const tabList = [
    {
      title: "all",
    },
    {
      title: "unread",
    },
  ];

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
  const [tab, setTab] = useState("all");
  return (
    <div>
      <div className="w-full items-end flex gap-4 ">
        <Typography variant="h6" className="font-bold">
          Notification
        </Typography>
        <Typography
          variant="sub1"
          className="font-bold hover:underline cursor-pointer"
          color="text-blue hover:text-blueHover"
        >
          Mark all as read
        </Typography>
      </div>

      <div>
        <div className="w-full  border-b border-grayLine flex gap-5 mt-[20px]   h-[45px]">
          {tabList.map((item, index) => (
            <div
              key={index}
              onClick={() => setTab(item.title)}
              className={`${
                item.title === tab ? "border-b-4 border-redPrimary " : ""
              } h-full flex items-center px-4 cursor-pointer  `}
            >
              <Typography
                variant="sub1"
                className={`font-bold  transition-colors  duration-300  ease-in-out capitalize ${
                  item.title === tab ? " text-redPrimary" : ""
                } `}
              >
                {item.title === "all" ? item.title : `${item.title} (2)`}
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {tab === "all" &&
            fakeNotification.map((item, index) => (
              <div
                key={index}
                className=" px-4 flex items-center gap-2 border-b border-grayBg py-6"
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
          {tab === "unread" &&
            fakeNotificationUnread.map((item, index) => (
              <div
                key={index}
                className=" px-4 flex items-center gap-2 border-b border-grayBg py-6"
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
        </div>
      </div>
    </div>
  );
}
