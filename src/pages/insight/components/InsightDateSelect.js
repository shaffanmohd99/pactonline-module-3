import { MdCalendarMonth } from "react-icons/md";
import { Transition, Popover } from "@headlessui/react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { GoTriangleDown } from "react-icons/go";
import { Fragment, useEffect, useState } from "react";
import Button from "@/pages/components/Button";
import Typography from "@/pages/components/Typography";
const data = [
  {
    title: "Last 7 days",
    value: {
      from: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      to: new Date(),
    },
  },
  {
    title: "Last 30 days",
    value: {
      from: new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
      to: new Date(),
    },
  },
  {
    title: "Last 90 days",
    value: {
      from: new Date(new Date().getTime() - 90 * 24 * 60 * 60 * 1000), // 90 days ago
      to: new Date(),
    },
  },
  {
    title: "This year",
    value: {
      from: new Date(new Date().getFullYear(), 0, 1), // Start of the current year
      to: new Date(),
    },
  },

  { title: "Custom" },
];

export default function InsightDateSelect() {
  const [range, setRange] = useState("None");
  const [radioSelect, setRadioSelect] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //create statment if value of range.from equal to any value of data.value.from
    const isRangeEqualFromAnyValueFrom = data.some((item) => {
      return item.value && item.value.from && range?.from === item.value.from;
    });

    if (
      !isRangeEqualFromAnyValueFrom &&
      range !== "None" &&
      range?.to !== new Date()
    ) {
      setRadioSelect("Custom");
    }
  }, [range]);

  return (
    <>
      <Popover>
        <Popover.Button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-[350px] bg-white border border-grayLine rounded-md shadow-sm pl-3 px-4 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-grayLine focus:border-line ring-grayLine text-body1 "
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center">
              <span>
                <MdCalendarMonth size={18} className="text-lightGrayText" />
              </span>
              <span className="ml-3 block truncate">
                {range === "None" ||
                range === undefined ||
                range.from === undefined ||
                range.to === undefined
                  ? "None"
                  : `${format(range?.from, "PP")} to ${format(
                      range?.to,
                      "PP"
                    )}`}
              </span>
            </div>
            <span>
              <GoTriangleDown size={18} className="text-lightGrayText" />
            </span>
          </div>
        </Popover.Button>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute z-10 mt-1  bg-white   rounded-md flex  ">
            <div className="  bg-white border border-grayLine p-4 ">
              <div>
                <fieldset>
                  <div className="flex flex-col gap-8">
                    {data?.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={index}
                          name="test"
                          type="radio"
                          value={item.title}
                          checked={item.title === radioSelect}
                          onChange={() => {
                            setRange(item.value);
                            setRadioSelect(item.title);
                          }}
                          // defaultChecked={defaultValue === item.title} // Set defaultChecked based on comparison
                          className="focus:ring-blue h-4 w-4 text-blue border-grayLine"
                        />
                        <label
                          htmlFor={item.title}
                          className="ml-3 block text-body1  text-darkText"
                        >
                          {item.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
            <div>
              <Calendar
                mode="range"
                numberOfMonths={2}
                pagedNavigation
                selected={range}
                onSelect={setRange}
                disabled={(date) => date > new Date()}
                // selected={datePicked}
                // onSelect={(e) => {
                //   setIsOpenDialog(true);
                //   setTempData(e);
                // }}
                className="rounded-tr-md  border-t border-r border-grayLine"
              />
              <div className="p-4 border-r border-b border-grayLine w-full flex justify-between">
                <div className="flex items-center gap-2 w-1/2">
                  <Typography variant="body1">
                    {`${
                      range?.from ? `${format(range?.from, "PP")} - ` : ""
                    }  ${range?.to ? format(range?.to, "PP") : ""}`}
                  </Typography>
                </div>
                <div className="flex items-center gap-2 w-1/2">
                  <Button
                    onClick={() => {
                      setRange("None");
                      setIsOpen(false);
                      setRadioSelect("");
                    }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      console.log(range);
                    }}
                    variant="contained"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
