import { createContext, useState, useEffect, useCallback } from "react";

export const ItemsContext = createContext({
  items: [],
  editItems: () => {},
  showHeader: "",
  color: "green",
  setHeader: () => {},
  addItem: () => {},
  isEditing: false,
  editValue: "",
  removeItem: () => {},
  changeIsEditing: () => {},
  changeEditValue: () => {},
  getValueById: () => {},
  changeCurrentId: () => {},
  currentId: "",
  clearItems: () => {},
});

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [editValue, setEditValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [color, setColor] = useState("green");
  const [currentId, setCurrentId] = useState("");
  const [showHeader, setShowHeader] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItemHandler = useCallback(
    (item) => {
      setItems((prev) => [item, ...prev]);
    },
    [setItems]
  );

  const removeItemHanlder = useCallback(
    (id) => {
      setItems((prevState) =>
        prevState.filter((_, index) => index.toString() !== id)
      );
    },
    [setItems]
  );

  const clearItems = useCallback(() => {
    setItems([]);
  }, [setItems]);

  const setShowHeaderHandler = useCallback(
    (value, color) => {
      setShowHeader(value);
      setColor(color);
    },
    [setShowHeader, setColor]
  );

  const changeIsEditing = useCallback(
    (val) => {
      setIsEditing(val);
    },
    [setIsEditing]
  );

  const getValueById = useCallback(
    (id) => {
      return items.find((_, index) => id === index.toString());
    },
    [items]
  );

  const changeEditValue = useCallback(
    (val) => {
      setEditValue(val);
    },
    [setEditValue]
  );

  const changeCurrentId = useCallback(
    (val) => {
      setCurrentId(val);
    },
    [setCurrentId]
  );

  const editHandler = useCallback(
    (id, value) => {
      setItems((prevState) => {
        const newItems = prevState.filter(
          (_, index) => index.toString() !== id
        );
        return [value, ...newItems];
      });
    },
    [setItems]
  );

  return (
    <ItemsContext.Provider
      value={{
        clearItems,
        editItems: editHandler,
        changeCurrentId,
        currentId,
        getValueById,
        editValue,
        changeIsEditing,
        changeEditValue,
        isEditing,
        color,
        items,
        addItem: addItemHandler,
        showHeader,
        removeItem: removeItemHanlder,
        setHeader: setShowHeaderHandler,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
