import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Button from "@/pages/components/Button";
import Typography from "@/pages/components/Typography";
import { useRouter } from "next/router";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    password: yup.string().required("Please enter a password"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter an email address"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ file: index.js:20 ~ Login ~ data:", data);
    router.push("/dashboard");
  };
  return (
    <div>
      <div className="text-h6 mt-[60px] text-darkText">Sign in</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[20px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">
            Email/username
          </label>
          <input
            className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
            {...register("email")}
          />
          <p className="text-body2 text-error">{errors.email?.message}</p>
        </div>

        <div className="mt-[20px]">
          <label className="text-textPrimary text-sub1 mb-[4px]">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="px-2 py-1 border border-grayLine w-full rounded  appearance-none outline-none "
              {...register("password")}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <p className="text-body2 text-error">{errors.password?.message}</p>
          <Typography
            variant="sub1"
            className="font-bold cursor-pointer text-right py-2"
            color="text-blueHover"
          >
            Forgot password?
          </Typography>
        </div>

        <Button type="submit" variant="contained" className=" w-full mt-[14px]">
          Create account
        </Button>
      </form>
    </div>
  );
}
