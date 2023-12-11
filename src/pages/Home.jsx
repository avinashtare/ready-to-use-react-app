import React from 'react'

function Home() {
  return (
    <>
      <div className="container">
        <h1 className='text-center my-8 text-3xl font-bold text-white'>Fastes Notes App</h1>

        <form className="max-w-sm mx-auto rounded-md bg-slate-900 p-6 mb-16">
          <h2 className='my-5 text-3xl font-bold text-white'>Add a Notes</h2>
          <div className="mb-5 ">
            <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note</label>
            <input type="text" id="note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="anything" required />
          </div>
          <div className="mb-5">
            <label htmlFor="des" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <input type="text" id="des" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="i want more data" required />
          </div>
         
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
        </form>

      </div>

    </>
  )
}

export default Home