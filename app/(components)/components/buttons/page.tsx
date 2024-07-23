import React from 'react'

const ButtonPage = () => {
  return (
    <div>{
        Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="w-full h-60 border-b">Button {i}</div>
        ))
        }</div>
  )
}

export default ButtonPage