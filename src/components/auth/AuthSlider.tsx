'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  {
    title: 'Track your funnel with Report',
    description: 'Get detailed insights into your sales funnel and optimize your conversions.',
    image: '/images/login-slider/banner-01.png',
    bgColor: 'from-blue-900 to-teal-900',
  },
  {
    title: 'Smart Recruitment Solutions',
    description: 'Streamline your hiring process with our intelligent recruitment tools.',
    image: '/images/login-slider/banner-02.png',
    bgColor: 'from-purple-900 to-pink-900',
  },
  {
    title: 'Advanced Analytics & Reports',
    description: 'Leverage advanced analytics to drive your business decisions.',
    image: '/images/login-slider/banner-03.png',
    bgColor: 'from-indigo-900 to-blue-900',
  },
]

export default function AuthSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-[500px] h-screen relative bg-slate-900 overflow-hidden ml-auto flex flex-col justify-between">
      {/* Slides */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover w-full h-full block"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] flex flex-col items-center pointer-events-none">
              <h3 className="text-white text-2xl font-bold drop-shadow-lg text-center w-full">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Icon, logo, slogan - căn giữa dưới slider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center pb-8 z-10 max-w-[500px]">
        {/* Icon chuyển slide */}
        <div className="flex justify-center items-center w-full space-x-2 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center w-full">
          <Image
            src="/images/topcv-logo-cropped.png"
            alt="TopCV"
            width={100}
            height={30}
            className="mb-2"
          />
        </div>

        {/* Slogan */}
        <span className="text-white text-base font-semibold drop-shadow-lg text-center w-full">
          Tiếp lợi thế, nối thành công
        </span>
      </div>
    </div>
  )
}
