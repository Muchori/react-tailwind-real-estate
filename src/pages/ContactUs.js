import React from 'react'

function ContactUs() {
  return (
    <>
      <div className='mt-10 flex flex-col p-10 items-center'>
        <h2 className='text-gray-700 text-3xl mb-3'>Contact Us</h2>
      </div>

      <div className='bg-green-200 flex p-10 justify-center items-center'>
        <form className='w-full max-w-lg'>
          <div className='flex flex-wrap mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label className='block font-bold uppercase text-xs text-gray-700 mb-2 tracking-wider'>
                First Name
              </label>
              <input
                type='text'
                className='block w-full border border-green-500 text-gray-700 block rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                placeholder='John'
                required
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label className='block font-bold uppercase text-xs text-gray-700 mb-2 tracking-wider'>
                Last Name
              </label>
              <input
                type='text'
                className='block w-full border border-green-500 text-gray-700 block rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white'
                placeholder='Doel'
                required
              />
            </div>
          </div>
          <div className='flex mb-6'>
            <div className='w-full px-3'>
              <label className='block block font-bold uppercase text-xs text-gray-700 mb-2 tracking-wider'>
                Email
              </label>
              <input
                type='email'
                className='block w-full border border-green-500 text-gray-700 block rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white'
                placeholder='example@example.com'
                required
              />
            </div>
          </div>
          <div className='flex mb-6'>
            <div className='w-full px-3'>
              <label className='block block font-bold uppercase text-xs text-gray-700 mb-2 tracking-wider'>
                Message
              </label>
              <textarea
                className='no-resize resize-none h-48 appearance-none block w-full border border-green-500 text-gray-700 block rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white'
                placeholder='Message'
                required></textarea>
            </div>
          </div>
          <div className='md:flex md:items-center mx-3'>
            <div className='md:w-1/3'>
              <button className='shadow bg-green-500 font-bold text-white py-2 px-4 rounded-lg'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactUs
