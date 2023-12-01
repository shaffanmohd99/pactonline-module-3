import { useState } from "react";
import { format, isToday, isYesterday, parse } from "date-fns";
import Button from "./Button";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import Typography from "./Typography";
import CommentFile from "./CommentFile";

const fakeData = [
  {
    user_name: "Shah Rukh Khan",
    updated_at: "15/11/2023 14:30:00",
    comment: "Saya nak makan",
    position: "officer",
  },
  {
    user_name: "Taylor Swift ",
    updated_at: "15/11/2023 14:30:00",
    comment: "Saya nak makan",
    position: "Partner",
    files: [
      {
        file_name: "yabedabedu.pdf",
        url: "https://www.africau.edu/images/default/sample.pdf",
      },
      {
        file_name: "meow.jpg",
        url: "https://picsum.photos/200/300",
      },
    ],
  },
  {
    user_name: "Siti Nurhaliza",
    updated_at: "15/11/2023 14:30:00",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    position: "Partner",
  },
];

export default function Comment() {
  const [show, setShow] = useState(false);
  const [comments, setComment] = useState("");
  const [files, setFiles] = useState([]);

  const temporaryFileUpload = (e) => {
    const file = e.target.files[0];
    const fileName = file.name.replace(/\s+/g, "_"); // Replace whitespace with underscores
    // const fileKeyName = `${file.lastModified}_${fileName}`;
    const newData = {
      file_name: fileName,
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    };
    setFiles((prevFileArray) => [...prevFileArray, newData]); // Replace keyName with the actual key name
  };
  const handleTemporaryDeleteFile = (event, index) => {
    //delete for files (usestate that in send to presignurl API)
    event.stopPropagation();

    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

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
  //time of comment format
  const formatDateTime = (dateTimeString) => {
    const dateTime = parse(dateTimeString, "dd/MM/yyyy HH:mm:ss", new Date());

    if (isToday(dateTime)) {
      return format(dateTime, "'Today,' h:mm a");
    } else if (isYesterday(dateTime)) {
      return format(dateTime, "'Yesterday,' h:mm a");
    } else {
      return format(dateTime, "dd/MM/yyyy 'at' hh:mm a");
    }
  };
  const onSubmit = () => {
    console.log("🚀 ~ file: Comment.js:6 ~ Comment ~ comments:", comments);
  };

  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className="w-full">
        <div className="border border-grayLine rounded ">
          <textarea
            placeholder="Leave a comment here"
            value={comments}
            onChange={(e) => setComment(e.target.value)}
            className={`w-full resize-none p-2 text-darkText  appearance-none outline-none  focus:h-[180px] focus:border-grayLine ${
              comments !== "" ? "h-[180px]" : " h-[48px]"
            }`}
          />
          {files.length > 0 && (
            <CommentFile data={files} deletefile={handleTemporaryDeleteFile} />
          )}
          {comments !== "" && (
            <div className="flex justify-between items-center  p-4">
              <div className="cursor-pointer">
                <label
                  htmlFor="fileInput"
                  className="flex cursor-pointer flex-col max-w-max  gap-4"
                >
                  <div className="flex  items-center gap-2">
                    <GrAttachment className="text-lightGrayText" />
                  </div>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={(e) => temporaryFileUpload(e)}
                />
              </div>
              <div className="flex gap-2 items-center justify-end ">
                <div className="flex gap-4 items-center">
                  <Typography
                    onClick={() => {
                      setComment("");
                      setFiles([]);
                    }}
                    variant="body1"
                    color="text-blue hover:text-blueHover"
                    className="cursor-pointer underline"
                  >
                    Cancel
                  </Typography>
                  {/* <Button onClick={() => setComment("")} variant="outlined">
                    Cancel
                  </Button> */}
                  <Button
                    onClick={onSubmit}
                    variant="contained"
                    className="flex items-center gap-2"
                  >
                    <IoSend className="text-white " />
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 flex flex-col gap-8">
          {fakeData?.map((item, index) => (
            <div key={index} className="flex fleoxc gap-4 items-start">
              <div>
                <div className="w-[48px] h-[48px] rounded-full flex  bg-defaultBg items-center justify-center  text-blue text-sub1 uppercase font-bold">
                  {getInitials(item.user_name)}
                </div>
              </div>
              <div className="flex flex-col gap-2  text-textPrimary">
                <div className="text-sub1 font-bold flex flex-col capitalize">
                  {item.user_name}
                  <div className="text-body2 text-lightGrayText   capitalize flex gap-2 items-center">
                    <div> {item.position}</div>
                    <div className="w-1 h-1 rounded-full bg-lightGrayText"></div>
                    <div> {formatDateTime(item.updated_at)}</div>
                  </div>
                </div>
                <div className="text-body1">{item.comment}</div>
                {item?.files?.length > 0 && (
                  <div>
                    <CommentFile data={item?.files} />
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* <Snackbar
            show={show}
            close={() => setShow(false)}
            message="Comment updated"
          /> */}
        </div>
      </div>
    </main>
  );
}
