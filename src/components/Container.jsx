// eslint-disable-next-line react/prop-types
export default function Container({children, className}) {
    return (
        <div className={`w-full lg:w-[80%] mx-auto ${className}`}>{children}</div>
    )
}