import { Form, useActionData } from "react-router";
import FormFIeldInput from "../../components/FormFIeldInput";
import type { loginAction } from "../../actions/login.action";

export default function LoginPage() {
  const actionsData = useActionData<typeof loginAction>();

  const fieldErrors = actionsData?.fieldErrors || null;
  const formError = actionsData?.formError || null;
  // undefined?.[0];
  return (
    <div>
      <Form method="POST">
        <FormFIeldInput
          label="ชื่อผู้ใช้"
          id="username"
          name="username"
          error={fieldErrors?.username?.[0] || formError}
        />

        <FormFIeldInput
          label="รหัสผ่าน"
          id="password"
          name="password"
          error={fieldErrors?.password?.[0]}
        />

        <button className="px-2 py-1 bg-pink-500 rounded-2xl m-4">Login</button>
      </Form>
    </div>
  );
}
