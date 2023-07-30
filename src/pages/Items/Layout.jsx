import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayout() {
  const { pathname } = useLocation()

  return (
    <main>
      <h1>Stock Items</h1>
      <div className="tabs">
        <Link to="/React-Stock/items" className={`tab ${pathname === "/React-Stock/items" ? "active" : ""}`}>Todos os itens</Link>
        <Link to="/React-Stock/items/new" className={`tab ${pathname === "/React-Stock/items/new" ? "active" : ""}`}>Novo Item</Link>
      </div>
      <Outlet />
    </main>
  )
}