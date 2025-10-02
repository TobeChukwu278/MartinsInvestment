import { FaSearch, FaFilter } from "react-icons/fa"

const Search = () => {
    return (
        <div className="mb-10">
            <div className="relative flex items-center glassmorphism rounded-lg shadow-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 pointer-events-none">
                    <FaSearch />
                </div>
                <input
                    className="w-full rounded-lg border-transparent bg-transparent py-4 pl-12 pr-40 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5b13ec] focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Search for parts, e.g., 'brake pads'" type="search" />
                <button
                    className="absolute cursor-pointer inset-y-0 right-2 my-2 flex items-center gap-2 rounded-md bg-primary px-4 text-white hover:bg-[#5b13ec]/90 transition-colors shadow-neon-sm hover:shadow-neon">
                    <FaFilter />
                    <span className="font-semibold">Filters</span>
                </button>
            </div>
        </div>
    )
}

export default Search