import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function BreadCrumb({currentPageTitle}) {
    return (
        <div className="w-full flex gap-3 mb-5">
            <Link to={'/'} className="text-gray-500">
                <div className="flex gap-1 items-center justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                    Home
                </div>
            </Link>
            <span className="text-gray-500">/</span>
            <p>{currentPageTitle}</p>
        </div>
    )
}