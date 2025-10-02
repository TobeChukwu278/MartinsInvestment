export const Footer = () => {
    return (
        <div className="mt-auto glassmorphism border-t-2 border-[#5b13ec]/20 shadow-[0_-5px_25px_-5px_rgba(91,19,236,0.1)] px-9 py-7">
            <div className="flex flex-col sm:grid grid-cols-4 gap-4">
                <div>
                    <div className="flex gap-3">
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
                        <h1 className="font-bold text-[17px] mb-4">Martins Investment</h1>
                    </div>
                    <p>Driving the future of auto parts with web3 technology and unparalled performance.</p>
                </div>

                <div>
                    <h4 className="mb-4 font-bold text-[17px]">Quick Links</h4>

                    <div className="flex flex-col gap-2">
                        <a>Home</a>
                        <a>Catalogue</a>
                        <a>About Us</a>
                        <a>Blog</a>
                    </div>
                </div>


                <div>
                    <h4 className="mb-4 font-bold text-[17px]">Support</h4>

                    <div className="flex flex-col gap-2">
                        <a>FAQ</a>
                        <a>Contact Us</a>
                        <a>Shipping & Returns</a>
                        <a>Warranty Info</a>
                    </div>
                </div>


                <div>
                    <h4 className="mb-4 font-bold text-[17px]">Connect With Us</h4>

                    <div className="flex flex-col gap-2">
                        <a>Twitter</a>
                        <a>WhatsApp</a>
                        <a>FaceBook</a>
                        <a>Telegram</a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-[#5b13ec]/20 pt-6 text-center text-gray-500">
                <p>© 2025 Martins Investment. All Rights Reserved. Built on the decentralized web.</p>
            </div>
        </div>
    )
}
