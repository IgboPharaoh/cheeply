import React from 'react'
import AgencyAd from '../agency-ad/AgencyAd'
import AssuranceTab from '../assurance/AssuranceTab'
import Footer from '../footer/Footer'
import Offers from '../offers/Offers'
import ProductAdvert from '../product-ad/ProductAdvert'
import Subscribe from '../subscribe/Subscribe'
import LandingPage from './LandingPage'


const HomePage = () => {
    return (
        <div>
            <LandingPage/>
            <Offers/>
            <AssuranceTab/>
            <ProductAdvert/>
            <AgencyAd/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default HomePage
