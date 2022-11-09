import React from "react";
import { useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1>Error en el sistema</h1>
      <p>Lo siento papu hay un error</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
