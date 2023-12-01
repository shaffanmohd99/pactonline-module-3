import { useState } from "react";
import Typography from "../components/Typography";
import MyTaskOpen from "../dashboard/components/MyTaskOpen";
import MyTaskClosed from "../dashboard/components/MyTaskClosed";
import Button from "../components/Button";
import InsightDateSelect from "./components/InsightDateSelect";

export default function Insights() {
  return (
    <div>
      <Typography variant="h6" className="font-bold">
        Insights
      </Typography>
      <div>
        <div className="flex items-center justify-between mt-[30px]">
         <InsightDateSelect/>
          <div>
            <Button variant="outlined">Export</Button>
          </div>
        </div>
        <div className="flex gap-[30px] mt-[20px] ">
          <div className="w-1/2 border border-grayBg">
            <div className="w-full border-b border-grayBg">
              <div className="flex flex-col gap-2 p-4">
                <Typography variant="h5" className="font-bold">
                  999,999
                </Typography>
                <Typography variant="body1" color="text-lightGrayText">
                  Total requests
                </Typography>
              </div>
            </div>
            <div className="p-4 w-full flex flex-col gap-4">
              <div className="flex w-full">
                <div className="w-1/4 h-10 bg-redPrimary rounded-l-md"></div>
                <div className="w-3/4 h-10 bg-blue rounded-r-md"></div>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="border-l-4 border-blue p-4 ">
                  <Typography variant="body1" color="text-lightGrayText">
                    Closed request
                  </Typography>
                </div>
                <div>
                  <Typography variant="sub_bold">999,999 (70%)</Typography>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="border-l-4 border-redPrimary p-4 ">
                  <Typography variant="body1" color="text-lightGrayText">
                    Overdue request
                  </Typography>
                </div>
                <div>
                  <Typography variant="sub_bold">999,999 (30%)</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="w-full border border-grayBg">
              <div className="flex flex-col gap-2 p-4">
                <Typography variant="h5" className="font-bold">
                  32 hr
                </Typography>
                <Typography variant="body1" color="text-lightGrayText">
                  Average closing duration
                </Typography>
              </div>
            </div>
            <div className="border-b border-x border-grayBg">
              <div className="p-4 ">
                <div className=" bg-defaultBg p-4">
                  <Typography variant="body1" color="text-lightGrayText">
                    Short explanation about average closing duration: Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
                    magna, pharetra vitae nibh eu, interdum mattis magna. Nullam
                    ut ligula felis mauris.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
