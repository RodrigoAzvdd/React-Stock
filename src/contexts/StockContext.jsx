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

    const updateItem = (itemId, newAttributes) => {
        setItems(currentItems => {
            const updatedAt = new Date()
            const updatedItems = currentItems.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        ...newAttributes,
                        updatedAt
                    };
                }
                return item
            })
            localStorage.setItem('react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return items.find(item => +itemId === item.id)
    }

    const getCreatedDate = (itemId) => {
        const item = getItem(itemId)
        const day = item.createdAt.getDate()
        const month = item.createdAt.getMonth()
        const hour = item.createdAt.getHours()
        const min = item.createdAt.getMinutes()
        const sec = item.createdAt.getSeconds()

        return `${day}/${month} - ${hour}:${min}:${sec}`
    }

    const getUpdatedDate = (itemId) => {
        const item = getItem(itemId)
        const day = item.updatedAt.getDate()
        const month = item.updatedAt.getMonth()
        const hour = item.updatedAt.getHours()
        const min = item.updatedAt.getMinutes()
        const sec = item.updatedAt.getSeconds()

        return `${day}/${month} - ${hour}:${min}:${sec}`
    }

    const stock = {
        items,
        addItem,
        deleteItem,
        getItem,
        updateItem,
        getCreatedDate,
        getUpdatedDate
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}