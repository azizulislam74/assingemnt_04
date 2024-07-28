const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 rounded-2xl px-3 py-2 text-2xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>Sport</h2>
        </div>
        <ul className="flex items-center justify-between gap-6 text-slate-900">
          <li className="cursor-pointer  rounded-full  px-6 py-2 text-white hover:bg-sky-600">
            Home
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">
            All Proudcut
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">
            Services
          </li>

          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">
            About
          </li>
        </ul>
        <div>
          <li className="cursor-pointer flex gap-2 list-none rounded-full px-6 py-2 text-white hover:bg-sky-600">
            <svg
              className="w-4"
              viewBox="0 0 15 15"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>call [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-103.000000, -7321.000000)"
                    fill="#ffffff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Cart
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
