import Typography from "./Typography";

export default function EmptyState({ icon, title, subtitle }) {
  return (
    <div className=" w-full  flex justify-center items-center h-[250px]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-[90px] h-[90px] rounded-full bg-defaultBg flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col items-center">
          <Typography variant="sub_bold" color="text-lightGrayText">
            {title}
          </Typography>
          <Typography variant="body1" color="text-lightGrayText">
            {subtitle}
          </Typography>
        </div>
      </div>
    </div>
  );
}
