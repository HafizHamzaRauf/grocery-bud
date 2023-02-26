import { useContext } from "react";
import { ItemsContext } from "../../store/context";
import { clearHeader } from "../../utils/utils";
import classes from "./icons.module.css";

function DeleteIcon({ id }) {
  const context = useContext(ItemsContext);
  const deleteHandler = (e) => {
    context.setHeader("Item removed from the list", "red");

    context.removeItem(e.target.id);
    clearHeader(context);
  };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path
        className={classes.icons}
        onClick={deleteHandler}
        id={id}
        fill="red"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
      />
    </svg>
  );
}
export default DeleteIcon;
