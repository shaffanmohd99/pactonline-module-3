import Button from "@/pages/components/Button";
import RequestTable from "./RequestTable";
import { BsPlus } from "react-icons/bs";
import { useState } from "react";
import CreateRequestDialog from "@/pages/components/CreateRequestDialog";

const fakeData = [
  {
    request: "22/09/2022, 10:00PM",
    subject: "Unable to submit my WillPlan form subject too long here",
    status: "Open",
    priority: "high",
    assignee: ["Taylor Swift", "The Weekend and Weekday", "Chris Martin"],
  },
  {
    request: "23/09/2022, 11:30AM",
    subject: "Issues with account login",
    status: "In Progress",
    priority: "medium",
    assignee: ["John Doe", "Ahmed Ali"],
  },
  {
    request: "24/09/2022, 02:45PM",
    subject: "Need assistance with payment",
    status: "Open",
    priority: "low",
    assignee: ["Mia Rodriguez"],
  },
  {
    request: "25/09/2022, 09:15AM",
    subject: "Error in the mobile app",
    status: "Resolved",
    priority: "medium",
    assignee: ["Eva Davis", "Yuki Yamamoto", "Carlos Hernandez"],
  },
  {
    request: "26/09/2022, 03:00PM",
    subject: "Questions about account security",
    status: "Open",
    priority: "high",
    assignee: ["Henry White", "Lila Nguyen", "Raj Kapoor", "Mary Jane Watson"],
  },
  {
    request: "27/09/2022, 01:30PM",
    subject: "Feedback on new website design",
    status: "Resolved",
    priority: "low",
    assignee: [
      "Oliver Harris",
      "Aisha Khan",
      "Sofia Garcia",
      "Daniel Lewis Junior",
    ],
  },
];

export default function Request() {
  const [openDialog, setOpenDialog] = useState(false);
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
        <div onClick={() => setOpenDialog(true)}>
          <Button variant="contained" className="flex  items-center gap-2">
            <BsPlus size={24} className="text-white" />
            Create request
          </Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col overflow-x-hidden">
        <div className=" sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <RequestTable data={fakeData} />
          </div>
        </div>
      </div>
      <CreateRequestDialog open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
}
