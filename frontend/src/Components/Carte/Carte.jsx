import { useCart } from './CartContext';

const Carte = () => {
    const { cartItems, removeFromCart } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>

                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                    <>
                        <div className="divide-y divide-gray-200">
                            {cartItems.map(item => (
                                <div key={item.id} className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                    <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-gray-600">${item.price} × {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-200 mt-6 pt-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold">Total:</h3>
                                <p className="text-xl font-bold">${calculateTotal().toFixed(2)}</p>
                            </div>
                            <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};