import Typography from "@/pages/components/Typography";
import StatusSelect from "./StatusSelect";
import PrioritySelect from "./PrioritySelect";
import DateSelect from "./DateSelect";
import AssigneeSelect from "./AssigneeSelect";

export default function TaskDetail() {
  

  return (
    <>
     
      <div className="flex flex-col gap-4">
        <div>
          <Typography variant="body1">Status</Typography>
          <StatusSelect ticketId={1} intialValue="Open" />
        </div>
        <div>
          <Typography variant="body1">Priority</Typography>
          <PrioritySelect ticketId={1} intialValue="None" />
        </div>
        <div>
          <Typography variant="body1">Due date</Typography>
          <DateSelect ticketId={1} intialValue="None" />
        </div>
        <div>
          <Typography variant="body1">Assignee</Typography>
          <AssigneeSelect ticketId={1} intialValue="None" />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-2 text-body1 text-lightGrayText">
            Ticket ID
          </div>
          <div className="col-span-3 text-body1 text-darkText">123456789</div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-2 text-body1 text-lightGrayText">
            Created on
          </div>
          <div className="col-span-3 text-body1 text-darkText">
            Lee Chin Wei
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-2 text-body1 text-lightGrayText">
            Created by
          </div>
          <div className="col-span-3 text-body1 text-darkText">
            {/* {isLoading ? <SkeletonCard /> : data?.full_name} */}
            Muhammad Ali Bin Ahmadiaha Iskandariah Samsoliah Kamariah
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-2 text-body1 text-lightGrayText">
            Created on
          </div>
          <div className="col-span-3 text-body1 text-darkText">
            22/10/2022, 10:30 AM
          </div>
        </div>
      </div>
    </>
  );
}
