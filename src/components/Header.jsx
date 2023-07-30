import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/React-Stock/" className="logo">REACT STOCK</Link>
            <nav>
                <Link to="/React-Stock/">Início</Link>
                <Link to="/React-Stock/items">Items</Link>
            </nav>
        </header>
    )
}