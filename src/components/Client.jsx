import { useNavigate } from 'react-router-dom'

const Client = ({ client }) => {
    const navigate = useNavigate()

    const { name, company, email, telephone, notes, id } = client

    return (
        <tr className='border-b hover:bg-gray-50'>
            <td className="p-3">{name}</td>
            <td className="p-3">
                <p><span className='text-gray-800 font-bold'>Email: </span>{email}</p>
                <p><span className='text-gray-800 font-bold'>Tel: </span>{telephone}</p>
            </td>
            <td className="p-3">{company}</td>
            <td className="p-3">
                <button
                    className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 
                    font-bold text-xs'
                    type='button'
                    onClick={() => navigate(`/clients/${id}`)}>
                    Inspect
                </button>
                <button
                    className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 
                    font-bold text-xs mt-3'
                    type='button'>
                    Edit
                </button>
                <button
                    className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 
                    font-bold text-xs mt-3'
                    type='button'>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Client