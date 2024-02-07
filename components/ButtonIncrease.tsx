"use client"

import { useBearsStore } from "@/store/bears.store"

const ButtonIncrease = () => {
  const IncreaseBears = useBearsStore((state) => state.increasePopulation)
  return (
    <div>
        <button className="bg-black text-white px-4 py-2 rounded" onClick={IncreaseBears}>Increase Bears</button>
    </div>
  )
}

export default ButtonIncrease