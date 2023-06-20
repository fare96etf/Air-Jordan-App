export default function Sneaker({ params }: { params: { id: number } }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mt-8 mb-4">Air Jordan { params.id }</h1>
            <div className="prose">Something about Air Jordan { params.id }</div>
        </div>
    )
}