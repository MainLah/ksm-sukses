import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="w-screen h-screen flex flex-col justify-center text-center">
      <h1 className="text-3xl">hayooo neangan naon</h1>
      <p className="m-10">{error.statusText || error.message}</p>
    </div>
  );
}
