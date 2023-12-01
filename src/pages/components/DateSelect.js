import { Fragment, useEffect, useRef, useState } from "react";
import { Transition, Popover } from "@headlessui/react";
import { format } from "date-fns";
import { MdCalendarMonth } from "react-icons/md";

import { Calendar } from "@/components/ui/calendar";
import { ChangeDateDialog } from "./ChangeDateDialog";

export default function DateSelect({
  intialValue,
  ticketId,
  type,
  refetch,
  historyRefetch,
}) {
  const [datePicked, setDatePicked] = useState(intialValue);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [tempData, setTempData] = useState();

  const onSubmit = () => {
    setDatePicked(tempData);
    setIsOpenDialog(false);
  };
  return (
    <>
      <Popover>
        <Popover.Button className="relative w-full bg-white border border-grayLine rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-grayLine focus:border-line ring-grayLine text-body1 ">
          <div className="flex items-center">
            <span>
              <MdCalendarMonth size={18} className="text-lightGrayText" />
            </span>
            <span className="ml-3 block truncate">
              {datePicked === "None" || datePicked === undefined
                ? "None"
                : format(datePicked, "PP")}
            </span>
          </div>
        </Popover.Button>
        <Popover.Panel className="absolute z-10 mt-1  bg-white  max-h-80 rounded-md  ">
          <Calendar
            mode="single"
            selected={datePicked}
            onSelect={(e) => {
              setIsOpenDialog(true);
              setTempData(e);
            }}
            className="rounded-md border border-grayLine"
          />
        </Popover.Panel>
      </Popover>
      {/* add change status dialog */}
      <ChangeDateDialog
        onSubmit={onSubmit}
        type={tempData}
        open={isOpenDialog}
        setCloseDialog={() => setIsOpenDialog(false)}
        //   isLoading={
        //     type === "aid"
        //       ? aidStatusIsLoading
        //       : type === "complaint"
        //       ? complaintStatusIsLoading
        //       : false
        //   }
      />
    </>
  );
}
