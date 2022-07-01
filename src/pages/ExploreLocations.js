import BackgroundImage from '../images/luxury.jpg'

function ExploreLocations() {
  return (
    <div
      className='py-20 h-screen'
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${BackgroundImage})`,
      }}>
      <div className='connatiner mx-auto px-6 mt-40'>
        <h2 className='text-4xl font-bold text-white mb-2'>
          Experience Luxury Like Never Before
        </h2>
        <h3 className='text-2xl mb-8 text-gray-200 text-white'>
          50+ Exotic locations across the globe
        </h3>
        <button className='hover:bg-green-500 text-white shadow-lg uppercase border-2 px-8 py-4 font-bold tracking-wider'>
          Explore Locations
        </button>
      </div>
    </div>
  )
}

export default ExploreLocations
