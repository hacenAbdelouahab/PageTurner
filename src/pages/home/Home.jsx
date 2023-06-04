import React from 'react'
import Slider from '../../components/slider/Slider'
import Services from '../../components/services/Services'
import BookSlider from '../../components/book-slider/BookSlider'

export default function Home() {
  return (
    <>
    <Slider />
    <Services />
    <BookSlider heading={"Most Gifted"}/>
    <BookSlider heading={"Best Seller"}/>
    <BookSlider heading={"Most Wished For"}/>
    </>
  )
}
