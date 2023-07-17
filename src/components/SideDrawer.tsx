import { createPortal } from "react-dom";
import classes from "./SideDrawer.module.css";

interface SideDrawerProps {
  onClose: () => void;
}

const SideDrawer = ({ onClose }: SideDrawerProps) => {
  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <aside className={classes.drawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>,
    document.getElementById("drawer") as HTMLElement
  );
};

export default SideDrawer;
