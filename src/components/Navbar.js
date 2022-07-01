import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import IconHome from '../images/home.png'

function Navbar() {
  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <Link to='/' className='flex items-center py-4 px-2'>
              <img
                src={require('../images/home.png')}
                alt=''
                className='mr-5'
              />
              <span className='font-bold text-gray-500 text-lg'>
                Prime Properties
              </span>
            </Link>
          </div>
          <div className='hidden md:flex items-center space-x-1'>
            <Link
              to=''
              className='py-4 px-2 border-green-500 border-b-4 text-green-500 font-semibold'>
              Home
            </Link>
            <Link
              to=''
              className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'>
              Services
            </Link>
            <Link
              to=''
              className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'>
              About
            </Link>
            <Link
              to=''
              className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
