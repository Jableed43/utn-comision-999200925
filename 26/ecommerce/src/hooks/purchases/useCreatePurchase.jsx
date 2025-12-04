import { useState } from "react";
import { savePurchase } from "../../utils/purchaseStorage";

function useCreatePurchase() {
    const [error, setError] = useState()

    const createPurchase = (purchaseData) => {
        setError(null)

        // Suponemos:
        // el purchaseData nos llega:
        // productos y sus precios
        // cantidad de cada producto
        // el id del usuario
        // el estado de la compra

        // valor total del pedido
        const total = purchaseData.items.reduce((sum, item) => {
            // sum es un acumulador -> se va a guardar cada total
            // item.price es el precio del producto
            // item.quantity es la cantidad de X producto en mi pedido
            return sum + (item.price * item.quantity)
        }, 0)

        const purchase = {
            userId: purchase.userId,
            items: purchaseData.items,
            total: total,
            status: purchase.status || "PENDING"
        }

        const savedPurchase = savePurchase()
        return savedPurchase
    }
    return {error, createPurchase}
}

export default useCreatePurchase