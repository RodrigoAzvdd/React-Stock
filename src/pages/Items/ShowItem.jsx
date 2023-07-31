import { Link, useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"
import DeleteButton from "../../components/DeleteButton"

export default function ShowItem() {
    const { id } = useParams()
    const { getItem, getCreatedDate, getUpdatedDate } = useStock()
    const item = getItem(id)

    return (
        <div className="item">
            <h2>{item.name}</h2>
            <Link to={`/React-Stock/items/${item.id}/update`} className="button is-small">Atualizar</Link>
            <DeleteButton itemId={item.id} itemName={item.name} />
            <div className="row">
                <span>Categoria: {item.category}</span>
                <span>Quantidade em estoque: {item.quantity}</span>
                <span>Preço: R$ {item.price}</span>
            </div>
            <div className="row">
                <p>{`Criado em: ${getCreatedDate(item.id)}`}</p>
                <p>{`Atualizado em: ${getUpdatedDate(item.id)}`}</p>
            </div>
            <p>{item.description}</p>
        </div>
    )
}