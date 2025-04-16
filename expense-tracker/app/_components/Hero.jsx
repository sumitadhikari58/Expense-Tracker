import React from 'react'

function Hero() {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
    <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-prose text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Take control of your spending and
          <strong className="text-orange-600"> track </strong>
          expenses effortlessly
        </h1>
  
        <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
          Stay on top of your finances with real-time insights, smart categorization, and clear
          reports. Manage your money like a pro—all in one place.
        </p>
  
        <div className="mt-4 flex justify-center gap-4 sm:mt-6">
          <a
            className="inline-block rounded border border-orange-500 bg-orange-500 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-orange-700"
            href="#"
          >
            Start Tracking
          </a>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero