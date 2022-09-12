import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/FormComponent'


const EditClient = () => {

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
        <>
            <h1 className='font-black text-4xl text-blue-800'>Edit Client</h1>
            <p>Use this form to update the client information</p>

            <Form client={client} loading={loading} />
        </>
    )
}

export default EditClient