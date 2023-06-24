import { sneaker_list } from "@/data/sneaker_list"
import fs from "fs"
import path from "path";

export default function Sneaker({ params }: { params: { id: number } }) {
    const sneaker = sneaker_list.find(sn => sn.id == params.id);
    const dir = path.resolve("./public", sneaker?.imageFolder as string);
    const filenames = fs.readdirSync(dir);

    const imgUrls: string[] = [];
    
    filenames.forEach(file => {
        imgUrls.push("/" + sneaker?.imageFolder as string + file);
    }); 

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mt-8 mb-4">Air Jordan { params.id }</h1>
            <div className="bg-red-800 text-white py-2">
                <div className="container px-6">
                    <div className="flex flex-col items-center sm:flex-row sm:space-x-8">
                        <img className="rounded-full w-52 h-52 object-contain" src={sneaker?.imageUrl} alt={sneaker?.title || "image"} />
                        <div>
                            <p><span className="font-bold">Designed by:</span> {sneaker?.designedBy}</p>
                            <p><span className="font-bold">Release year:</span> {sneaker?.releaseYear}</p>
                            <p><span className="font-bold">Main feature:</span> {sneaker?.shortDescription}</p>
                        </div>
                    </div>
                    <div className="font-bold mt-4">More photos</div>
                    <div className="grid gap-6 grid-cols-4">
                    {imgUrls.map((url) => (
                        <div key={url} className="bg-white rounded shadow-md">
                            <img src={url} />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}