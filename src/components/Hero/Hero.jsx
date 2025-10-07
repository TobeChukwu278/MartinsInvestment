const Hero = () => {
    return (
        <div className="relative mt-12 mb-12 flex h-[400px] flex-col justify-end overflow-hidden rounded-xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center backgroundImage"></div>
            {/* Enhanced gradient - darker at bottom for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>

            <div className="relative z-10">
                <h2
                    className="text-5xl font-bold text-white drop-shadow-2xl tracking-tight"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    Find Your Drive
                </h2>
                <p
                    className="mt-2 max-w-lg text-lg text-gray-200 drop-shadow-lg"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                >
                    The future of auto parts is here. High-performance, blockchain-verified components for the modern enthusiast.
                </p>
            </div>
        </div>
    )
}

export default Hero