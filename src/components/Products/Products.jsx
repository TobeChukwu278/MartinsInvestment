import { FaShoppingBasket, FaStopCircle } from "react-icons/fa"

const ProductList = [
    {
        productImage: '',
        productName: 'Quantum Engine Filters',
        productDescription: 'Nanotech filtration for pure power',
        productPrice: 89,
        inStock: true
    },
    {
        productImage: '',
        productName: 'Cryo-Carbon Brake Pads',
        productDescription: 'Unmatched stopping power, zero fade.',
        productPrice: 149,
        inStock: false
    },
    {
        productImage: '',
        productName: 'HyperGrip All-Terrain Tires',
        productDescription: 'Conquer any road, in any condition.',
        productPrice: 299,
        inStock: true
    },
    {
        productImage: '',
        productName: 'FusionX Spark Plugs (4-pack)',
        productDescription: 'Iridium core for maximum efficiency.',
        productPrice: 59,
        inStock: true
    },
    {
        productImage: '',
        productName: 'Vortex Turbocharger',
        productDescription: 'Instant boost with ceramic bearings.',
        productPrice: 1299,
        inStock: true
    },
    {
        productImage: '',
        productName: 'AeroFlow Air Intake',
        productDescription: 'Optimized airflow for more horsepower.',
        productPrice: 349,
        inStock: true
    },
    {
        productImage: '',
        productName: 'Kinetic Coilover Kit',
        productDescription: 'Adjustable suspension for track & street.',
        productPrice: 899,
        inStock: true
    },
    {
        productImage: '',
        productName: 'Stealth Exhaust System',
        productDescription: 'Deep tone, high flow, lightweight titanium.',
        productPrice: 1499,
        inStock: false
    }
]

const Products = () => {
    return (
        <div className="pt-14">
            <h1 className="font-bold text-[19px]">Product Catalogues</h1>

            {/* Products grid */}
            <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                    {
                        ProductList.map((item) => (
                            <div className="group overflow-hidden rounded-4xl shadow-sm transition-shadow duration-300 hover:shadow-lg dark:bg-slate-500">
                                <div className="relative">
                                    <img src={item.productImage} alt={item.productName} className="aspect-square w-full object-cover object-center" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100"></div>
                                    <button className="absolute p-2 rounded-4xl right-3 top-3 bg-white/80 text-slate-700 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 dark:bg-slate-900/80 dark:text-slate-300 cursor-pointer"><FaShoppingBasket className="w-5 h-5" /></button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-800 dark:text-slate-100">{item.productName}</h3>
                                    <p>{item.productDescription}</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <p className="text-lg font-semibold text-[5b13ec40]">₦{item.productPrice}</p>
                                        <p className={`text-sm font-medium ${item.inStock ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-500'} `}>{item.inStock ? 'In Stock' : 'Out of Stock 🚫'}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products