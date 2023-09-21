const Navbar = () => {
    return (
        <nav className="bg-white rounded-b-xl shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-xl text-gray-500 sm:text-center dark:text-gray-400">
                    <a href="/" className="hover:text-black">Employee</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:text-black md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-black">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
   };

export default Navbar;