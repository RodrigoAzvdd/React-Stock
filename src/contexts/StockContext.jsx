import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const StockContext = createContext({})

StockContextProvider.propTypes = {
    children: PropTypes.node
}

export function StockContextProvider({ children }) {

    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('react-stock')
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach(item => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items
    })

    const addItem = (item) => {
        setItems(currentItems => {
            const updatedItems = [item, ...currentItems]
            localStorage.setItem('react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const deleteItem = (itemId) => {
        // Filter com os elementos que nao possuem o mesmo id passado no param
        // retornando um array sem o elemento com id == itemId (param)
        setItems(currentItems => {
            const updatedItems = currentItems.filter(item => item.id !== +itemId)
            localStorage.setItem('react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const updateItem = (itemId, newAtributes) => {
        setItems(currentItems => {
            // Pego o index do objeto que deve ser atualizado
            const itemIndex = currentItems.findIndex(item => item.id === +itemId)
            // Faco uma copia do array Items >> pois nao posso alterar diretamente esse Items
            const updatedItems = [...currentItems]
            // uso o assign para fazer uma mescla
            // já que o objeto passado poaaui os mesmos (name, description ...)
            // ele irá alterar|atualizar >> fazendo com q o name seja atualizado para o name do objeto passado
            Object.assign(updatedItems[itemIndex], newAtributes)
            // salvo no localStorage passando para string
            localStorage.setItem('react-stock', JSON.stringify(updatedItems))
            // retorno o valor que sera setado no setItems
            // no caso, a array com o elemento no indexItem atualizado 
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return items.find(item => +itemId === item.id)
    }

    const stock = {
        items,
        addItem,
        deleteItem,
        getItem,
        updateItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}