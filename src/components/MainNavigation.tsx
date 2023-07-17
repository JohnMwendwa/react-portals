import { useState } from "react";
import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [hidden, setHidden] = useState(true);

  const handleClose = () => {
    setHidden((prev) => !prev);
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleClose}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {!hidden && <SideDrawer onClose={handleClose} />}
    </>
  );
};

export default MainNavigation;
