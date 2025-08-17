import "../App.css";
import { FaSearch } from 'react-icons/fa';

function Header({search,setSearch}) {
  return (
    <>
      <header>
        <h1>MyGroceryList</h1>
        <form onSubmit={(e)=> e.preventDefault()} className="searchForm">
          <FaSearch className="search-icon" />
          <input
            className="searchInp"
            type="text"
            id="search"
            placeholder="Search for items"
            role="searchbox"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
    </>
  );
}
export default Header;
