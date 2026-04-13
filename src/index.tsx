import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import "./styles.css";

// biome-ignore lint/style/noNonNullAssertion: We are sure that the element with id "root" exists in the HTML.
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
