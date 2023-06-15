import React, { useState } from 'react';

function CreateAcademicYear(props) {
    const [academicYears, setAcademicYear] = useState({
        academicYear: "",
        term: 0
    })

    const setAcademicYears = (e) => {
        setAcademicYear({
            ...academicYears,
            [e.target.name]: e.target.value
        })
    }

    const createAcademicYear = (e) => {
        e.preventDefault()
        props.createAcademicYear(academicYears)
    }

    return (
        <div>
            <div className="mt-5 md:col-span-1 md:mt-0">
                
                <form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                        <div className="bg-white px-4 py-5 sm:p-8">
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700">
                                        Academic year
                                    </label>
                                    <input
                                        onChange={setAcademicYears}
                                        type="text"
                                        name="academicYear"
                                        id="academicYear"
                                        placeholder='e.g 2000-2001'
                                        autoComplete="academicYear"
                                        className="mt-1 p-2 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                </div>



                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                                        Term
                                    </label>
                                    <select
                                        onChange={setAcademicYears}
                                        id="term"
                                        name="term"
                                        autoComplete="term"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value={0}>--term--</option>
                                        <option value={1}>Term 1</option>
                                        <option value={2}>Term 2</option>
                                        <option value={3}>Term 3</option>
                                    </select>
                                </div>


                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button
                                onClick={createAcademicYear}
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
}

export default CreateAcademicYear