import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the /sign-in route
    router.push("/sign-in");
  }, []);
  return null;
}
