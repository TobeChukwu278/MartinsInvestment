import React, { useState } from "react";
import { Lens } from "../ui/lens";

const ProductCard = ({ product }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            {/* Image with Lens Effect */}
            <div className="relative h-64 bg-gray-100">
                <Lens
                    hovering={isHovering}
                    setHovering={setIsHovering}
                    zoomFactor={2}
                    lensSize={150}
                >
                    <img
                        src={product.imageUrl || "/placeholder-product.jpg"}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                    />
                </Lens>
            </div>

            {/* Product Details */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description || "No description available"}
                </p>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-2xl font-bold text-green-600">
                            ₦{parseFloat(product.price).toFixed(2)}
                        </span>
                    </div>

                    <div className="text-right">
                        {product.stock > 0 ? (
                            <span className="text-sm text-green-600 font-medium">
                                {product.stock} in stock
                            </span>
                        ) : (
                            <span className="text-sm text-red-600 font-medium">
                                Out of stock
                            </span>
                        )}
                    </div>
                </div>

                {product.category && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        {product.category}
                    </span>
                )}

                <button
                    disabled={product.stock === 0}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${product.stock > 0
                            ? "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;