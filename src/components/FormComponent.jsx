import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Error from './Error'
import Spinner from './Spinner'

const FormComponent = ({ client, loading }) => {

    const navigate = useNavigate()

    const addClientSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is a required field')
            .min(2, 'The name is too short')
            .max(20, 'The name is too long'),
        company: Yup.string()
            .required('Company is a required field'),
        email: Yup.string()
            .email('Email must be a valid email')
            .required('Email is a required field'),
        telephone: Yup.number()
            .positive('Invalid number')
            .integer('Telephone must be an integer')
            .typeError('Invalid number'),
        notes: Yup.string()
            .max(500, 'The notes are too long'),
    })

    const handleSubmit = async (values) => {
        try {

            let response

            if (client?.id) {
                const url = `http://localhost:4000/clients/${client.id}`
                response = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

            } else {
                console.log('Creating');
                const url = 'http://localhost:4000/clients'
                response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }

            const json = await response.json()
            console.log(json);

            navigate('/clients')

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        loading ? <Spinner /> : (

            <div className='bg-white mt-10 px-5 py-10 rounded-md 
            shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl text-center'>
                    {client?.name ? '✍ Edit Client' : '🏂 Add Client'}
                </h1>

                <Formik
                    initialValues={{
                        name: client?.name ?? "",
                        company: client?.company ?? "",
                        email: client?.email ?? "",
                        telephone: client?.telephone ?? "",
                        notes: client?.notes ?? "",
                    }}
                    enableReinitialize={true}
                    onSubmit={async (values, { resetForm }) => {
                        await handleSubmit(values)

                        resetForm()
                    }}

                    validationSchema={addClientSchema}
                >
                    {({ errors, touched }) => {
                        // console.log(touched);
                        return (
                            <Form className='mt-10'>
                                <div className='mb-4'>
                                    <label
                                        className="text-gray-800"
                                        htmlFor="name">
                                        Name
                                    </label>
                                    <Field
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Client's name"
                                    />
                                    {errors.name && touched.name ? (
                                        <Error>
                                            {errors.name}
                                        </Error>
                                    ) : null}
                                    {/* <ErrorMessage name='name' /> */}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className="text-gray-800"
                                        htmlFor="company">
                                        Company
                                    </label>
                                    <Field
                                        id="company"
                                        name="company"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Company's name"
                                    />
                                    {errors.company && touched.company ? (
                                        <Error>
                                            {errors.company}
                                        </Error>
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className="text-gray-800"
                                        htmlFor="email">
                                        E-mail
                                    </label>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Email"
                                    />
                                    {errors.email && touched.email ? (
                                        <Error>
                                            {errors.email}
                                        </Error>
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className="text-gray-800"
                                        htmlFor="telephone">
                                        Telephone
                                    </label>
                                    <Field
                                        id="telephone"
                                        name="telephone"
                                        type="tel"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Telephone"
                                    />
                                    {errors.telephone && touched.telephone ? (
                                        <Error>
                                            {errors.telephone}
                                        </Error>
                                    ) : null}
                                </div>

                                <div className='mb-4'>
                                    <label
                                        className="text-gray-800"
                                        htmlFor="notes">
                                        Notes
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="notes"
                                        name="notes"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                        placeholder="Notes"
                                    />
                                </div>

                                <input
                                    type="submit"
                                    value={client?.name ? '✍ Edit Client' : '🏂 Add Client'}
                                    className='mt-5 w-full bg-blue-800 p-3 text-white
                                font-bold text-lg'
                                />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    )
}

Form.defaultProps = {
    client: {},
    loading: false
}

export default FormComponent