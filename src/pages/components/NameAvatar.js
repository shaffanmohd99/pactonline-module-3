import { Popover } from "@headlessui/react";

export default function NameAvatar({ data }) {
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
  return (
    <div
      // className={`${styles}`}
      className="flex items-center gap-4"
    >
      <Popover className="relative">
        <Popover.Button className="outline-none">
          {data.length > 2 && (
            <div className="flex -space-x-2 overflow-hidden cursor-pointer">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                <span className="text-caption font-bold text-blue">
                  {getInitials(data[0])}
                </span>
              </span>
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                <span className="text-caption font-bold text-blue">
                  {`+ ${data.length - 1}`}
                </span>
              </span>
            </div>
          )}
          {data.length === 2 && (
            <div className="flex -space-x-2 overflow-hidden cursor-pointer">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white">
                <span className="text-caption font-bold text-blue">
                  {getInitials(data[0])}
                </span>
              </span>
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white ">
                <span className="text-caption font-bold text-blue">
                  {getInitials(data[1])}
                </span>
              </span>
            </div>
          )}
          {data.length === 1 && (
            <div className="flex -space-x-2 overflow-hidden cursor-pointer">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-defaultBg  border border-white">
                <span className="text-caption font-bold text-blue">
                  {getInitials(data[0])}
                </span>
              </span>
            </div>
          )}
        </Popover.Button>

        <Popover.Panel className="fixed right-[104px] w-[320px] mt-2  border border-grayLine rounded bg-white  z-[9999999] ">
          <div className="grid grid-cols-1 gap-1 py-4">
            {data.map((item, index) => (
              <div className=" pl-4">
                <div className="block cursor-pointer  px-4  ">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
