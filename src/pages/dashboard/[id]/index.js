import Comment from "@/pages/components/Comment";
import File from "@/pages/components/File";
import History from "@/pages/components/History";
import Typography from "@/pages/components/Typography";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import TaskDetail from "../../components/TaskDetail";
import { useRouter } from "next/router";

export default function IndividialTask() {
  const fakeData = [
    {
      file_name: "Yabedabedu.pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      file_name: "SampleDoc.pdf",
      url: "https://www.africau.edu/images/default/sample.pdf",
    },
    {
      file_name: "MyImage.pdf",
      url: "https://bayes.wustl.edu/etj/articles/random.pdf",
    },
    {
      file_name: "Document.png",
      url: "https://picsum.photos/200/300",
    },
    {
      file_name: "AnotherImage.pdf",
      url: "https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
    },
    {
      file_name: "Presentation.jpg",
      url: "https://picsum.photos/200/300",
    },
    // Add more data as needed
  ];
  const [showPage, setShowPage] = useState("comment");
const router=useRouter()
  return (
    <div className="w-full flex">
      <div className="w-[calc(100%-350px)] ">
        <div className="flex gap-2 items-center">
          <Typography
            variant="body1"
            color="text-blueHover"
            className="cursor-pointer hover:underline"
            onClick={() => router.push("/dashboard")}
          >
            My Task
          </Typography>
          <BsChevronRight size={12} className="text-lightGrayText" />
          <Typography variant="body1" color="text-lightGrayText">
            Unable to yabedabedu
          </Typography>
        </div>
        <div className="mt-[20px]">
          <Typography variant="h6" className="font-bold ">
            Unable to submit my WillPlan
          </Typography>
          <Typography variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </div>
        <div className="my-6">
          <File files={fakeData} />
        </div>
        <div className="w-full border-b border-grayLine  flex text-sub1">
          <div
            onClick={() => setShowPage("comment")}
            className={`p-4 cursor-pointer ${
              showPage === "comment"
                ? "text-redPrimary border-b-2 border-redPrimary font-bold"
                : "text-darkText"
            }`}
          >
            Comment
          </div>
          <div
            onClick={() => setShowPage("history")}
            className={`p-4 cursor-pointer ${
              showPage === "history"
                ? "text-redPrimary border-b-2 border-redPrimary font-bold"
                : "text-darkText"
            }`}
          >
            History
          </div>
        </div>
        <div className="my-6 ">
          <div>{showPage === "comment" && <Comment />}</div>
          <div>{showPage === "history" && <History />}</div>
        </div>
      </div>
      <div className=" w-[350px] py-4 mt-[64px]    border-l border-grayLine h-screen px-4 fixed right-0 top-0">
        <TaskDetail />
      </div>
    </div>
  );
}
