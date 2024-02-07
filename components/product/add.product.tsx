"use client"

import { Item, useCartStore } from "@/store/cart.store"

const AddProduct = () => {

    const addToCart = useCartStore((state) => state.addToCart)

    const handleClickAddToCart = () => {
        const newItem: Item = {
            id: Date.now(),
            name: "Product" + Date.now(),
            price: Math.random() * 100
        };

        addToCart(newItem);
    }

  return (
    <div>
        <button
        onClick={handleClickAddToCart}
        className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded">
            Add Product
        </button>
    </div>
  )
}

export default AddProduct