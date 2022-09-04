import { Outlet, Link, useLocation } from "react-router-dom"


const Base = () => {

    const location = useLocation()

    const currentPath = location.pathname

    return (
        <div className="md:flex md:min-h-screen">
            <div className="md:w-1/4 bg-blue-900 px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">
                    Clients - CRM
                </h2>

                <nav className="mt-10">
                    <Link
                        className={`${currentPath === '/clients' ? 'text-blue-300' : 'text-white'} 
                        text-2xl block mt-2 hover:text-blue-300`}
                        to="/clients">
                        Clients</Link>
                    <Link
                        className={`${currentPath === '/clients/add' ? 'text-blue-300' : 'text-white'} 
                        text-2xl block mt-2 hover:text-blue-300`}
                        to="/clients/add">
                        Add Client</Link>
                </nav>
            </div>
            <div className="md:w-3/4 bg-red-600">
                <Outlet />
            </div>
        </div>
    )
}

export default Base