const Nav = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com" className="flex items-center">
          <span className="self-center text-blue-700 text-xl font-semibold whitespace-nowrap">
            Junno's Restaurant
          </span>
        </a>
        <div className="block w-auto" id="mobile-menu">
          <ul className="flex flex-row space-x-4 mt-0 text-sm font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 rounded bg-transparent text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                aria-current="page"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 hover:text-blue-700"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
