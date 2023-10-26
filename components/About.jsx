const About = () => {
  return (
    <section
      className='w-full h-fit px-[40px] py-10  max-xs:px-[20px] relative bg-white '
      id='about'
    >
      <div className='max-w-[1250px] mx-auto '>
        <div className='inline-block'>
          {/* title - ABout Me */}
          <p className='section-title'>
            <span className='mb-1'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 0 L16 8 L8 16 L0 8 L8 0Z'
                  fill='currentColor'
                ></path>
              </svg>
            </span>
            About Me
          </p>
        </div>

        {/* details */}
        <div className='my-7'>
          <p classname='my-8 text-gray-600 text-[20px] tracking-wide  leading-10'>
            I'm a dedicated Full Stack Developer with a real passion for coding
            in Go and Javascript. Since writing my first line of code, I've been
            diving deeper everyday. Having completed many fullstack projects.
            I'm always eager to learn and improve my skills.
          </p>
        </div>
      </div>

      {/* stats */}
      <div className='mt-10'>
        <div className='w-full'>
          <ul className='flex justify-between gap-10 flex-col md:flex-row'>
            <li className='w-full shadow-sm'>
              <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg '>
                <h3 className='text-[40px] mb-3[3px] font-bold text-dark-red'>
                  15+
                </h3>
                <span className='uppercase'>Blog Post</span>
              </div>
            </li>
            <li className='w-full shadow-sm'>
              <div className=' w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg '>
                <h3 className='text-[40px] mb-3[3px] font-bold text-dark-red'>
                  30+
                </h3>
                <span className='uppercase'>Projects</span>
              </div>
            </li>
            <li className='w-full shadow-sm'>
              <div className=' w-full text-center py-[30px] md:py-[60px] rounded-md bg-light-bg '>
                <h3 className='text-[40px] mb-3[3px] font-bold text-dark-red'>
                  1+
                </h3>
                <span className='uppercase'>Years of Coding </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
