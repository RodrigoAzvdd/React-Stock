import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"
import PropTypes from 'prop-types'

DeleteButton.propTypes = {
    itemName: PropTypes.string,
    itemId: PropTypes.number
}

export default function DeleteButton({ itemName, itemId }) {
    const { deleteItem } = useStock()
    const navigate = useNavigate()

    const handleDelete = () => {
        if (confirm(`Deseja Excluir ${itemName}?`)) {
            deleteItem(itemId)
            navigate('/React-Stock/items')
        }
    }
    
    return (
        <button onClick={handleDelete} className="button is-danger is-small">Excluir</button>
    )

}