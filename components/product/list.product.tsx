import { useCartStore } from "@/store/cart.store";

const ListProduct = () => {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="py-2 px-4 flex justify-between">
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ListProduct;
