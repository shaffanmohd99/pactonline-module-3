import { Fragment, use, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { TbSelector, TbCheck } from "react-icons/tb";
import { Popover } from "@headlessui/react";
import { ChangeStatusDialog } from "./ChangeStatusDialog";
import { IoMdPersonAdd } from "react-icons/io";
import { BsXCircle } from "react-icons/bs";
import Typography from "@/pages/components/Typography";
import { ChangeAssigneeDialog } from "./ChangeAssigneeDialog";

const names = [
  { name: "John Smith" },
  { name: "Alice Johnson" },
  { name: "Sofia Rodriguez" },
  { name: "Ahmed Al-Farsi" },
  { name: "Ling Chen" },
  { name: "Ananya Patel" },
  { name: "Elijah Mwangi Kamau" },
  { name: "Yuki Tanaka" },
  { name: "Isabella Moreno" },
  { name: "Aarav Kapoor" },
  { name: "None" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AssigneeSelect({
  intialValue,
  ticketId,
  type,
  refetch,
  historyRefetch,
}) {
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
  //set inital value of status
  const [filterArr, setfilteredArr] = useState([]);
  const [selected, setSelected] = useState();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState();
  const [name, setName] = useState();
  const [indexToRemove, setIndexToRemove] = useState();
  const [searchName, setSearchName] = useState(""); // Add state for search input

  const onSubmit = () => {
    setfilteredArr([...filterArr, selected.name]);
    setIsOpenDialog(false);
  };
  const removeItem = (indexToRemove) => {
    setfilteredArr((prevArr) =>
      prevArr.filter((_, index) => index !== indexToRemove)
    );
    setIsOpenDialog(false);
  };

  const renderName = () => {
    if (searchName !== "") {
      const filteredName = names.filter((item) =>
        item.name.toLowerCase().includes(searchName.toLowerCase())
      );
      return filteredName;
    } else {
      return names;
    }
  };
  return (
    <>
      <div className="relative">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="mt-1 relative">
                <Listbox.Button>
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-dashed border-grayLine ">
                    <IoMdPersonAdd className="text-lightGrayText" />
                  </span>
                </Listbox.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    onClose={() => console.log("meowwww")} // Reset searchName when the dropdown is closed
                    className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-body1 ring-1 ring-grayLine ring-opacity-5 overflow-auto focus:outline-none "
                  >
                    <div className="p-4 sticky -top-1 z-50 bg-white">
                      <input
                        placeholder="Search name"
                        onChange={(e) => setSearchName(e.target.value)}
                        value={searchName}
                        className="border border-grayLine w-full p-2 text-darkText rounded  appearance-none outline-none"
                      />
                    </div>
                    {renderName().length > 0 &&
                      renderName().map((item, index) => (
                        <Listbox.Option
                          key={index}
                          onClick={() => {
                            setIsOpenDialog(true);
                            setDialogType("add assignee");
                            setName(item.name);
                          }}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "text-darkText bg-grayBg"
                                : "text-darkText",
                              "cursor-default select-none relative py-2 pl-3 pr-9",
                              filterArr.includes(item.name) ? "bg-grayBg " : "",
                              item.name === "None" && "hidden"
                            )
                          }
                          value={item}
                          //disabled if for the currently choosen status
                          disabled={filterArr.includes(item.name)}
                        >
                          {({ selected }) => (
                            <>
                              <div className="flex items-center bg">
                                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                                  <span className="text-caption font-bold text-blue">
                                    {getInitials(item.name)}
                                  </span>
                                </span>
                                <span
                                  className={classNames(
                                    filterArr.includes(item.name) &&
                                      "font-semibold",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {item.name}
                                </span>
                              </div>
                              {filterArr.includes(item.name) ? (
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
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    {renderName().length < 1 && (
                      <Listbox.Option className="flex justify-center items-center">Not available</Listbox.Option>
                    )}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        {filterArr.length > 0 && (
          <Popover>
            <Popover.Button className="outline-none">
              <div className="absolute top-0 left-16 flex -space-x-2 overflow-hidden cursor-pointer">
                {filterArr.map(
                  (item, index) =>
                    index < 4 && (
                      <span
                        key={index}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white "
                      >
                        <span className="text-caption font-bold text-blue">
                          {getInitials(item)}
                        </span>
                      </span>
                    )
                )}
                {filterArr.length > 4 && (
                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                    <span className="text-caption font-bold text-blue">
                      {`+ ${filterArr.length - 4}`}
                    </span>
                  </span>
                )}
              </div>
            </Popover.Button>
            <Popover.Panel className="fixed right-[104px] w-[320px] mt-2  border border-grayLine rounded bg-white  z-[9999999] ">
              <div className="grid grid-cols-1 gap-1 ">
                <div className="pl-8 py-4">
                  <Typography variant="sub1" className="font-bold">
                    Assignee
                  </Typography>
                </div>
                {filterArr.map((item, index) => (
                  <div
                    className={` ${
                      index === filterArr.length - 1
                        ? ""
                        : "border-b border-grayLine "
                    } ${index === 0 ? "border-t border-grayLine " : ""}`}
                  >
                    <div
                      key={index}
                      className=" px-4 flex justify-between items-center "
                    >
                      <div className="block  px-4 py-2 text-body1">{item}</div>
                      <div
                        className=" cursor-pointer"
                        onClick={() => {
                          setDialogType("remove assignee");
                          setName(item);
                          setIsOpenDialog(true);
                          setIndexToRemove(index);
                        }}
                      >
                        <BsXCircle className="text-error  hover:text-redSecondary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Popover.Panel>
          </Popover>
        )}
      </div>
      {/* add change status dialog */}
      <ChangeAssigneeDialog
        onSubmit={onSubmit}
        type={dialogType}
        name={name}
        open={isOpenDialog}
        removeItem={removeItem}
        index={indexToRemove}
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
