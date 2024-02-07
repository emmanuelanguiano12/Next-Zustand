import { useBearsStore } from "@/store/bears.store"

const RemoveBears = () => {

    const removeBears = useBearsStore((state) => state.removeAllBears)

  return (
    <div>
        <button className="bg-red-500 hover:bg-red-800 text-white px-4 py-2 rounded" onClick={removeBears}>Clear Bears</button>
    </div>
  )
}

export default RemoveBears