import React from 'react'

const Navbar = () => {
  return (
    <nav class="bg-white border-2 border-red-500 relative z-10">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-30 items-center ">
          <div
            class="flex flex-1  justify-start md:items-stretch md:justify-start"
          >
            
            <a class="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                class="h-15 w-auto ml-8"
                src="/src/assets/Images/mklogo.png"
                alt="Muna Kalati"
              />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </a>
            <div class="">
              <div class="flex ">
                <a
                
                  href="/index.html"
                  class="text-black "
                  ><img
                  class="h-10 mt-4 ml-10 w-auto justify-center"
                  src="/src/assets/Images/location.png"
                  alt="Muna Kalati"/></a
                >
                <a
                  href="/jobs.html"
                  class="text-black text-l mt-5"
                  >Event Places</a
                >
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar