import React from 'react'

const Newsletter = () => {
  return (
    <section className='py-20 bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up'>
        <div className='p-8 md:p-12'>
            <div className='max-w-7xl mx-auto'>
              <h2 className='text-2xl font-bold mb-4'>Subscribe to My Newsletter</h2>
              <p className='text-gray-600 dark:text-gray-300 md:w-2/3'>Stay updated with the latest blog posts and projects. 
              Subscribe to my newsletter and never miss out!</p> 
            </div>
        </div>
    </section>
  )
}

export default Newsletter