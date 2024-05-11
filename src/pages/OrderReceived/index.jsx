import { Link } from "react-router-dom"

const OrderReceived = () => {
    return (
        <section className="xl:h-[110vh] pt-20 w-full bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded border w-10/12 h-auto p-4">
                <div className="flex justify-between items-center">
                    <h5 className="font-medium text-lg">Order Received</h5>
                    <Link className="font-medium text-gray-500 border p-2 shadow-sm rounded" to="/">Back to Home</Link>
                </div>
                <p className="opacity-50">Thank you. Your order has been received</p>
                <ul className="mt-6 flex xl:flex-row flex-col xl:items-center gap-10">
                    <li className="border-r pr-5">
                        <p className="font-medium">Order Number</p>
                        <span className="opacity-50">1444</span>
                    </li>
                    <li className="border-r pr-5">
                        <p className="font-medium">Date</p>
                        <span className="opacity-50">March 14, 2019</span>
                    </li>
                    <li className="border-r pr-5">
                        <p className="font-medium">Total</p>
                        <span className="opacity-50">$10,944.00</span>
                    </li>
                    <li className="border-r pr-5">
                        <p className="font-medium">Payment Method</p>
                        <span className="opacity-50">Cash on delivery</span>
                    </li>
                </ul>

                <div className="mt-6">
                    <h5 className="font-medium text-lg mb-5">Order Details</h5>
                    <ul className="opacity-50 flex flex-col gap-5">
                        <li className="flex"><span className="w-2/12">Total Item</span><span className="w-1/12">:</span><span>6 Items</span></li>
                        <li className="flex"><span className="w-2/12">Order Time</span><span className="w-1/12">:</span><span>1.00pm 10/12/19</span></li>
                        <li className="flex"><span className="w-2/12">Delivery Time</span><span className="w-1/12">:</span><span>90 Minute Express Delivery</span></li>
                        <li className="flex"><span className="w-2/12">Delivery Location</span><span className="w-1/12">:</span><span>1st Floor, House 149, Road-22, Mohakhali DOHS, Dhaka - North</span></li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h5 className="font-medium text-lg mb-5">Total Amount</h5>
                    <ul className="opacity-50 flex flex-col gap-5">
                        <li className="flex"><span className="w-2/12">Sub Total</span><span className="w-1/12">:</span><span>$10,864.00</span></li>
                        <li className="flex"><span className="w-2/12">Payment Method</span><span className="w-1/12">:</span><span>Cash On Delivery</span></li>
                        <li className="flex"><span className="w-2/12">Cash on delivery</span><span className="w-1/12">:</span><span>10</span></li>
                        <li className="flex"><span className="w-2/12">Total</span><span className="w-1/12">:</span><span>$10,874.00</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default OrderReceived