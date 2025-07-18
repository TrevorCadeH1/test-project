'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      const newSlide = (currentSlide + 1) % images.length
      setCurrentSlide(newSlide)
      onSlideChange?.(newSlide)
    }, autoplayDelay)
    return () => {
      timerRef.current && clearInterval(timerRef.current)
    }
  }, [images.length, autoplayDelay, currentSlide])

  return (
    <div className={`relative w-full overflow-hidden ${height} ${className}`}>
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}