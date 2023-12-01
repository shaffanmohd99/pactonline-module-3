import { BsFillFileEarmarkPdfFill, BsTrash3Fill } from "react-icons/bs";

export default function CommentFile({ data, deletefile }) {
  const openFile = (file) => {
    window.open(file.url, "_blank");
  };

  return (
    <ul role="list" className="flex gap-4 flex-wrap mt-4 px-2">
      {data?.map((file, index) => (
        <li key={index} className="relative">
          <div
            className="group bg h-[85px] w-[85px] flex items-center justify-center rounded-md  bg-defaultBg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-grayBg focus-within:ring-grayBg overflow-hidden"
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
            {deletefile && (
              <div
                className="absolute z-[9999] p-1 top-1 right-1  cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                onClick={(e) => deletefile(e, index)}
              >
                <BsTrash3Fill
                  size={15}
                  className="text-darkText hover:text-error "
                />
              </div>
            )}
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.file_name}</span>
            </button>
          </div>
          <p className="mt-2 block text-body2 text-textPrimary max-w-[85px] overflow-hidden truncate pointer-events-none">
            {file.file_name}
          </p>
        </li>
      ))}
    </ul>
  );
}
