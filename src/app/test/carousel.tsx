'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images?: string[]
  autoplayDelay?: number
  height?: string
  className?: string
  onSlideChange?: (index: number) => void
  currentSlide?: number
  setCurrentSlide?: (index: number) => void
}

export default function SimpleCarousel({ 
  images = ['/web1.png', '/web2.png', '/web3.png', '/web4.png', '/web5.png'],
  autoplayDelay = 10000,
  height = 'h-[400px]',
  className = '',
  onSlideChange,
  currentSlide: externalCurrentSlide,
  setCurrentSlide: externalSetCurrentSlide
}: CarouselProps) {
  const [internalCurrentSlide, setInternalCurrentSlide] = useState(0)
  
  const currentSlide = externalCurrentSlide !== undefined ? externalCurrentSlide : internalCurrentSlide
  const setCurrentSlide = externalSetCurrentSlide || setInternalCurrentSlide

  // Memoize the slide advance function to prevent unnecessary effect re-runs
  const advanceSlide = useCallback(() => {
    const newSlide = (currentSlide + 1) % images.length
    setCurrentSlide(newSlide)
    onSlideChange?.(newSlide)
  }, [currentSlide, images.length, setCurrentSlide, onSlideChange])

  useEffect(() => {
    const timer = setInterval(advanceSlide, autoplayDelay)
    return () => clearInterval(timer)
  }, [advanceSlide, autoplayDelay])

  return (
    <div className={`relative w-full ${height} overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}