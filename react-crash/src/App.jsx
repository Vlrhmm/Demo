import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Searchbar from './components/Searchbar'



const App = () => {
  return (
    
       <>
    <Navbar />
    <Banner />
    
    <div className="   ">
      <Searchbar />
    </div>
       
    
    
    <section class="py-4">
      <h1 class='font-bold text-3xl ml-20  lg:ml-70 mt-7 mb-5 text-green-900'>All</h1>
      <div class="container-xl lg:container lg:ml-50 mb-30 sm-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 w-full h-150 overflow-y-auto gap-2 p-9 rounded-lg">
          <div class="bg-white h-91 p-6 rounded-lg shadow-md">
          <img
                class="h-55 w-50"
                src="/src/assets/Images/solo.jpg"
                alt="Muna Kalati"
              />
            <h2 class="text-1 text-sm ">Mansa Musa And The Trail Of... </h2>
             <div className="flex items-center space-x-1 text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
              </div>
            <p class="text-sm text-gray-400">
              National Theatre Of Ghana, Accra.
            </p>
            <div class="flex space-x-10 sm:space-x-5">
              <span class="text-sm text-orange-500">Free</span>
              <span class="text-sm  text-yellow-300">All Age</span>
            </div>
           
          </div>
          <div class="bg-white h-91 p-6 rounded-lg shadow-md">
          <img
                class="h-55 w-50"
                src="/src/assets/Images/solo.jpg"
                alt="Muna Kalati"
              />
            <h2 class="text-1 text-sm ">All Work And No Play. </h2>
             <div className="flex items-center space-x-1 text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
              </div>
            <p class="text-sm text-gray-400">
              National Theatre Of Ghana, Accra.
            </p>
            <div class="flex space-x-10 sm:space-x-5">
              <span class="text-sm text-orange-500">Free</span>
              <span class="text-sm  text-yellow-300">All Age</span>
            </div>
           
          </div>
          <div class="bg-white h-91 p-6 rounded-lg shadow-md">
          <img
                class="h-55 w-50"
                src="/src/assets/Images/solo.jpg"
                alt="Muna Kalati"
              />
            <h2 class="text-1 text-sm ">Anansesem For Kids </h2>
             <div className="flex items-center space-x-1 text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
              </div>
            <p class="text-sm text-gray-400">
              National Theatre Of Ghana, Accra.
            </p>
            <div class="flex space-x-10 sm:space-x-5">
              <span class="text-sm text-orange-500">GHC 150</span>
              <span class="text-sm  text-yellow-300">All Age</span>
            </div>
           
          </div>
          <div class="bg-white h-91 p-6 rounded-lg shadow-md">
          <img
                class="h-55 w-50"
                src="/src/assets/Images/solo.jpg"
                alt="Muna Kalati"
              />
            <h2 class="text-1 text-sm ">Mansa Musa And The Trail Of... </h2>
             <div className="flex items-center space-x-1 text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
              </div>
            <p class="text-sm text-gray-400">
              National Theatre Of Ghana, Accra.
            </p>
            <div class="flex space-x-10 sm:space-x-5">
              <span class="text-sm text-orange-500">Free</span>
              <span class="text-sm  text-yellow-300">All Age</span>
            </div>
           
          </div>
          <div class="bg-white h-91 p-6 rounded-lg shadow-md">
          <img
                class="h-55 w-50"
                src="/src/assets/Images/solo.jpg"
                alt="Muna Kalati"
              />
            <h2 class="text-1 text-sm ">Mansa Musa And The Trail Of... </h2>
             <div className="flex items-center space-x-1 text-yellow-400">
                {Array(5).fill(0).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.175 0l-3.386 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.045 9.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.975z" />
                  </svg>
                ))}
              </div>
            <p class="text-sm text-gray-400">
              National Theatre Of Ghana, Accra.
            </p>
            <div class="flex space-x-10 sm:space-x-5">
              <span class="text-sm text-orange-500">GHC 100</span>
              <span class="text-sm  text-yellow-300">All Age</span>
            </div>
           
          </div>
        </div>
      </div>
    </section>

    
    
    </>
  )
}

export default App