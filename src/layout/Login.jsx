import { Outlet } from "react-router-dom"

const login = () => {
    return (
        <div>
            <h1>From Login</h1>
            <Outlet />
        </div>
    )
}

export default login