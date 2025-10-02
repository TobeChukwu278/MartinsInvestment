import { FaUserCircle, FaShoppingCart } from "react-icons/fa"

const Nav = () => {
    return (
        <div className="sticky top-0 z-50 glassmorphism p-4">
            <div className="flex justify-between items-center">

                {/* logo */}
                <div className="flex items-center gap-4">
                    <svg className="text-[#5b13ec] cursor-pointer" fill="none" height="28" viewBox="0 0 24 24" width="28"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"></path>
                        <path d="M3 7L12 12L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2"></path>
                        <path d="M12 22V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2"></path>
                        <path className="opacity-50" d="M17.5 4.5L7.5 9.5" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                    <h1 className="text-2xl font-bold text-[#161022] dark:text-white">Martins Investment & Co.</h1>
                </div>


                {/* Nav items */}
                <nav className="flex gap-4">
                    <button className="cursor-pointer"><FaUserCircle /></button>
                    <button className="cursor-pointer"><FaShoppingCart /></button>
                </nav>

            </div>
        </div>
    )
}

export default Nav