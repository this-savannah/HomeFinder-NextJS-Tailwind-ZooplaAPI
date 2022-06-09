import Link from "next/link"
import Card from "../../../ui/card"
import Container from "../../../ui/container"
import LargeTitle from "../../../ui/largeTitle"

const FeaturedListings = ({ listings: { listing } }) => {
  return (
    <>
      <div className='bg-stone-100'>
        <Container>
          {/* Content */}
          <div className=''></div>
          <LargeTitle title='Featured Listings' />
          {/* Featured Cards */}
          <div className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {listing.map((listing) => {
              return (
                <Link href='/featured' passHref>
                  <a className='pointer'>
                    <Card listing={listing} />
                  </a>
                </Link>
              )
            })}
          </div>
        </Container>
      </div>
    </>
  )
}

export default FeaturedListings