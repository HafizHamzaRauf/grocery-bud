import { useContext } from "react";
import { ItemsContext } from "../store/context";
import { clearHeader } from "../utils/utils";
import Form from "./Form";
import GroceryItems from "./GroceryItems";
import Header from "./Header";
import classes from "./Main.module.css";

function Main() {
  const context = useContext(ItemsContext);
  const clearHandler = () => {
    context.setHeader("Items has been cleared", "red");
    clearHeader(context);
    context.clearItems();
  };
  return (
    <main className={classes.container}>
      <Header>{context.showHeader}</Header>
      <h1>Grocery Bud</h1>
      <Form />
      <GroceryItems />
      {context.items.length > 0 && (
        <button onClick={clearHandler} className={classes.clear}>
          Clear Items
        </button>
      )}
    </main>
  );
}

export default Main;
