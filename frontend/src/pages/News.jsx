import React from 'react'
import Blog from '../components/Blog'
import BlogBanner from '../components/BlogBanner'
import ContactInfoCards from '../components/ContactInfoCards'

const news = () => {
  return (
    <div>
      <BlogBanner />
      <Blog />
      <ContactInfoCards />
      
    </div>
  )
}

export default news
