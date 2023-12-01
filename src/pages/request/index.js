import Typography from "../components/Typography";
import MyTaskOpen from "../dashboard/components/MyTaskOpen";
import Request from "./components/Request";

export default function RequestPage() {
  return (
    <div>
      <Typography variant="h6" className="font-bold">
        Request
      </Typography>

      <div>
        <Request />
      </div>
    </div>
  );
}
