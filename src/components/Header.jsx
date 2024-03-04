import MoonIcon from "./icons/MoonIcon"

const Header = () => {
    return (
        <header className="flex justify-between items-center p-5">
            <p className="uppercase tracking-widest font-bold text-3xl text-white">todo</p>
            <span> <MoonIcon /> </span>
        </header>
    )
}

export default Header