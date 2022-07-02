import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import { AiOutlineCopyright } from 'react-icons/ai'

function Footer() {
  return (
    <footer className='pt-40 px-4 divide-y space-y-5'>
      <div className='container flex flex-col justify-between mx-auto space-y-8 lg:flex-row lg:space-y-0'>
        <div className='lg:w-1/3'>
          <Link to='/' className='flex justify-center'>
            <div className='flex w-12 h-12'>
              <img
                src={require('../images/home.png')}
                alt='Home'
                className='h-8 w-8 mr-2'
              />
            </div>
            <span className='font-semibold text-gray-500 text-2xl'>
              Prime Properties
            </span>
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3'>
          <div className='space-y-3 '>
            <h3 className='text-green-500 uppercase tracking-wide'>Product</h3>
            <ul className='space-y-1'>
              <li>
                <Link to='/' className=''>
                  Features
                </Link>
              </li>
              <li>
                <Link to='/' className=''>
                  Integrations
                </Link>
              </li>
              <li>
                <Link to='/' className=''>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to='/' className=''>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-green-500 uppercase tracking-wide'>Company</h3>
            <ul className='space-y-1'>
              <li>
                <Link to='/' className=''>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to='/' className=''>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-green-500 uppercase tracking-wide'>
              Developers
            </h3>
            <ul className='space-y-1'>
              <li>
                <Link to='/' className=''>
                  Public API
                </Link>
              </li>
              <li>
                <Link to='/' className=''>
                  Documentation
                </Link>
              </li>
              <li>
                <Link to='/' className=''>
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h3 className='text-green-500 uppercase tracking-wide'>
              Social Media
            </h3>
            <div className='flex justify-start space-x-2'>
              <Link to='#'>
                <FaFacebookF className='h-6 w-6' />
              </Link>
              <Link to='#'>
                <FaInstagram className='h-6 w-6' />
              </Link>
              <Link to='#'>
                <FaYoutube className='h-6 w-6' />
              </Link>
              <Link to='#'>
                <FaTwitter className='h-6 w-6' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center py-6'>
        <Link
          to='#'
          className='flex flex-row py-6 text-center text-green-500 items-center'>
          <AiOutlineCopyright className='mr-1 ' /> 2022 Company Co. All rights
          reserved.
        </Link>
      </div>
    </footer>
  )
}

export default Footer
