/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type {
    ActionFunction,
    LoaderFunction,
    MetaFunction,
  } from "@remix-run/node";
  import { json, redirect } from "@remix-run/node";
  import { /*** Form, Link, ****/ useActionData, useSearchParams } from "@remix-run/react";
  import * as React from "react";
  
  import { verifyLogin } from "~/models/user.server";
  import { createUserSession, getUserId } from "~/session.server";
  import { safeRedirect, validateEmail } from "../util.client";
  
  export const loader: LoaderFunction = async ({ request }) => {
    const userId = await getUserId(request);
    //console.log(userid)
    if (userId) return redirect("/");
    return json({});
  };
  
  interface ActionData {
    errors?: {
      email?: string;
      password?: string;
    };
  }
  
  export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const redirectTo = safeRedirect(formData.get("redirectTo"), "/products");
    const remember = formData.get("remember");
  
    if (!validateEmail(email)) {
      return json<ActionData>(
        { errors: { email: "Email is invalid" } },
        { status: 400 }
      );
    }
  
    if (typeof password !== "string" || password.length === 0) {
      return json<ActionData>(
        { errors: { password: "Password is required" } },
        { status: 400 }
      );
    }
  
    if (password.length < 8) {
      return json<ActionData>(
        { errors: { password: "Password is too short" } },
        { status: 400 }
      );
    }
  
    const user = await verifyLogin(email, password);
  
    if (!user) {
      return json<ActionData>(
        { errors: { email: "Invalid email or password" } },
        { status: 400 }
      );
    }
  
    return createUserSession({
      request,
      userId: user.id,
      remember: remember === "on" ? true : false,
      redirectTo,
    });
  };
  
  export const meta: MetaFunction = () => {
    return {
      title: "Login",
    };
  };

export default function Login(){
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") || "/products";
    const actionData = useActionData() as ActionData;
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (actionData?.errors?.email) {
          emailRef.current?.focus();
        } else if (actionData?.errors?.password) {
          passwordRef.current?.focus();
        }
      }, [actionData]);
    return(
        <div className="flex min-h-full flex-col justify-center">
<div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700  ...">
    <form className="space-y-6 justify-center ..." action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input 
             ref={emailRef}
             id="email"
             autoFocus={true}
             name="email"
             type="email"
             autoComplete="email"
             aria-invalid={actionData?.errors?.email ? true : undefined}
             aria-describedby="email-error"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
            placeholder="name@company.com" 
            required />
            {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
             id="password"
             ref={passwordRef}
             name="password"
             type="password"
             autoComplete="current-password"
             aria-invalid={actionData?.errors?.password ? true : undefined}
             aria-describedby="password-error"
             placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
             required />
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
        </div>
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" name="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>
</div>)
}