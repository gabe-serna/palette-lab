import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  const getErrorMessage = (error: unknown): string => {
    if (typeof error === "object" && error !== null && "data" in error) {
      return (error as { data?: string }).data || "Unknown error";
    }
    return "Unknown error";
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{getErrorMessage(error)}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
