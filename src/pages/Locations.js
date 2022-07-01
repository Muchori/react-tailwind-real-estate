function Locations() {
  return (
    <>
      <div className='mt-10 flex p-10 justify-center'>
        <h2 className='text-gray-500 text-3xl mb-3'>Locations</h2>
      </div>

      {/* Card section */}
      <div className='grid p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {/* Card */}
        <div className='rounded overflow-hidden shadow-xl'>
          <img
            className='w-full'
            src={require('../images/newyork.jpg')}
            alt='Orchid Villa'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>New York</div>
            <p className='text-gray-700'>
              New York City, officially the City of New York, historically New
              Amsterdam, the Mayor, Alderman, and Commonality of the City of New
              York, and New Orange, byname the Big Apple, city and port located
              at the mouth of the Hudson River, southeastern New York state,
              northeastern U.S. It is the largest and most influential American
              metropolis, encompassing Manhattan and Staten islands, the western
              sections of Long Island, and a small portion of the New York state
              mainland to the north of Manhattan. New York City is in reality a
              collection of many neighbourhoods scattered among the city’s five
              boroughs—Manhattan, Brooklyn, the Bronx, Queens, and Staten
              Island—each exhibiting its own lifestyle. Moving from one city
              neighbourhood to the next may be like passing from one country to
              another. New York is the most populous and the most international
              city in the country. Its urban area extends into adjoining parts
              of New York, New Jersey, and Connecticut.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className='rounded overflow-hidden shadow-xl'>
          <img
            className='w-full'
            src={require('../images/chicago.jpg')}
            alt='Orchid Villa'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Chicago</div>
            <p className='text-gray-700'>
              The City of Chicago covers an area of 60,000 hectares and sits 176
              meters (578 feet) above sea level on the southwestern shore of
              Lake Michigan. At 190 km wide and 495 km long, its the 5th largest
              body of fresh water in the world. The city is traversed by the
              Chicago and Calumet rivers. Chicago's extensive parklands,
              including 3,000 hectares of city parks attract an estimated 86
              million visitors annually. As a multicultural city that thrives on
              the harmony and diversity of its neighborhoods, Chicago today
              embodies the values of America's heartland-integrity, hard work
              and community and reflects the ideals in the social fabric of its
              77 distinct neighborhoods.
            </p>
          </div>
        </div>
        {/* Card */}
        <div className='rounded overflow-hidden shadow-xl'>
          <img
            className='w-full'
            src={require('../images/california.jpg')}
            alt='Orchid Villa'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>California</div>
            <p className='text-gray-700'>
              California City was founded in May 1958 and incorporated on
              December 10, 1965. A planned community, California City is the
              third largest incorporated city in land area in California and the
              eleventh largest in the United States. With easy access to the
              Mojave Desert and Edwards Air Force Base, California City is an
              ideal area for military personnel and lovers of the wide, open
              desert.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locations
