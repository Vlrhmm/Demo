import React from 'react'

const Banner = () => {
  return (
    <section class="bg-[url('/src/assets/Images/bgimage.jpg')] bg-cover bg-center justify-center h-[400px] relative z-0">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center"
      >
        <div class="text-center">
          <h1
            class="text-2xl font-bold text-white sm:text-xl md:text-6xl"
          >
            Kid's Event
          </h1>
          <p class="my-4 text-xl text-white">
          Unlock creativity with endless possibilities<br />
            Exciting adventures for kids of all ages<br/>
            All work and no play makes Muna a dull girl
          </p>
        </div>
      </div>
    </section>
  )
}

export default Banner