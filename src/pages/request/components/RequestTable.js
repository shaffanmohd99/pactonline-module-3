import EmptyState from "@/pages/components/EmptyState";
import NameAvatar from "@/pages/components/NameAvatar";
import Pagination from "@/pages/components/Pagination";
import Skeleton from "@/pages/components/Skeleton";
import { useRouter } from "next/router";
import {
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
  MdSignalCellularAlt,
} from "react-icons/md";
import { PiBellSimpleRingingLight } from "react-icons/pi";

export default function RequestTable({
  data,
  isError = false,
  isLoading = false,
}) {
  const router = useRouter();
  return (
    <table className="min-w-full ">
      <thead>
        <tr className="bg-defaultBg">
          <th
            scope="col"
            className="py-3.5 text-left text-body1  text-lightGrayText sm:pl-6 md:pl-3 w-[200px]"
          >
            Request date
          </th>
          <th
            scope="col"
            className="py-3.5 px-3 text-left text-body1  text-lightGrayText"
          >
            Subject
          </th>
          <th
            scope="col"
            className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px] "
          >
            Status
          </th>
          <th
            scope="col"
            className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px]"
          >
            Priority
          </th>
          <th
            scope="col"
            className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px] "
          >
            Assignee
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-grayBg">
        {/* loading state */}
        {isLoading && (
          <tr>
            <th
              scope="col"
              className="py-3.5 text-left text-body1  text-lightGrayText sm:pl-6 md:pl-3 w-[200px]"
            >
              <Skeleton />
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-left text-body1  text-lightGrayText"
            >
              <Skeleton />
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px] "
            >
              <Skeleton />
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px]"
            >
              <Skeleton />
            </th>
            <th
              scope="col"
              className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px] "
            >
              <Skeleton />
            </th>
          </tr>
        )}
        {/* error state */}
        {isError && (
          <tr>
            <td colSpan="4">
              <EmptyState
                icon={
                  <PiBellSimpleRingingLight
                    size={36}
                    className="text-lightGrayText"
                  />
                }
                title="No open request yet"
                subtitle="Any new request assigned to you will appear here"
              />
            </td>
          </tr>
        )}

        {data.length > 0 && !isError && !isLoading && (
          <>
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={() => router.push(`/request/${index + 1}`)}
                className="cursor-pointer"
              >
                <th
                  scope="col"
                  className="py-4 text-left text-body1  text-darkText sm:pl-6 md:pl-3 w-[200px]"
                >
                  {item.request}
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText"
                >
                  {item.subject}
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText w-[150px]  "
                >
                  <div className="flex items-center gap-1">
                    <div
                      className={` w-[8px] h-[8px] rounded-full ${
                        item.status === "Open"
                          ? "bg-warning"
                          : item.status === "In Progress"
                          ? "bg-blue"
                          : item.status === "Resolved"
                          ? "bg-success"
                          : ""
                      } `}
                    ></div>
                    {item.status}
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText w-[150px] capitalize "
                >
                  <div className="flex items-center gap-1">
                    {item.priority === "low" && (
                      <MdSignalCellularAlt1Bar
                        className="text-success"
                        size={24}
                      />
                    )}
                    {item.priority === "high" && (
                      <MdSignalCellularAlt className="text-error" size={24} />
                    )}
                    {item.priority === "medium" && (
                      <MdSignalCellularAlt2Bar
                        className="text-warning"
                        size={24}
                      />
                    )}
                    {item.priority}
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText w-[150px] "
                >
                  <NameAvatar data={item.assignee} />
                </th>
              </tr>
            ))}
            <tr>
              <td colSpan="5">
                <Pagination to={1} from={10} />
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
