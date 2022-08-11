import React from 'react'
import AboutClientListHeader from '@components/about/client/ListHeader'
import AboutClientList from '@components/about/client/List'
import AboutClientReviewHeader from '@components/about/client/ReviewHeader'
import AboutClientReview from '@components/about/client/Review'

const AboutClient = () => {
  return (
    <section className='pt-16 overflow-hidden'>
      <AboutClientListHeader />
      <AboutClientList />
      <AboutClientReviewHeader />
      <AboutClientReview />
    </section>
  )
}

export default AboutClient
