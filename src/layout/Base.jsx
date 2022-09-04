import { Outlet } from "react-router-dom"

const Base = () => {
    return (
        <div>
            <h1>From Base.jsx</h1>
            <p>Before Outlet</p>
            <Outlet />
            <p>After Outlet</p>
        </div>
    )
}

export default Base