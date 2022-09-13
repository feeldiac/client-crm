import { useState, useEffect } from 'react'
import Client from '../components/Client'

const Home = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {
        const getClientsAPI = async () => {
            try {
                const url = import.meta.env.VITE_API_URL
                const response = await fetch(url)
                const result = await response.json()
                setClients(result)
            } catch (error) {
                console.log(error);
            }
        }

        getClientsAPI()
    }, [])

    const handleDelete = async (id) => {
        const confirm_ = confirm('Do you want to delete this client?')
        console.log(confirm_);

        if (confirm_) {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const response = await fetch(url, {
                    method: 'DELETE'
                })
                let json = await response.json()
                console.log(json);

                const clientsArray = clients.filter(client => client.id !== id)
                setClients(clientsArray)

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <h1 className='font-black text-4xl text-blue-800'>Clients</h1>
            <p>Manage your clients</p>

            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Contact</th>
                        <th className='p-2'>Company</th>
                        <th className='p-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <Client
                            key={client.id}
                            client={client}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Home