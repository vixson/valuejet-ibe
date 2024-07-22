"use client";
import CustomInput from "@/components/custom-ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { login } from "@/store/authSlice";
import { useAppDispatch } from "@/store/store";
import { Formik } from "formik";
import { CiAt, CiLock } from "react-icons/ci";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      })}
      onSubmit={async (values) => {
        try {
          // await login(values.email, values.password);
          dispatch(login(values.email, values.password));
          toast({
            title: "welcome",
            description: "Login successful",
          });
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: (error as Error).message,
          });
        }
      }}
    >
      {({ values, touched, errors, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit} aria-label="login-form" noValidate>
          <CustomInput
            label="E-Mail Address"
            placeholder="E-Mail Address"
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            startIcon={<CiAt size={25} strokeWidth={0.9} />}
            containerClass="mb-6"
            data-testid="email-address"
            error={Boolean(touched.email && errors.email)}
            helperText={(!!touched.email && errors.email) || ""}
          />
          <CustomInput
            label="Password"
            placeholder="Password"
            type="password"
            name="password"
            startIcon={<CiLock size={25} strokeWidth={0.9} />}
            containerClass="mb-6"
            value={values.password}
            onChange={handleChange}
            error={Boolean(touched.password && errors.password)}
            helperText={(!!touched.password && errors.password) || ""}
          />

          <div className="flex items-center mb-6 -mt-4">
            <div className="flex ml-auto">
              <a
                href="#"
                className="inline-flex text-xs sm:text-sm hover:text-blue-700"
              >
                Forgot Your Password?
              </a>
            </div>
          </div>

          <div className="flex w-full">
            <Button type="submit" className="w-full">
              <span className="mr-2 uppercase">Login</span>
              <FaRegArrowAltCircleRight />
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
