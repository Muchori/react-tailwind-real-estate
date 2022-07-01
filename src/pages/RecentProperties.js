function RecentProperties() {
  return (
    <>
      <div className='mt-5 flex p-10 justify-center'>
        <h2 className='text-gray-500 text-3xl mb-3'>Recent Properties</h2>
      </div>

      {/* Card section */}
      <div className='grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {/* Card */}
        <div className='rounded overflow-hidden shadow-xl'>
          <img
            className='w-full'
            src={require('../images/home1.jpg')}
            alt='Orchid Villa'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Orchid Villa</div>
            <p className='text-gray-700'>
              Located in suburbs of california, Orchid Villa offers luxury with
              a modern touch. Equiped with green lighting and a rainwater
              harvesting system, this property is ecosystem friendly
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2'>
              $455, 670
            </span>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3'>
              7 Beds
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3 '>
              15 Baths
            </span>
          </div>
          <div className='px-6 pt-4 pb-6'>
            <button className='inline-block bg-green-500 rounded-full px-4 py-1 text-sm font-semibold text-white mr-3 mb-3'>
              View Property
            </button>
          </div>
        </div>
        {/* Card */}
        <div className='rounded overflow-hidden shadow-xl'>
          <img
            className='w-full'
            src={require('../images/home2.jpg')}
            alt='Orchid Villa'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Orchid Villa</div>
            <p className='text-gray-700'>
              Located in suburbs of california, Orchid Villa offers luxury with
              a modern touch. Equiped with green lighting and a rainwater
              harvesting system, this property is ecosystem friendly
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2'>
              $455, 670
            </span>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3'>
              7 Beds
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3 '>
              15 Baths
            </span>
          </div>
          <div className='px-6 pt-4 pb-6'>
            <button className='inline-block bg-green-500 rounded-full px-4 py-1 text-sm font-semibold text-white mr-3 mb-3'>
              View Property
            </button>
          </div>
        </div>
        {/* Card */}
        <div className='rounded overflow-hidden shadow-xl'>
          <img
            className='w-full'
            src={require('../images/home3.jpg')}
            alt='Orchid Villa'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Orchid Villa</div>
            <p className='text-gray-700'>
              Located in suburbs of california, Orchid Villa offers luxury with
              a modern touch. Equiped with green lighting and a rainwater
              harvesting system, this property is ecosystem friendly
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2'>
              $455, 670
            </span>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3'>
              7 Beds
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-3 mb-3 '>
              15 Baths
            </span>
          </div>
          <div className='px-6 pt-4 pb-6'>
            <button className='inline-block bg-green-500 rounded-full px-4 py-1 text-sm font-semibold text-white mr-3 mb-3'>
              View Property
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentProperties
