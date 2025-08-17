function AddItem({ newItem, setNewItem, handleSubmit,newprice,setnewPrice }) {
  return (
    <>
      <form className="AddItem" onSubmit={handleSubmit}>
        <input
          autoFocus
          id="addItem"
          type="text"
          placeholder="Enter item name"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input autoFocus type="number" placeholder="Enter price" value={newprice} onChange={(e)=> setnewPrice(e.target.value)} required />
        <button type="submit">Add an Item</button>
      </form>
    </>
  );
}
export default AddItem;
