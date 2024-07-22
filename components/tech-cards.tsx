import React from 'react'
import { TechCard } from './tech-card'
import { tech } from '../config/lp-grid-items'

const TechCards = () => {
    return (
        <div className="w-full border">
            <div className="w-full text-center m-4">Made with</div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {
                    tech.map((item, index) => {
                        return (
                       <TechCard item={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TechCards