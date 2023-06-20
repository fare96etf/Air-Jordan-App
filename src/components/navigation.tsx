export default function Navigation() {
    return (
        <nav className="bg-gray-800">
            <div className="bg-red-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="/images/jumpman_logo.png" alt="Logo" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                                </a>
                                <a href="/history" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                History
                                </a>
                                <a href="/sneakers" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Sneakers
                                </a>
                                <a href="/mj" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                MJ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}