import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import classes from "./Item.module.css";
function Item({ text, id }) {
  return (
    <li key={id} className={classes.item}>
      <p> {text}</p>
      <div className={classes["icon-container"]}>
        <EditIcon id={id}></EditIcon>
        <DeleteIcon id={id}></DeleteIcon>
      </div>
    </li>
  );
}

export default Item;
