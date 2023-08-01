import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function Home() {
  const { items } = useStock()

  const diversity = items.length
  const inventoryTotal = items.reduce((sum, item) => {
    return +sum + +item.quantity
  }, 0)

  const today = new Date()
  const limitDate = new Date()
  limitDate.setDate(limitDate.getDate() - 10)

  const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
  const recentTotal = recentItems.length

  const lowQuantityItemsList = items.filter(item => item.quantity <= 10)
  const lowQuantityItems = items.reduce((quantity, item) => {
    if (item.quantity <= 10) +quantity++
    return quantity
  }, 0)

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventário total
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes
          <span>{recentTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens acabando
          <span>{lowQuantityItems}</span>
        </div>
      </div>
      <div className="row">
        <div className="recent">
          <table>
            <thead>
              <tr>
                <th>Itens Recentes</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {recentItems.length <= 0 ?
                (
                  <tr>
                    <td colSpan={2}>Nenhum Item Cadastrado!</td>
                  </tr>
                )
                :
                recentItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <Link to={`/React-Stock/items/${item.id}`} className="button is-primary is-small">
                        Ver
                      </Link></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens Acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {
                lowQuantityItemsList.length <= 0 ?
                  (
                    <tr>
                      <td colSpan={3}>Nenhum Item Cadastrado!</td>
                    </tr>
                  )
                  :
                  lowQuantityItemsList.map(item => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Link to={`/React-Stock/items/${item.id}`} className="button is-primary is-small">
                          Ver
                        </Link></td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}