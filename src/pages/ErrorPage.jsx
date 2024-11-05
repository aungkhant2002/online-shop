import {Link} from "react-router-dom";

export default function ErrorPage() {
    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-3">404 Not Found</h1>
                <p className="text-gray-500 mb-5">I think you just want to a page non-existing page.</p>
                <Link to={"/"} className="border border-black px-4 py-1">Go To Home</Link>
            </div>
        </section>
    )
}