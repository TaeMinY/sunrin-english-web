import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SIgnUp.jsx";
import TodayWord from "./pages/TodayWord.jsx";
import Voca from "./pages/Voca.jsx";
import More from "./pages/More.jsx";
import MenuLayout from "./layouts/MenuLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // 라우터 연결
    ],
  },
]);

export default router;
