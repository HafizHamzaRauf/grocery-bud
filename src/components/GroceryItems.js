import Item from "./Item";
import classes from "./GroceryItems.module.css";
import { ItemsContext } from "../store/context";
import { useContext } from "react";
function GroceryItems(props) {
  const context = useContext(ItemsContext);

  const content = context.items.map((val, index) => (
    <Item id={index.toString()} text={val}></Item>
  ));
  return <ul className={classes.list}>{content}</ul>;
}
export default GroceryItems;
