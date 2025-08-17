import "../App.css";

function Main({ item , handleCheck,handleDelete }) {
 
  return (
    <>
      <main>
        <br />
        <h1>Items Lists</h1>
        <br />
        {item.length ? (
          <ul>
            {item.map((item) => (
              <li key={item.id} className="item">
                <div className="con1">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheck(item.id)}
                    className="checkbox"
                  />
                </div>
                <div className="con2">
                  <span
                    className="itemName"
                    style={
                      item.checked ? { textDecoration: "line-through" } : null
                    }
                  >
                    {item.name}
                  </span>
                </div>
                <div className="con3">
                  <span className="price">Price: ${item.price}</span>
                </div>
                <button
                  className="delBtn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>. . . No items in the list , Add an item!! </p>
        )}
      </main>
    </>
  );
}
export default Main;
