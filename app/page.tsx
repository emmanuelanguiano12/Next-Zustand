"use client"

import ButtonIncrease from "@/components/ButtonIncrease"
import RemoveBears from "@/components/RemoveBears"
import AddProduct from "@/components/product/add.product"
import ListProduct from "@/components/product/list.product"
import TotalProduct from "@/components/product/total.product"
import { useBearsStore } from "@/store/bears.store"
import { useCartStore } from "@/store/cart.store"
import { useEffect } from "react"

const HomePage = () => {
  const bears = useBearsStore((state) => state.bears)

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  return (
    <div>
      <h1 className="text-center">Welcome</h1>
      <p>Bears: {bears}</p>
      <ButtonIncrease />
      <RemoveBears />
      <hr />
      <AddProduct />
      <ListProduct />
      <TotalProduct />
    </div>
  )
}

export default HomePage