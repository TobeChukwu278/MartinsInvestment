import { FaChevronRight } from "react-icons/fa"

const Cart = () => {
    return (
        <>
            <div className='flex justify-center items-start min-h-screen py-8'>
                <div className="w-full max-w-7xl px-4">
                    {/* breadcrumb */}
                    <nav className='Breadcrumb text-sm mb-8'>
                        <ul className='flex items-center gap-2.5'>
                            <li className="cursor-pointer">shop</li>
                            <li><FaChevronRight /></li>
                            <li className="cursor-grab">Cart</li>
                        </ul>
                        <h1 className='text-white font-normal my-2 sm:text-2xl md:text-3xl lg:text-5xl'>Your cart</h1>
                    </nav>

                    {/* cart items, actions and summary */}
                    <div className='flex flex-col lg:flex-row gap-8'>
                        {/* cart items and actions - scrollable on large screens */}
                        <div className="lg:flex-1">
                            <div className="space-y-8">
                                <div className="rounded-xl border border-gray-200/50 bg-white/30 p-4 shadow-sm dark:border-gray-700/50 dark:bg-black/20">
                                    <div className="flow-root">
                                        <ul className="-my-6 divide-y divide-gray-200/50 dark:divide-gray-700/50" role="list">
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200/50 dark:border-gray-700/50">
                                                    <img alt="Carburetor" className="h-full w-full object-cover object-center"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDne7Cb0aujsWSSz5Qs79U2E1hhtCsx6Oc1Wy3gTHTk5nYwenYdxb3_XJ6Cf8itQ_IyXW5O_vNjakkfzYGYi8VsJKfWdEGGjTopojxFxSqSJ7xZXiN_VFAUriOQSE7EcQMhUfFZYDVL5VOh15GnIAagwiHYMXHS7u4M3GB2Y-pZWjFMvRYGdDwNu5mKi7KShZ-yyd-KqDXx0XIiL_n5Ram1j5OaJoz2IuSyEtiPzcO97s5YH3aumecAqAkZgKhMoImlThRZ63GqW7I" />
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                                            <h3><a href="#">Carburetor</a></h3>
                                                            <p className="ml-4">$120.00</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="flex items-center rounded border border-gray-200/50 dark:border-gray-700/50">
                                                            <button className="px-2 py-1 text-gray-500 dark:text-gray-400">-</button>
                                                            <span className="px-3 py-1">2</span>
                                                            <button className="px-2 py-1 text-gray-500 dark:text-gray-400">+</button>
                                                        </div>
                                                        <div className="flex">
                                                            <button className="font-medium text-primary hover:text-primary/80"
                                                                type="button">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex py-6">
                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200/50 dark:border-gray-700/50">
                                                    <img alt="Brake Pads" className="h-full w-full object-cover object-center"
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1kEztO9zlxwGePzT1B4NQ1uctss1zHWAWteKXZFLur0SSV50Ce4gK5Z8IZbrM0q4-RH64WvnaNFWbjVApk6PW5_W-Dy1aei3kCRwBivJvh6LyvSXVcJTHJPMKIyadYgC_qiWa-GYl41jAY55Xz0TfYVvDTcUvweIUZsjT2pr-E_VeRYNsJbbeWAZI-7incYBOuvucFe0c5obhWSFHYmli0oAZeCZb0CAdAtTke0xD3M1A_or8Asha8EO5bsm6tALhZkcRcJGMjn4" />
                                                </div>
                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                                            <h3><a href="#">Brake Pads</a></h3>
                                                            <p className="ml-4">$80.00</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="flex items-center rounded border border-gray-200/50 dark:border-gray-700/50">
                                                            <button className="px-2 py-1 text-gray-500 dark:text-gray-400">-</button>
                                                            <span className="px-3 py-1">1</span>
                                                            <button className="px-2 py-1 text-gray-500 dark:text-gray-400">+</button>
                                                        </div>
                                                        <div className="flex">
                                                            <button className="font-medium text-primary hover:text-primary/80"
                                                                type="button">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Promo Code</h3>
                                    <div className="flex gap-2">
                                        <input
                                            className="block w-full rounded-lg border border-gray-200/50 bg-white/30 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-primary dark:border-gray-700/50 dark:bg-black/20 dark:text-white dark:placeholder-gray-400"
                                            placeholder="Enter promo code" type="text" />
                                        <button
                                            className="rounded-lg bg-primary/20 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/30">Apply</button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping</h3>
                                    <div className="space-y-3">
                                        <label
                                            className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200/50 bg-white/30 p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 dark:border-gray-700/50 dark:bg-black/20">
                                            <input checked=""
                                                className="form-radio h-5 w-5 border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
                                                name="shipping" type="radio" />
                                            <div className="flex-grow">
                                                <p className="font-medium text-gray-900 dark:text-white">Standard Shipping</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">5-7 business days</p>
                                            </div>
                                            <p className="font-medium text-gray-900 dark:text-white">$10.00</p>
                                        </label>
                                        <label
                                            className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200/50 bg-white/30 p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 dark:border-gray-700/50 dark:bg-black/20">
                                            <input
                                                className="form-radio h-5 w-5 border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
                                                name="shipping" type="radio" />
                                            <div className="flex-grow">
                                                <p className="font-medium text-gray-900 dark:text-white">Express Shipping</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">2-3 business days</p>
                                            </div>
                                            <p className="font-medium text-gray-900 dark:text-white">$25.00</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>
                                    <div className="space-y-3">
                                        <label
                                            className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200/50 bg-white/30 p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 dark:border-gray-700/50 dark:bg-black/20">
                                            <input checked=""
                                                className="form-radio h-5 w-5 border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
                                                name="payment" type="radio" />
                                            <span className="font-medium text-gray-900 dark:text-white">Credit Card</span>
                                        </label>
                                        <label
                                            className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200/50 bg-white/30 p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 dark:border-gray-700/50 dark:bg-black/20">
                                            <input
                                                className="form-radio h-5 w-5 border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
                                                name="payment" type="radio" />
                                            <span className="font-medium text-gray-900 dark:text-white">Crypto Wallet</span>
                                        </label>
                                        <label
                                            className="flex cursor-pointer items-center gap-4 rounded-xl border border-gray-200/50 bg-white/30 p-4 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 dark:border-gray-700/50 dark:bg-black/20">
                                            <input
                                                className="form-radio h-5 w-5 border-gray-300 text-primary focus:ring-primary dark:border-gray-600"
                                                name="payment" type="radio" />
                                            <span className="font-medium text-gray-900 dark:text-white">Bank Transfer</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* cart summary - sticky on large screens */}
                        <div className="lg:w-96">
                            <div className='border border-gray-100/20 rounded-2xl p-6 bg-blue-900/10 lg:sticky lg:top-8'>
                                <h1 className="font-bold text-[19px] sm:text-[19px] md:text-[21px] lg:text-[27px] mb-6">Order summary</h1>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">Subtotal:</h5>
                                        <h5 className="font-bold">₦7500</h5>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">Shipping:</h5>
                                        <h5 className="font-bold">₦500</h5>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">Discount:</h5>
                                        <h5 className="text-red-400 font-bold">₦200</h5>
                                    </div>
                                    <hr className="my-4 border-gray-200/50 dark:border-gray-700/50" />
                                    <div className="flex justify-between items-center">
                                        <h5 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">Total:</h5>
                                        <h5 className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">₦7800</h5>
                                    </div>
                                </div>

                                {/* checkout btn */}
                                <button className='font-bold border border-gray-700 bg-blue-600 hover:bg-blue-500 hover:scale-[0.98] transition-all duration-300 text-center w-full py-4 px-auto rounded mt-6 cursor-pointer text-white'>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart