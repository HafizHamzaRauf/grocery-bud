import { useContext, useRef } from "react";
import { ItemsContext } from "../store/context";
import { clearHeader } from "../utils/utils";
import classes from "./Form.module.css";
function Form(props) {
  const inputRef = useRef();
  const editRef = useRef();
  const context = useContext(ItemsContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim() === "") {
      context.setHeader("Please Enter some  value", "red");
      clearHeader(context);
      return;
    }
    context.addItem(inputRef.current.value);
    inputRef.current.value = "";
    context.setHeader("Item added to the list", "green");
    clearHeader(context);
  };
  const editHandler = (e) => {
    e.preventDefault();
    const enteredValue = context.editValue;
    if (enteredValue.trim() === "") {
      context.setHeader("Please Enter some  value", "red");
      clearHeader(context);
      return;
    }
    context.editItems(context.currentId, enteredValue);
    context.setHeader("Item has been edited", "green");
    clearHeader(context);
    context.changeCurrentId("");
    context.changeIsEditing(false);
    context.changeEditValue("");
    editRef.current.value = "";
  };
  return (
    <form
      onSubmit={!context.isEditing ? submitHandler : editHandler}
      className={classes["input-container"]}
    >
      {!context.isEditing ? (
        <input ref={inputRef} type={"text"} placeholder={"e.g eggs"} />
      ) : (
        <input
          value={context.editValue}
          ref={editRef}
          onChange={(e) => {
            context.changeEditValue(e.target.value);
          }}
          type={"text"}
          placeholder={"e.g eggs"}
        />
      )}

      <button className={classes.btn} type={"submit"}>
        {context.isEditing ? "Edit" : "Submit"}
      </button>
    </form>
  );
}

export default Form;
