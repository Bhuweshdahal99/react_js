import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import { useState } from "react";
import AddItem from "./components/AddItem.jsx";


function App() {
  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );

  const [newItem, setNewItem] = useState("");
  const [newprice, setnewPrice] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (name, price) => {
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const mynewItem = { id, name, price, checked: false };
    const listItem = [...item, mynewItem];
    setItem(listItem);
    localStorage.setItem("shoppingList", JSON.stringify(listItem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem || !newprice) return;
    addItem(newItem, newprice);
    setNewItem("");
    setnewPrice("");
  };

  const handleCheck = (id) => {
    const listItem = item.map((it) =>
      it.id === id ? { ...it, checked: !it.checked } : it
    );
    setItem(listItem);
    localStorage.setItem("shoppingList", JSON.stringify(listItem));
  };

  const handleDelete = (id) => {
    const listItem = item.filter((it) => it.id !== id);
    setItem(listItem);
    localStorage.setItem("shoppingList", JSON.stringify(listItem));
  };

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <AddItem
        newprice={newprice}
        setnewPrice={setnewPrice}
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <Main
        item={item.filter((it) =>
          it.name.toLowerCase().includes(search.toLowerCase())
        )}
        setItem={setItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <br />
      <Footer itemLength={item.length} />
    </>
  );
}
export default App;
