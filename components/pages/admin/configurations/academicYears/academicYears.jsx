import React, { useState } from 'react';
import AllAcademicYears from './read.academicYear';

function AcademicYears(props) {

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
        <div className="sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">

                <div className="mt-5 md:col-span-1 md:mt-0">
                    <AllAcademicYears academicYears={props.academicYears} />
                </div>

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

                    <div className="mt-4">
                        <form>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-8">
                                    <div className="grid grid-cols-6 gap-3">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Academic year
                                            </label>
                                            <select
                                                id="term"
                                                name="term"
                                                autoComplete="term"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {props && props.academicYears.map((academicYears, key) => {
                                                    return <option key={key} value={academicYears.id}>{academicYears.academicYear} - term {academicYears.term}</option>

                                                })}
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Term
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Term 1</option>
                                                <option>Term 2</option>
                                                <option>Term 3</option>
                                            </select>
                                        </div>



                                    </div>

                                    <div className="mt-4">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <div className="flex w-full justify-end">

                                        <button
                                            type="submit"
                                            className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Update
                                        </button>

                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="mt-5 md:col-span-1 md:mt-0">
                    <form>
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-8">
                                <div className="flex w-full justify-center text-2xl p-4 font-bold text-center">
                                    <h1>
                                        Fees Structure
                                    </h1>
                                </div>
                                <div className="grid grid-cols-6 gap-3">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Academic year
                                        </label>
                                        <select
                                            id="term"
                                            name="term"
                                            autoComplete="term"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            {props && props.academicYears.map((academicYears, key) => {
                                                return <option key={key} value={academicYears.id}>{academicYears.academicYear} - term {academicYears.term}</option>

                                            })}
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Term
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        >
                                            <option value={1}>Term 1</option>
                                            <option value={2}>Term 2</option>
                                            <option value={3}>Term 3</option>
                                        </select>
                                    </div>


                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Fees amount
                                        </label>
                                        <input
                                            type="text"
                                            placeholder='fees amount'
                                            name="fee-amount"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="mt-1 p-2 bg-gray-100 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </div>               <div className="mt-5 md:col-span-1 md:mt-0">
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

                    <div className="mt-4">
                        <form>
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-8">
                                    <div className="grid grid-cols-6 gap-3">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Academic year
                                            </label>
                                            <select
                                                id="term"
                                                name="term"
                                                autoComplete="term"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                {props && props.academicYears.map((academicYears, key) => {
                                                    return <option key={key} value={academicYears.id}>{academicYears.academicYear} - term {academicYears.term}</option>

                                                })}
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Term
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>Term 1</option>
                                                <option>Term 2</option>
                                                <option>Term 3</option>
                                            </select>
                                        </div>



                                    </div>

                                    <div className="mt-4">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 p-2 bg-gray-100  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <div className="flex w-full justify-end">

                                        <button
                                            type="submit"
                                            className="inline-flex mr-2 justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Update
                                        </button>

                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default AcademicYears;