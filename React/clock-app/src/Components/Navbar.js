import { Link } from "react-router-dom";
export default function Navbar() {

  return (
    <ul className="nav">
      <li>
        <Link to={"/"}>Clock</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </ul>
  );
}