import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

//React router dom
import {Link} from "react-router-dom"

import { logout } from "../store/UserSlice";
import{useDispatch, useSelector} from "react-redux";

const navigation = [
  { name: "Perfil", href: "/myprofile" },
  { name: "Mis viajes", href: "/trips" },
  { name: "Mi calificación", href: "/score" },
  { name: "Como funciona", href: "/faq" },
];
const user = "pepe@test.com";
// const user = null;


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state)=>state.user)

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(logout())
    navigate("/");
  };
  return (
    <Disclosure as="nav" className="bg-[#ED1E79]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={Logo}
                      alt="juntas-logo"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={Logo}
                      alt="juntas-logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {!currentUser? (
                  <>
                    <button className="text-pink-600 bg-white rounded p-1 border-white">
                      <Link href="/login">Iniciar sesion</Link>
                    </button>
                    <Link className="text-white p-1" href="/register">
                      Registrate
                    </Link>
                  </>
                ) : (
                  <>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <UserCircleIcon className="h-8 w-8 rounded-full text-white" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {navigation.map((item, idx) => {
                            return (
                              <Menu.Item key={idx}>
                                {({ active }) => (
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-black"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            );
                          })}
                          <hr />
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className="px-4 py-2 text-sm text-[#ED1E79]"
                                onClick={handleLogout}
                              >
                                Cerrar Sesión
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <button
                      type="button"
                      className="rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-white focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      className="rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-white focus:ring-offset-2"
                    >
                      <span className="sr-only">Search</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AppNavbar;
