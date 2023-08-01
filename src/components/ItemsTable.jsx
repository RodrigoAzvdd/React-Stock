import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
    const { items } = useStock();

    return (
        <table className="itemsTable">
            <thead>
                <tr className="tr">
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody className="tbody">
                {items.length > 0 ?
                    items.map((item) => (
                        <tr className="tr" key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity} unid.</td>
                            <td>{item.category}</td>
                            <td className="td-btn">
                                <Link to={`/React-Stock/items/${item.id}`} className="button is-primary is-small">
                                    Ver
                                </Link>
                                <Link to={`/React-Stock/items/${item.id}/update`} className="button is-small">
                                    Atualizar
                                </Link>
                                <DeleteButton itemId={item.id} itemName={item.name} />
                            </td>
                        </tr>
                    ))
                    :
                    (
                        <tr>
                            <td colSpan={5}>
                                Nenhum Item Cadastrado!
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}