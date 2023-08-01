import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

export default function UpdateItem() {
  const { id } = useParams()
  const { getItem } = useStock()
  const itemToUpdate = getItem(id)

  return (
    <>
      <ItemForm itemToUpdate={itemToUpdate} />
    </>
  )
}