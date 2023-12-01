import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function File({ files }) {
  const openFile = (file) => {
    window.open(file.url, "_blank");
  };


  return (
    <>
      <ul
        role="list"
        className="flex gap-16 flex-wrap"
      >
        {files?.map((file, index) => (
          <li key={index} className="relative">
            <div
              className="group bg h-[150px] w-[140px] flex items-center justify-center rounded-md  bg-defaultBg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-grayBg focus-within:ring-grayBg overflow-hidden"
              onClick={() => openFile(file)}
            >
              {!file.file_name.includes("pdf") ? (
                <img
                  src={file.url}
                  alt="image"
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
              ) : (
                <div className="flex items-center justify-center text-4xl text-grayLine">
                  <BsFillFileEarmarkPdfFill size={60} />
                </div>
              )}
              <button
                type="button"
                className="absolute inset-0 focus:outline-none"
              >
                <span className="sr-only">
                  View details for {file.file_name}
                </span>
              </button>
            </div>
            <p className="mt-2 block text-body2 text-textPrimary truncate pointer-events-none">
              {file.file_name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
