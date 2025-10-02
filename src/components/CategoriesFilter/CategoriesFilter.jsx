import { FaCogs, FaWrench, FaToolbox, FaTools } from 'react-icons/fa'
import { GiCarWheel, GiBoltDrop } from 'react-icons/gi'

const CategoriesFilter = () => {
    return (
        <div className="py-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <button
                    className="category-button cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all duration-300 glassmorphism bg-[#5b13ec] hover:bg-[#5b13ec]/20 hover:-translate-y-1">
                    <FaCogs />
                    <span className="font-semibold text-gray-200">Engine</span>
                </button>
                <button
                    className="category-button cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all duration-300 glassmorphism  bg-[#5b13ec] hover:bg-[#5b13ec]/20 hover:-translate-y-1">
                    <FaWrench />
                    <span className="font-semibold text-gray-200">Car Repairs</span>
                </button>
                <button
                    className="category-button cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all duration-300 glassmorphism  bg-[#5b13ec] hover:bg-[#5b13ec]/20 hover:-translate-y-1">
                    <GiCarWheel />
                    <span className="font-semibold text-gray-200">Tires</span>
                </button>
                <button
                    className="category-button cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all duration-300 glassmorphism bg-[#5b13ec]/20 hover:bg-[#300a7a] hover:-translate-y-1">
                    <GiBoltDrop />
                    <span className="font-semibold text-gray-200">Electricals</span>
                </button>
                <button
                    className="category-button cursor-pointer flex flex-col items-center justify-center gap-2 rounded-lg p-4 transition-all duration-300 glassmorphism bg-[#5b13ec] hover:bg-[#5b13ec]/20 hover:-translate-y-1">
                    <FaToolbox />
                    <span className="font-semibold text-gray-200">Accessories</span>
                </button>
            </div>
        </div>
    )
}

export default CategoriesFilter