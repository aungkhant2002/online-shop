// eslint-disable-next-line react/prop-types
export default function Cart({cart}) {
    return (
        <div className="border border-black p-5 grid grid-cols-6 gap-5 items-center">
            <div className="col-span-1">
                {/* eslint-disable-next-line react/prop-types */}
                <img src={cart.product.image} className="h-16" alt=""/>
            </div>
            <div className="col-span-3">
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-xl font-bold mb-2">{cart.product.title}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-gray-500">Price ( $ {cart.product.price} )</p>
            </div>
            <div className="col-span-1">
                <p className="mb-2 text-center">Quantity</p>
                <div className="flex justify-between items-center">
                    <button className="border px-2 py-0.5 bg-black text-white">-</button>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="">{cart.quantity}</p>
                    <button className="border px-2 py-0.5 bg-black text-white">+</button>
                </div>
            </div>
            <div className="col-span-1">
                {/* eslint-disable-next-line react/prop-types */}
                <p className="text-end text-xl font-bold">{cart.cost}</p>
            </div>
        </div>
    )
}