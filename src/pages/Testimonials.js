import { Link } from 'react-router-dom'

function Testimonials() {
  return (
    <>
      <div className='mt-10 flex flex-col p-10 items-center'>
        <h2 className='text-gray-700 text-3xl mb-3'>Testimonials</h2>
        <h3 className='text-gray-500 text-xl mb-3'>
          What clients says about us ?
        </h3>
      </div>

      <div className='p-10 grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
        {/* Card Testimonials */}
        <div className='shadow-lg mx-auto bg-white rounded-xl p-4'>
          <p className='text-gray-600 font-bold text-lg mb-3'>
            <span className='text-green-500'>"</span>
            This is one of the best property website I have ever used. Kudos to
            Prime Properties and the team.
            <span className='text-green-500 font-bold text-lg'>"</span>
          </p>
          <div className='flex bg-green-100 rounded-full items-center'>
            <Link to='#' className='block-relative'>
              <img
                src={require('../images/avatar.png')}
                alt='Avatar'
                className='h-10 w-10 rounded-full mx-auto'
              />
            </Link>
            <div className='flex flex-col ml-2 justify-between'>
              <span className='text-sm text-green-500 font-semibold'>
                Harry Jams
              </span>
              <span className='text-xs flex items-center'>Online Marketer</span>
            </div>
          </div>
        </div>
        {/* Card Testimonials */}
        <div className='shadow-lg mx-auto bg-white rounded-xl p-4'>
          <p className='text-gray-600 font-bold text-lg mb-3'>
            <span className='text-green-500'>"</span>
            This is one of the best property website I have ever used. Kudos to
            Prime Properties and the team.
            <span className='text-green-500 font-bold text-lg'>"</span>
          </p>
          <div className='flex bg-green-100 rounded-full items-center'>
            <Link to='#' className='block-relative'>
              <img
                src={require('../images/avatar.png')}
                alt='Avatar'
                className='h-10 w-10 rounded-full mx-auto'
              />
            </Link>
            <div className='flex flex-col ml-2 justify-between'>
              <span className='text-sm text-green-500 font-semibold'>
                Peter Joe
              </span>
              <span className='text-xs flex items-center'></span>
            </div>
          </div>
        </div>
        {/* Card Testimonials */}
        <div className='shadow-lg mx-auto bg-white rounded-xl p-4'>
          <p className='text-gray-600 font-bold text-lg mb-3'>
            <span className='text-green-500'>"</span>
            This is one of the best property website I have ever used. Kudos to
            Prime Properties and the team.
            <span className='text-green-500 font-bold text-lg'>"</span>
          </p>
          <div className='flex bg-green-100 rounded-full items-center'>
            <Link to='#' className='block-relative'>
              <img
                src={require('../images/avatar.png')}
                alt='Avatar'
                className='h-10 w-10 rounded-full mx-auto'
              />
            </Link>
            <div className='flex flex-col ml-2 justify-between'>
              <span className='text-sm text-green-500 font-semibold'>
                John Doe
              </span>
              <span className='text-xs flex items-center'>Director</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
