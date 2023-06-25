"use client"

import { sneaker_list } from "@/data/sneaker_list"
import Link from "next/link"
import { useState } from "react";

export default function SneakerList() {
    const [sneakers, setSneakers] = useState(sneaker_list);

    const inputHandler = (e: any) => {
        if (e.target?.value?.trim() === "") {
            setSneakers(sneaker_list);
            return;
        }

        const lowerCase = e.target?.value?.toLowerCase();
        setSneakers(sneaker_list.filter(sn => sn.shortDescription.toLowerCase().includes(lowerCase)));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mt-8 mb-4">Sneakers</h1>
            <input
                className="border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search by description..."
                onChange={inputHandler} 
            />
            <div className="prose">
                <div className="grid gap-6 lg:grid-cols-3">
                    {sneakers.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                            <Link href={`/sneakers/${item.id}`}>
                                <img className="h-40 w-full object-cover mb-4 rounded-lg" src={item.imageUrl} alt={item.title} />
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-500">{item.shortDescription}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}