import { sneaker_list } from "@/data/sneaker_list"
import Link from "next/link"

export default function SneakerList() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mt-8 mb-4">Sneakers</h1>
            <div className="prose">
                <div className="grid gap-6 lg:grid-cols-3">
                    {sneaker_list.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                            <Link href={`/sneakers/${item.id}`}>
                                <img className="h-40 w-full object-cover mb-4 rounded-lg" src={item.imageUrl} alt={item.title} />
                                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-500">{item.description}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}