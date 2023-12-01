import React from 'react'

export default function ButtonLarge({onClickFunction}) {
  return (
    <button onClick={onClickFunction} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
    </button>
  )
}
