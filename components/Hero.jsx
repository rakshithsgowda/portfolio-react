'use client'

import Image from 'next/image'
import Link from 'next/link'

import '@/app/animation.css'

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content-container'>
        <div className='max-md:order-2 flex flex-col gap-5 z-40'>
          {/* info text */}
          <div className='text-4xl lg:text-6xl'>
            <h1>Hi, I'm Rakshith.S. </h1>
            <span className='font-bold text-dark-red'>Developer</span>
            <h2>From Bengaluru</h2>
            <p className='mt-5 text-xl'>
              Full stack engineer. Coffee-fueled coder. Carbs-powered problem
              solver. Embracing new tech with a smile.
            </p>
          </div>
          {/* 2 buttons for Projects and form section */}
          <div className='flex gap-4 max-md:justify-center'>
            <Link href='#projects'>
              <button className='bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer'>
                Projects
              </button>
            </Link>
            <Link href='#contacts'>
              <button className='bg-dark-blue text-white px-2 lg:px-4 py-1 rounded-md hover:bg-dark-blue/75 cursor-pointer'>
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        {/* image insertion */}
        <Image
          src='/assets/hero.png'
          width={400}
          height={400}
          alt='Rakshith S'
          className='z-10'
        />
      </div>

      {/* square animation */}
      <ul className='bg-squares'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  )
}

export default Hero
