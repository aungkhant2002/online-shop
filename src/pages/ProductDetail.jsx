import {useParams} from "react-router-dom";
import products from "../data/products.js";
import Container from "../components/Container.jsx";
import Rating from "../components/Rating.jsx";

export default function ProductDetail() {
    const {product_id} = useParams();
    const currentProduct = products.find((product) => product.id == product_id);
    return (
        <Container>
            <div className="px-5 pb-5">
                <div className="border border-black p-5 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="col-span-1">
                            <img src={currentProduct.image} className="w-3/4 block mx-auto" alt=""/>
                        </div>
                        <div className="col-span-1 flex flex-col items-start gap-5">
                            <h3 className="font-bold text-3xl">{currentProduct.title}</h3>
                            <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">{currentProduct.category}</p>
                            <p>{currentProduct.description}</p>
                            <Rating rate={currentProduct.rating.rate}></Rating>
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <p>Price : ( $ <span>{currentProduct.price}</span> )</p>
                                </div>
                                <button className="text-sm border border-black px-3 py-1">Add Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}