const Hero = () => {
    return (
        <div className="relative mt-12 mb-12 flex h-[400px] flex-col justify-end overflow-hidden rounded-xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center backgroundImage"></div>
            <div
                className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent">
            </div>
            <div className="relative z-10">
                <h2 className="text-5xl font-bold text-white drop-shadow-lg shadowText">Find Your Drive</h2>
                <p className="mt-2 max-w-lg text-lg text-gray-300 drop-shadow-md">The future of auto parts is here.
                    High-performance, blockchain-verified components for the modern enthusiast.</p>
            </div>
        </div>

    )
}

export default Hero