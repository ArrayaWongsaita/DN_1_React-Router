import axios, { AxiosError } from "axios";
import { redirect, type ActionFunctionArgs } from "react-router";
import z from "zod";

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(3),
});

export async function loginAction(args: ActionFunctionArgs) {
  const { request } = args;
  const formData = await request.formData();
  const raw = Object.fromEntries(formData);

  // validate data
  const { success, error, data } = loginSchema.safeParse(raw);

  if (!success) {
    console.log("error", error);
    console.log("error", z.flattenError(error).fieldErrors);
    return {
      success: false,
      fieldErrors: z.flattenError(error).fieldErrors,
    };
  }

  console.log("data", data);
  //   return {
  //     success: true,
  //     message: "hi",
  //   };

  try {
    await axios.post("https://dummyjson.com/auth/login", data);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        formError: error.response?.data.message || "login error",
      };
    }
  }

  return redirect("/");
  // data object

  alert("login");
}

// loginAction(something)
