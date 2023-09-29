import { Link } from "react-router-dom";

function Footer () {
   return (
    
    <div id="footer">
      <Link class="link" to="/">Home</Link>
      <Link class="link" to="/red">Red</Link>
      <Link class="link" to="/blue">Blue</Link>
      <Link class="link" to="/green">Green</Link>
    </div>
   ) 
}

export default Footer;