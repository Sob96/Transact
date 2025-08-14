import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <>
      <div className={classes.check}>Hello world!</div>
      <Link to={'/home'}>Home</Link>
      <Link to={'/deposit'} >Deposit Money</Link>
      <Link to={'/send'} >Send Money</Link>
      <Link to={'/history'} >History</Link>
      <Outlet/>
    </>
  );
};
