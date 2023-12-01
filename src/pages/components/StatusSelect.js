import { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { TbSelector, TbCheck } from "react-icons/tb";
import { ChangeStatusDialog } from "./ChangeStatusDialog";

const status = [
  { status: "Open" },
  { status: "In progress" },
  { status: "Closed" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StatusSelect({
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
      "🚀 ~ file: StatusSelect.js:37 ~ onSubmit ~ selected.status:",
      selected.status
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
                  <span
                    className={classNames(
                      filteredStatus?.status === "Open" && "bg-success",
                      filteredStatus?.status === "Closed" && "bg-grayLine",
                      filteredStatus?.status === "In progress" && "bg-warning",
                      "flex-shrink-0 inline-block h-2 w-2 rounded-full"
                    )}
                  />
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
                            : ""
                          //   item.status === "Open" && "hidden", // hide pending status for all type of tickets
                          //   item.status === "In progress" && "hidden", //hide awaiting reply status if it is aid ticket
                          //   item.status === "Closed" && "hidden", //hide awaiting reply status if it is aid ticket
                        )
                      }
                      value={item}
                      //disabled if for the currently choosen status
                      disabled={item.status === filteredStatus?.status}
                    >
                      {({ selected }) => (
                        <>
                          <div className="flex items-center bg">
                            <span
                              className={classNames(
                                item?.status === "Open" && "bg-success",
                                item?.status === "Closed" && "bg-grayLine",
                                item?.status === "In progress" && "bg-warning",
                                "flex-shrink-0 inline-block h-2 w-2 rounded-full"
                              )}
                              aria-hidden="true"
                            />
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
      <ChangeStatusDialog
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
