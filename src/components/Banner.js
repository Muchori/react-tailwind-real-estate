import { Link } from 'react-router-dom'

function Banner() {
  return (
    <main className='mt-10 md:mt-16 px-4'>
      <div className='sm:text-center lg:text-left'>
        <h1 className='tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl'>
          <span className='block'>Premium Properties</span>
          <span className='block text-green-500'>Non-Premium Prices</span>
        </h1>
        <p className='mt-3 text-base text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:max-auto lg:mx-0'>
          At prime properties, we ensure that our client get the best properties
          at affordable prices. Luxury is our priority. We are always looking
          for the best properties in the market. We are always looking for the
          best.
        </p>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center'>
          <div className='md:m-2'>
            <Link
              to=''
              className='flex justify-center rounded-lg bg-green-500 text-white px-8 py-3'>
              View Properties
            </Link>
          </div>
          <div className='md:m-2'>
            <Link
              to=''
              className='flex justify-center rounded-lg bg-green-200 text-green-700 px-8 py-3'>
              Explore Locations
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Banner
