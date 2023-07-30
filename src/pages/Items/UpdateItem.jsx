import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

export default function UpdateItem() {
  // pego o param da url >> id do item
  const { id } = useParams()
  const { getItem } = useStock()
  // passo o id p getItem q retorna o item desejado
  const itemToUpdate = getItem(id)

  return (
    <>
      <ItemForm itemToUpdate={itemToUpdate} />
    </>
  )
}