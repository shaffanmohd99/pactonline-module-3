import EmptyState from "@/pages/components/EmptyState";
import Pagination from "@/pages/components/Pagination";
import Skeleton from "@/pages/components/Skeleton";
import Typography from "@/pages/components/Typography";
import { useRouter } from "next/router";
import { BsBagCheckFill } from "react-icons/bs";

export default function MyTaskClosedTable({
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
            className="py-3.5 px-3 text-left text-body1  text-lightGrayText w-[150px] "
          >
            Close date
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-grayBg">
        {/* loading state */}
        {isLoading && (
          <tr>
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
                  <BsBagCheckFill size={36} className="text-lightGrayText" />
                }
                title="No closed request yet"
                subtitle="Any request that you have closed will appear here"
              />
            </td>
          </tr>
        )}
        {data.length > 0 && !isError && !isLoading && (
          <>
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={() => router.push(`/dashboard/${index + 1}`)}
                className="cursor-pointer"
              >
                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText "
                >
                  <div className="flex gap-2 items-center">
                    {item.subject}
                    {item.overdue && (
                      <div className="border border-error py-1 px-2 text-error text-body2 rounded-md  ">
                        Overdue
                      </div>
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText w-[150px] flex items-center gap-1 capitalize"
                >
                  <div
                    className={` w-[8px] h-[8px] rounded-full bg-grayLine`}
                  ></div>
                  {item.status}
                </th>

                <th
                  scope="col"
                  className="py-4 px-3 text-left text-body1  text-darkText w-[200px] "
                >
                  {item.close_date}
                </th>
              </tr>
            ))}
            <tr>
              <td colSpan="4">
                <Pagination to={1} from={10} />
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
}
