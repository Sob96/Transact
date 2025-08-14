import { createRoot } from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import DepositMoney from "../pages/deposit/DepositMoney";
import SendMoney from "../pages/send/SendMoney";
import History from "../pages/history/History";


const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/deposit',
        element: <DepositMoney/>
      },
      {
        path: '/send',
        element: <SendMoney />
      },
      {
        path: '/history',
        element: <History/>
      },
    ]
  },
]);

container.render(
  <RouterProvider router={router} />
);