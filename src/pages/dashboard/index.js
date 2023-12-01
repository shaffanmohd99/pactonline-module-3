import { useState } from "react";
import Typography from "../components/Typography";
import MyTaskOpen from "./components/MyTaskOpen";
import MyTaskClosed from "./components/MyTaskClosed";

export default function Dashboard() {
  const tabList = [
    {
      title: "open",
    },
    {
      title: "close",
    },
  ];
 

  const [tab, setTab] = useState("open");
  return (
    <div>
      <Typography variant="h6" className="font-bold">
        My task
      </Typography>
      <div className="flex w-full h-[100px] justify-between mt-4">
        <div className="flex flex-col w-1/3 border justify-center border-grayBg px-3 ">
          <Typography variant="h5" className="font-bold">
            7
          </Typography>
          <Typography variant="body1" color="text-lightGrayText">
            Open request
          </Typography>
        </div>
        <div className="flex flex-col w-1/3 border-y justify-center border-grayBg px-3 ">
          <Typography variant="h5" className="font-bold">
            2
          </Typography>
          <Typography variant="body1" color="text-lightGrayText">
            Overdue request
          </Typography>
        </div>
        <div className="flex flex-col w-1/3 border justify-center border-grayBg px-3 ">
          <Typography variant="h5" className="font-bold">
            35
          </Typography>
          <Typography variant="body1" color="text-lightGrayText">
            Closed request
          </Typography>
        </div>
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
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
        {tab === "open" && <MyTaskOpen />}
        {tab === "close" && <MyTaskClosed />}
      </div>
    </div>
  );
}
