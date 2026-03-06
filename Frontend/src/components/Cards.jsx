import React from 'react'
import { Link } from "react-router-dom";


function Cards({item}) {
  
  return (<>
    <div className="mt-4 my-3 p-2 sm:p-3 w-full">
        <div className="card w-full sm:w-80 md:w-full lg:w-80 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between gap-2">
              <div className="badge badge-outline text-xs sm:text-sm">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 text-xs sm:text-sm rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Cards
