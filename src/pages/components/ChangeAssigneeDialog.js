"use client";
import Button from "@/pages/components/Button";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import LoadingButtonState from "./LoadingButtonState";

export function ChangeAssigneeDialog({
  open,
  setCloseDialog,
  onSubmit,
  isLoading,
  name,
  type,
  removeItem,
  index,
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
                {type === "add assignee" && (
                  <div className="text-sub1 text-darkText ">
                    {`Assign this task to ${name} ?`}
                  </div>
                )}
                {type === "remove assignee" && (
                  <div className="text-sub1 text-darkText ">
                    {`Remove ${name} from this task ?`}
                  </div>
                )}

                <AiOutlineClose
                  onClick={setCloseDialog}
                  size={18}
                  className="text-darkText hover:text-error cursor-pointer"
                />
              </div>

              <div className=" px-[32px] py-[14px] text-body1 text-darkText text-center">
                <div className="text-justify">
                  Are sure you sure you want to mark this request as close?
                  After marking the request close, we will notify the requester
                  and you will no longer be able to edit the request or update
                  its progress. You cannot undo this action.
                </div>
              </div>
              <div className="flex items-center justify-end w-full px-[32px] py-[14px] border-t border-grayBg">
                <div className="flex gap-2">
                  <Button onClick={setCloseDialog} variant="outlined" width="">
                    Cancel
                  </Button>
                  <Button
                    onClick={
                      type === "add assignee"
                        ? onSubmit
                        : () => removeItem(index)
                    }
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
