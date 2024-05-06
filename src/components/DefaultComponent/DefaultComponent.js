import React from 'react'
import TopHeaderComponent from '../HeaderComponent/TopHeaderComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import Footer from '../FooterComponent/FooterComponent'


const DefaultComponent = ({children}) => {
  return (
    <div className="">
        <TopHeaderComponent/>
        <HeaderComponent />
        {children}
        <Footer/>
    </div>
  )
}

export default DefaultComponent