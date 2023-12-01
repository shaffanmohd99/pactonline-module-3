import { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { TbSelector, TbCheck } from "react-icons/tb";
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
} from "react-icons/md";
import { ChangePriorityDialog } from "./ChangePriorityDialog";

const status = [
  { status: "High" },
  { status: "Medium" },
  { status: "Low" },
  { status: "None" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrioritySelect({
  intialValue,
  ticketId,
  type,
  refetch,
  historyRefetch,
}) {
  //set inital value of status
  const [filteredStatus, setfilteredStatus] = useState();
  useEffect(() => {
    let statusMatch;
    statusMatch = status.find((item) => item.status === intialValue);
    setfilteredStatus(statusMatch);
  }, [intialValue]);

  const [selected, setSelected] = useState(filteredStatus);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState();

  const onSubmit = () => {
    console.log(
      "🚀 ~ file: PrioritySelect.js:41 ~ onSubmit ~ selected:",
      selected
    );
    setfilteredStatus(selected);
    setIsOpenDialog(false);
  };
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-white border border-grayLine rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-grayLine focus:border-line ring-grayLine text-body1 ">
                <div className="flex items-center">
                  <span>
                    {filteredStatus?.status === "High" && (
                      <MdSignalCellularAlt size={18} className="text-error" />
                    )}
                    {filteredStatus?.status === "Medium" && (
                      <MdSignalCellularAlt2Bar
                        size={18}
                        className="text-warning"
                      />
                    )}
                    {filteredStatus?.status === "Low" && (
                      <MdSignalCellularAlt1Bar
                        size={18}
                        className="text-success"
                      />
                    )}
                  </span>
                  <span className="ml-3 block truncate">
                    {/* {filteredStatus?.status === "Awaiting reply"
                      ? "Awaiting reply"
                      : filteredStatus?.status} */}
                    {filteredStatus?.status}
                  </span>
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <TbSelector
                    className="h-5 w-5 text-lightGrayText"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-body1 ring-1 ring-grayLine ring-opacity-5 overflow-auto focus:outline-none ">
                  {status.map((item, index) => (
                    <Listbox.Option
                      key={index}
                      onClick={() => {
                        setIsOpenDialog(true);
                        setDialogType(item.status);
                      }}
                      className={({ active }) =>
                        classNames(
                          active ? "text-darkText bg-grayBg" : "text-darkText",
                          "cursor-default select-none relative py-2 pl-3 pr-9",
                          item.status === filteredStatus?.status
                            ? "bg-grayBg"
                            : "",
                          item.status === "None" && "hidden"
                        )
                      }
                      value={item}
                      //disabled if for the currently choosen status
                      disabled={item.status === filteredStatus?.status}
                    >
                      {({ selected }) => (
                        <>
                          <div className="flex items-center bg">
                            <span>
                              {item?.status === "High" && (
                                <MdSignalCellularAlt
                                  size={18}
                                  className="text-error"
                                />
                              )}
                              {item?.status === "Medium" && (
                                <MdSignalCellularAlt2Bar
                                  size={18}
                                  className="text-warning"
                                />
                              )}
                              {item?.status === "Low" && (
                                <MdSignalCellularAlt1Bar
                                  size={18}
                                  className="text-success"
                                />
                              )}
                            </span>
                            <span
                              className={classNames(
                                // selected &&
                                item.status === filteredStatus?.status
                                  ? "font-semibold "
                                  : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {item.status}
                              {/* <span className="sr-only">
                                {" "}
                                is {item.online ? "online" : "offline"}
                              </span> */}
                            </span>
                          </div>

                          {
                            //   selected &&
                            item.status === filteredStatus?.status ? (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <TbCheck
                                  className="h-5 w-5 text-success"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null
                          }
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      {/* add change status dialog */}
      <ChangePriorityDialog
        onSubmit={onSubmit}
        type={dialogType}
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
      {/* <Snackbar
          failed={snackbarFailed}
          show={show}
          close={() => setShow(false)}
          message={snackbarFailed ? "An error has occured" : "Status updated"}
        /> */}
    </>
  );
}
