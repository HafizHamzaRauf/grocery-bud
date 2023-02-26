import { useContext } from "react";
import { ItemsContext } from "../store/context";
import classes from "./Header.module.css";
function Header(props) {
  const context = useContext(ItemsContext);
  return (
    <p className={`${classes.heading} ${classes[`color-${context.color}`]}`}>
      {props.children}
    </p>
  );
}
export default Header;
