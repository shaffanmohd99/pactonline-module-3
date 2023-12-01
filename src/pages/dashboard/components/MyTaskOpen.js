import MyTaskOpenTable from "./MyTaskOpenTable";

const fakeData = [
  {
    request: "22/09/2022, 10:00PM",
    subject: "Unable to submit my WillPlan form subject too long here",
    status: "Open",
    priority: "high",
    due: "22/09/2022",
  },
  {
    request: "23/09/2022, 11:30AM",
    subject: "Issues with account login",
    status: "In Progress",
    priority: "medium",
    due: "25/09/2022",
  },
  {
    request: "24/09/2022, 02:45PM",
    subject: "Need assistance with payment",
    status: "Open",
    priority: "low",
    due: "27/09/2022",
  },
  {
    request: "25/09/2022, 09:15AM",
    subject: "Error in the mobile app",
    status: "Resolved",
    priority: "medium",
    due: "N/A",
  },
  {
    request: "26/09/2022, 03:00PM",
    subject: "Questions about account security",
    status: "Open",
    priority: "high",
    due: "28/09/2022",
  },
  {
    request: "27/09/2022, 01:30PM",
    subject: "Feedback on new website design",
    status: "Resolved",
    priority: "low",
    due: "N/A",
  },
];
export default function MyTaskOpen() {
  return (
    <div>
      <div className="flex items-center justify-between mt-[30px]">
        <div className="flex gap-4">
          <select
            // value={filterStatus}
            // onChange={(e) => setfilterStatus(e.target.value)}
            className="border text-body1 border-grayLine w-[240px] h-[48px] px-2 py-0.5 rounded focus:outline-none focus:border-grayLine"
          >
            <option value="all">All Request</option>
            <option value="completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <select
            // onChange={(e) => setfilterTime(e.target.value)}
            className="border text-body1 border-grayLine w-[240px] h-[48px] px-2 py-0.5 rounded focus:outline-none focus:border-grayLine"
          >
            <option value="">Priority</option>
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
          </select>
        </div>
      </div>
      <div className="mt-8 flex flex-col overflow-x-hidden">
        <div className=" sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <MyTaskOpenTable data={fakeData} />
          </div>
        </div>
      </div>
    </div>
  );
}
