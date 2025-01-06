import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AuthGuard from "./services/AuthGuard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthGuard>
      <App />
    </AuthGuard>
  </BrowserRouter>
);
