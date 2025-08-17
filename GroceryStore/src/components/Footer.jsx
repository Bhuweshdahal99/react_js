import "../App.css";

function Footer({itemLength}) {
  return (
    <>
      <footer>
             {
               itemLength>1? (
                    <h1>{itemLength} items in the List</h1>
               ):(
                   <h1>{itemLength} item in the List</h1>
                )
               }
      </footer>
     
      
    </>
  );
}
export default Footer;
