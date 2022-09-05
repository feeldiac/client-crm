import React from 'react'

const Error = ({ children }) => {
    return (
        <div>
            <div className='text-center my-4 text-red-600 font-bold p-3'>
                {children}
            </div>
        </div>
    )
}

export default Error