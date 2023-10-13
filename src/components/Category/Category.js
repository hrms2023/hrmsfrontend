'use client'
import { images } from '@/app/utils'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function Category() {
    const { data, isLoading } = useQuery({
        queryKey: "categories",
        queryFn: () =>
          fetch("http://localhost:8090/api/admin/category")
            .then((res) => res.json())
            .then((data) => {
              return data; 
            }),
      });
    return (
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-16 gap-y-5">
            {data?.data.map((items, id)=> (
                <div key={id} className="flex flex-col items-center text-center justify-around">
                <img src={items.image} className="h-20 hover:cursor-pointer shadow" alt="Paintings" />
                <p className="text-sm  font-semibold font-inter">{items.title}</p>
            </div>
            ))}
        </div>

    )
}

export default Category