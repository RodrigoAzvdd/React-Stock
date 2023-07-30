import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">REACT STOCK</Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/items">Items</Link>
            </nav>
        </header>
    )
}