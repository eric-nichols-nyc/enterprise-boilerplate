import React from 'react'

const HorizontalList = () => {
  return (
    <div className="border w-full h-fulloverflow-hidden">
      <div className="h-full overflow-auto">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="h-12 border px-4">
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalList