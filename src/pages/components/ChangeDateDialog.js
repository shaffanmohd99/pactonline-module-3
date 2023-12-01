"use client";
import Button from "@/pages/components/Button";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { format } from "date-fns";

export function ChangeDateDialog({
  open,
  setCloseDialog,
  onSubmit,
  isLoading,
  type,
}) {
  return (
    <Dialog open={open} onClose={setCloseDialog} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-darkText bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* Container to center the panel */}
        <div className="flex min-h-full items-center justify-center ">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="rounded w-[550px] bg-white ">
            <div className="w-full">
              <div className="flex items-center justify-between w-full px-[32px] py-[14px] border-b border-grayBg">
                <div className="text-sub1 text-darkText ">
                  {type === undefined
                    ? "Are you sure you want to remove this date?"
                    : `Set due date to ${format(type, "PP")}`}
                </div>
                <AiOutlineClose
                  onClick={setCloseDialog}
                  size={18}
                  className="text-darkText hover:text-error cursor-pointer"
                />
              </div>

              <div className=" px-[32px] py-[14px] text-body1 text-darkText text-left">
                <div>Would you like to proceed with this?</div>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </div>
              </div>
              <div className="flex items-center justify-end w-full px-[32px] py-[14px] border-t border-grayBg">
                <div className="flex gap-2">
                  <Button onClick={setCloseDialog} variant="outlined" width="">
                    Cancel
                  </Button>
                  <Button
                    onClick={onSubmit}
                    variant="contained"
                    width="w-[200px]"
                  >
                    {/* {isLoading ? <LoadingButtonState /> : "Save Changes"} */}
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
