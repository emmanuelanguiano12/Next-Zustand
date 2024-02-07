import { useCartStore } from "@/store/cart.store"

const TotalProduct = () => {

    const getTotalItems = useCartStore((state) => state.getTotalItems());
    const getTotalPrice = useCartStore((state) => state.getTotalPrices());

  return (
    <div className="py-2 text-center bg-gray-100 rounded-md px-4 flex justify-between">
        <p>Total Items: {getTotalItems}</p>
        <p>Total Price: {getTotalPrice}</p>
    </div>
  )
}

export default TotalProduct