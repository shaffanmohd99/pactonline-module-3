import MyTaskClosedTable from "./MyTaskClosedTable";
const fakeData = [
  {
    subject: "Unable to submit my will plan",
    close_date: "22/09/2022, 10:00PM",
    status: "closed",
    overdue: true,
  },
  {
    subject: "Technical issue with account login",
    close_date: "23/09/2022, 11:30AM",
    status: "closed",
    overdue: false,
  },
  {
    subject: "Payment not processed",
    close_date: "24/09/2022, 02:45PM",
    status: "closed",
    overdue: false,
  },
  {
    subject: "Inquiry about account balance",
    close_date: "25/09/2022, 04:15PM",
    status: "closed",
    overdue: true,
  },
  {
    subject: "Request for document verification",
    close_date: "26/09/2022, 09:20AM",
    status: "closed",
    overdue: false,
  },
  {
    subject: "Forgot password, unable to reset",
    close_date: "27/09/2022, 08:00AM",
    status: "closed",
    overdue: false,
  },
];
export default function MyTaskClosed() {
  return (
    <div className="mt-8 flex flex-col overflow-x-hidden">
      <div className=" sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <MyTaskClosedTable data={fakeData} />
        </div>
      </div>
    </div>
  );
}
