const Auth = () => {
    return (
        <div className="gradient-bg min-h-screen flex justify-center items-center text-center">
            <div>
                <h1 className="font-bold sm:text-2xl md:text-3xl lg:text-3xl">Welcome To Martins Investment</h1>
                <p className="font-normal my-4">Connect your wallet to the future of auto parts.</p>

                <div className="glass-effect p-9 rounded text-center">
                    <button className="w-full bg-[#5b13ec] rounded-lg cursor-pointer px-5 py-3 font-bold text-base transition-all duration-300 hover:bg-[#5b13ec]/80">Connect Wallet</button>

                    <div className="relative my-3">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/20"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background-dark/80 px-2 text-white/60">Or</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-2 w-full">
                        <button className="w-full bg-[#5b13ec]/40 rounded-lg cursor-pointer px-5 py-3 font-bold text-base transition-all duration-300 hover:bg-[#5b13ec]/30">Signup</button>
                        <button className="w-full border-[#5b13ec]/20 border rounded-lg cursor-pointer px-5 py-3 font-bold text-base transition-all duration-300 hover:bg-[#5b13ec]/30">Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth