'use client'

import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const timer = setInterval(() => {
      const newSlide = (currentSlide + 1) % images.length
      setCurrentSlide(newSlide)
      onSlideChange?.(newSlide)
    }, autoplayDelay)
    
    return () => clearInterval(timer)
  }, [images.length, autoplayDelay, currentSlide])

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