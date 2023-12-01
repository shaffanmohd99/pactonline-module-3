import { useState } from "react";
import { format, isToday, isYesterday, parse } from "date-fns";
import Button from "./Button";

export default function History() {
  const [comments, setComment] = useState("");

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
  //time of comment format
  const formatDateTime = (dateTimeString) => {
    const dateTime = parse(dateTimeString, "dd/MM/yyyy HH:mm:ss", new Date());

    if (isToday(dateTime)) {
      return format(dateTime, "'Today,' h:mm a");
    } else if (isYesterday(dateTime)) {
      return format(dateTime, "'Yesterday,' h:mm a");
    } else {
      return format(dateTime, "dd/MM/yyyy 'at' hh:mm a");
    }
  };
  const onSubmit = () => {
    console.log("🚀 ~ file: Comment.js:6 ~ Comment ~ comments:", comments);
  };
  const fakeData = [
    {
      user_name: "Shah Rukh Khan",
      updated_at: "15/11/2023 14:30:00",
      comment: "This is comment ",
      position: "Partner",
    },
    {
      user_name: "Taylor Swift ",
      updated_at: "15/11/2023 14:30:00",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      position: "Officer",
    },
    {
      user_name: "Siti Nurhaliza",
      updated_at: "15/11/2023 14:30:00",
      comment: "This is comment 3 ",
      position: "Officer",
    },
  ];
  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className="w-full">
        <div className="mt-8 flex flex-col gap-8">
          {fakeData?.map((item, index) => (
            <div key={index} className="flex fleoxc gap-4 items-start">
              <div>
                <div className="w-[48px] h-[48px] rounded-full flex  bg-defaultBg items-center justify-center  text-blue text-sub1 uppercase font-bold">
                  {getInitials(item.user_name)}
                </div>
              </div>
              <div className="flex flex-col gap-2  text-textPrimary">
                <div className="text-sub1 font-bold flex flex-col capitalize">
                  {item.user_name}
                  <div className="text-body2 text-lightGrayText   capitalize flex gap-2 items-center">
                    <div> {item.position}</div>
                    <div className="w-1 h-1 rounded-full bg-lightGrayText"></div>
                    <div> {formatDateTime(item.updated_at)}</div>
                  </div>
                </div>
                <div className="text-body1">{item.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
