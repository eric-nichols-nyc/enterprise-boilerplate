import React from 'react'

const HorizontalList = () => {
  return (
    <div className="container border w-full h-full overflow-hidden">
      <div className="h-full overflow-auto">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="h-12 border">
            {i}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalList