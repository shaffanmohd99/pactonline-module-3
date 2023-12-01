/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsX } from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Typography from "./Typography";
import Button from "./Button";
import { BsFillFileEarmarkPdfFill, BsTrash3Fill } from "react-icons/bs";

export default function CreateRequestDialog({ open, setOpen }) {
  const [files, setFiles] = useState([]);
  const schema = yup.object().shape({
    client_name: yup.string().required("Client name is required"),
    request_type: yup.string().required("Type of request is required"),
    description: yup.string().required("Description is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      client_name: "",
      request_type: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    console.log(
      "🚀 ~ file: CreateRequestDialog.js:29 ~ onSubmit ~ data:",
      data
    );
  };
  const fakeHandleClose = () => {
    return null;
  };
  const handleClose = () => {
    setOpen(false); // Close the dialog
    reset({ client_name: "", request_type: "", description: "" });
    setFiles([]);
  };

  const temporaryFileUpload = (e) => {
    const file = e.target.files[0];
    const fileName = file.name.replace(/\s+/g, "_"); // Replace whitespace with underscores
    // const fileKeyName = `${file.lastModified}_${fileName}`;
    setFiles((prevFileArray) => [...prevFileArray, fileName]); // Replace keyName with the actual key name
  };
  const handleTemporaryDeleteFile = (index) => {
    //delete for files (usestate that in send to presignurl API)
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={fakeHandleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-darkText bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white   rounded-lg  bg text-left overflow-hidden shadow-xl sm:align-middle transform transition-all w-full sm:w-[50%]">
              <div className="w-full ">
                <div className="border-grayLine border-b">
                  <div className="w-full flex justify-between items-center py-4 px-8  ">
                    <Typography variant="sub_bold">New Request</Typography>
                    <BsX
                      onClick={handleClose}
                      className="text-darkText hover:text-redPrimary"
                      size={24}
                    />
                  </div>
                </div>
                <div className="px-8 w-full pt-5 flex flex-col gap-5 max-h-[550px] overflow-y-auto">
                  <div className="flex flex-col">
                    <label className="text-darkText text-sub1  font-bold  mb-[4px]">
                      Client name
                    </label>
                    <div className="w-full flex flex-col justify-center">
                      <input
                        placeholder="E.g Ahmad Bin Ali"
                        className="px-2 py-1  border border-grayLine w-full rounded  appearance-none outline-none "
                        {...register("client_name")}
                      />
                      <p className="text-body2 text-error">
                        {errors.client_name?.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-darkText text-sub1  font-bold  mb-[4px]">
                      Type of request
                    </label>
                    <div className="w-full flex flex-col justify-center">
                      <select
                        id="location"
                        name="location"
                        className=" block w-full px-2 py-1   text-base border-grayLine border outline-none rounded  "
                        {...register("request_type")}
                      >
                        <option value="one">United States</option>
                        <option value="two">Canada</option>
                        <option value="three">Mexico</option>
                      </select>
                      <p className="text-body2 text-error">
                        {errors.request_type?.message}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Typography variant="sub1" className="font-bold">
                      Description
                    </Typography>
                    <textarea
                      {...register("description")}
                      placeholder="Type here..."
                      className="px-2 mt-4 py-1 h-[180px] resize-none  w-full border border-grayLine rounded  appearance-none outline-none "
                    />
                    <p className=" text-body2 text-error">
                      {errors.description?.message}
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <label className="text-darkText text-sub1  font-bold  mb-[4px]">
                      Attachment (if any)
                    </label>
                    <label
                      htmlFor="fileInput"
                      className="flex cursor-pointer flex-col max-w-max  gap-4"
                    >
                      <div className="flex  items-center gap-2">
                        <div className="px-4 py-2 border border-grayLine rounded-md">
                          <Typography variant="body1">Upload File</Typography>
                        </div>
                        <Typography variant="body1" color="text-lightGrayText">
                          Accepted format: jpeg, png, pdf, mp4, GIF
                        </Typography>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      onChange={(e) => temporaryFileUpload(e)}
                    />
                  </div>
                  <div className="mt-5 w-full flex flex-wrap gap-4">
                    {files.map((item, index) => (
                      <div key={index} className=" flex flex-col items-center ">
                        <div className="h-[120px] w-[100px] bg-defaultBg rounded-md flex justify-center items-center  relative group">
                          <BsFillFileEarmarkPdfFill
                            className="text-lightGrayText"
                            size={60}
                          />
                          <div
                            className="absolute bg-grayBg p-1 top-1 right-1 text-darkText hover:text-redPrimary cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            onClick={() => handleTemporaryDeleteFile(index)}
                          >
                            <BsTrash3Fill size={15} />
                          </div>
                        </div>
                        <Typography variant="body1">{item}</Typography>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full justify-end pb-[30px]">
                    <div className="flex gap-2">
                      <Button
                        onClick={handleClose}
                        variant="outlined"
                        classNames="w-[200px]"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleSubmit(onSubmit)}
                        variant="contained"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
