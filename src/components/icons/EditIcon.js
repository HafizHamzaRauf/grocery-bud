import { useContext } from "react";
import { ItemsContext } from "../../store/context";
import classes from "./icons.module.css";
function EditIcon({ id }) {
  const context = useContext(ItemsContext);
  const editHandler = (e) => {
    const value = context.getValueById(e.target.id);
    context.changeCurrentId(e.target.id);
    context.changeEditValue(value);
    context.changeIsEditing(true);
  };
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path
        className={classes.icons}
        onClick={editHandler}
        id={id}
        fill="green"
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
      ></path>
    </svg>
  );
}
export default EditIcon;
