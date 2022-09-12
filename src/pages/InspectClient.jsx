import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const InspectClient = () => {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const getClientAPI = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const response = await fetch(url)
                const result = await response.json()

                setClient(result);
            } catch (error) {
                console.log(error);
            }

            // setTimeout(() => {
            setLoading(false)
            // }, 3000)
        }
        getClientAPI()

    }, [])

    return (
        loading ? <Spinner /> : (
            Object.keys(client).length === 0 ? <p>No hay resultado</p> : (
                <div>
                    <h1 className='font-black text-4xl text-blue-800'>Inspect Client:
                        {" "}{client.name}
                    </h1>
                    <p>Client Information</p>

                    {client.name && (
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800 font-bold'>Client: </span>
                            {client.name}
                        </p>
                    )}
                    {client.email && (
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800 font-bold'>Email: </span>
                            {client.email}
                        </p>
                    )}
                    {client.telephone && (
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800 font-bold'>Telephone: </span>
                            {client.telephone}
                        </p>
                    )}
                    {client.company && (
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800 font-bold'>Company: </span>
                            {client.company}
                        </p>
                    )}
                    {client.notes && (
                        <p className='text-2xl text-gray-600 mt-4'>
                            <span className='text-gray-800 font-bold'>Notes: </span>
                            {client.notes}
                        </p>
                    )}
                </div>
            )

        )
    )
}

export default InspectClient