export default function Footer() {
    const date = new Date();
    return (
        <footer className="mx-5 bg-black text-white text-center py-2 mt-auto">
            &copy; {date.getFullYear()} <a href="#" className="underline text-gray-400">AK IT</a>. All Rights Reserved.
        </footer>
    )
}