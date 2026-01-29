import { useRouteError } from "react-router";

export default function ErrorComponent() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <div>
        <p>error instanceof Error</p>
        <p>message : {error.message}</p>
      </div>
    );
  }

  return <div>Error . . .</div>;
}
