import { FaPen, FaShoppingBag, FaMapMarked, FaCreditCard, FaSignOutAlt } from "react-icons/fa"

const Account = () => {
    return (
        <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-9 my-5 mx-5'>
            <div className="flex flex-col gap-4">
                {/* account details */}
                <div className="flex flex-col border border-gray-400 rounded-4xl p-4 bg-white/5">
                    <div className='flex items-center justify-center gap-4'>
                        <div className='h-15 w-15 rounded-full border border-blue-400'></div>
                        <div>
                            <h1 className="font-bold text-[23px] text-amber-100"> Alex Ryder</h1>
                            <p className="font-normal text-amber-100/50">alex.ryder@web3.eth</p>
                        </div>
                    </div>
                    <button className="w-full py-3 bg-blue-600 font-bold cursor-pointer rounded-2xl hover:bg-blue-400 transition-all duration-300 hover:scale-90  flex justify-center items-center gap-2 mt-3 text-blue-400 hover:text-white"><FaPen /> Edit Profile</button>
                </div>

                {/* Account  Navigation */}
                <div className="flex flex-col border border-gray-400 rounded-4xl p-4 bg-white/5">
                    <h1 className="text-[23px] font-bold text-white mb-4">Navigation</h1>
                    <div className='flex flex-col gap-4'>
                        <button className="p-4 bg-blue-500/50 w-full rounded-2xl cursor-pointer font-bold flex justify-center items-center gap-2"> <FaShoppingBag /> Order History</button>
                        <button className="p-4 bg-blue-500/10 w-full rounded-2xl cursor-pointer font-bold flex justify-center items-center gap-2 hover:bg-blue-500/40"> <FaMapMarked /> Saved Address</button>
                        <button className="p-4 bg-blue-500/10 w-full rounded-2xl cursor-pointer font-bold flex justify-center items-center gap-2 hover:bg-blue-500/40"> <FaCreditCard />Payment Method</button>
                        <button className="p-4 bg-red-500/40 w-full rounded-2xl cursor-pointer font-bold flex justify-center items-center gap-2 hover:bg-red-500/60 text-left"> <FaSignOutAlt />Log out</button>
                    </div>
                </div>
            </div>

            {/* order history */}
            <div className="flex flex-col border border-gray-400 rounded-4xl p-4 bg-white/5">
                <h1 className='text-[23px] font-bold text-white'>Order History</h1>

                {/* orders */}
                <div className='flex flex-col gap-4'>
                    {/* individual orders */}
                    {/* first one */}
                    <div className='border border-purple-400 rounded-2xl p-3'>
                        {/* order info */}
                        <div className="flex justify-between items-baseline">
                            {/* order details */}
                            <div>
                                {/* order id */}
                                <p className="text-gray-300/50 font-normal">Order #AP-2024-84521</p>
                                {/* order */}
                                <h3 className="text-[20px] font-bold">Real-time Order Tracking</h3>
                                {/* order status */}
                                <p className="text-purple-600 font-bold">Status: In Transit</p>
                            </div>
                            {/* view details action btn */}
                            <button className="bg-purple-600 h-fit px-5 py-3 rounded-2xl cursor-pointer hover:bg-purple-400/20 font-bold transition-all duration-300">Track Order</button>
                        </div>
                    </div>
                    {/* second one */}
                    <div className='flex justify-between items-center border border-purple-400 rounded-2xl p-3'>
                        <div className='flex gap-2 items-center'>
                            {/* product image */}
                            <div>
                                <img src={null} alt='product_image' />
                            </div>
                            {/* product details */}
                            <div>
                                {/* order id */}
                                <p className="text-gray-200/50">Order #AP-2024-84521</p>
                                {/* ordered product */}
                                <h4 className="font-bold text-[19px]">Ceramic Brake Pads</h4>
                                {/* delivery time */}
                                <p className="text-gray-200/40">Delivered on June 15, 2024</p>
                            </div>
                        </div>
                        {/* price and action button */}
                        <div className='flex items-center gap-2'>
                            {/* price */}
                            <p className="font-bold">₦2300</p>
                            <button className="px-4 py-2 bg-blue-600 font-bold rounded hover:bg-blue-400 transition-all duration-300 cursor-pointer">view details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
