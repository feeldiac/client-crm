import React from 'react'
import { Formik, Form, Field } from 'formik'

const FormComponent = () => {

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md 
            shadow-md md:w-3/4 mx-auto'>
            <h1 className='text-gray-600 font-bold text-xl text-center'>
                🏂 Add Client
            </h1>

            <Formik
                initialValues={{
                    name: '',
                    company: '',
                    email: '',
                    telephone: '',
                    notes: '',
                }}

                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {() => (
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
                            value="Add Client"
                            className='mt-5 w-full bg-blue-800 p-3 text-white
                        font-bold text-lg'
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormComponent