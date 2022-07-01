import BackgroundImage from '../images/luxury.jpg'

function Banner1() {
  return (
    <div
      className='py-20'
      style={{
        background: `linear-gradient(315deg, #D1FAE5 0%, #10B981 74%)`,
      }}>
      <div className='connatiner mx-auto px-6'>
        <h2 className='text-4xl font-bold text-white mb-2'>
          Save upto 50% on broker comissions
        </h2>
        <h3 className='text-2xl mb-8 text-gray-200 text-white'>
          Lowest brokerage fees
        </h3>
        <button className='bg-white rounded-2xl shadow-lg uppercase border-2 px-8 py-4 font-bold tracking-wider'>
          Enquire
        </button>
      </div>
    </div>
  )
}

export default Banner1
