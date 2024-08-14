import React, {
  useState,
  useCallback,
  ReactNode,
  useEffect,
  useRef,
  createContext,
  useContext
} from 'react'

interface CarouselContextType {
  size: { width: number; height: number }
  direction: 'horizontal' | 'vertical'
  nextSlide: () => void
  prevSlide: () => void
}

const CarouselContext = createContext<CarouselContextType | null>(null)

interface CarouselItemProps {
  children: ReactNode
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('CarouselItem must be used within a DirectionalCarousel')
  }

  const { size, direction } = context

  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{
        width: direction === 'horizontal' ? `${size.width}px` : '100%',
        height: direction === 'vertical' ? `${size.height}px` : '100%'
      }}
    >
      {children}
    </div>
  )
}

export const useCarouselContext = () => {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error(
      'useCarouselContext must be used within a DirectionalCarousel'
    )
  }
  return context
}

interface CarouselProps {
  children: React.ReactElement<CarouselItemProps>[]
  direction: 'horizontal' | 'vertical'
}

const DirectionalCarousel: React.FC<CarouselProps> = ({
  children,
  direction
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length)
  }, [children.length])

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    )
  }, [children.length])

  useEffect(() => {
    const updateSize = () => {
      if (carouselRef.current) {
        setCarouselSize({
          width: carouselRef.current.offsetWidth,
          height: carouselRef.current.offsetHeight
        })
      }
    }

    updateSize()

    const resizeObserver = new ResizeObserver(updateSize)
    if (carouselRef.current) {
      resizeObserver.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        resizeObserver.unobserve(carouselRef.current)
      }
    }
  }, [])

  const getTransformStyle = () => {
    if (direction === 'horizontal') {
      return { transform: `translateX(-${activeIndex * 100}%)` }
    }
    return { transform: `translateY(-${activeIndex * 100}%)` }
  }

  const getContainerClass = () => {
    return `flex ${direction === 'horizontal' ? 'flex-row' : 'flex-col'}`
  }

  const getButtonPositions = () => {
    if (direction === 'horizontal') {
      return {
        prev: 'left-4 top-1/2 -translate-y-1/2',
        next: 'right-4 top-1/2 -translate-y-1/2'
      }
    }
    return {
      prev: 'top-4 left-1/2 -translate-x-1/2',
      next: 'bottom-4 left-1/2 -translate-x-1/2'
    }
  }

  const buttonPositions = getButtonPositions()

  return (
    <CarouselContext.Provider
      value={{ size: carouselSize, direction, nextSlide, prevSlide }}
    >
      <div ref={carouselRef} className="relative size-full overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-in-out ${getContainerClass()}`}
          style={getTransformStyle()}
        >
          {children}
        </div>
        <button
          onClick={prevSlide}
          className={`absolute ${buttonPositions.prev} z-10 rounded-full bg-white bg-opacity-50 p-2`}
        >
          {direction === 'horizontal' ? '◀' : '▲'}
        </button>
        <button
          onClick={nextSlide}
          className={`absolute ${buttonPositions.next} z-10 rounded-full bg-white bg-opacity-50 p-2`}
        >
          {direction === 'horizontal' ? '▶' : '▼'}
        </button>
      </div>
    </CarouselContext.Provider>
  )
}

interface SlideContentProps {
  color: string
  children: ReactNode
}

export const SlideContent: React.FC<SlideContentProps> = ({
  color,
  children
}) => {
  return (
    <div
      className={`${color} flex size-full flex-col items-center justify-center text-2xl text-white`}
    >
      {children}
    </div>
  )
}

export { DirectionalCarousel }

export default function CarouselExample() {
  return (
    <div className="flex h-screen flex-col">
      <div className="mb-4 flex-1">
        <DirectionalCarousel direction="horizontal">
          <CarouselItem>
            <SlideContent color="bg-red-500">
              <h2>Horizontal Slide 1</h2>
              <p>This is custom content for slide 1</p>
            </SlideContent>
          </CarouselItem>
          <CarouselItem>
            <SlideContent color="bg-blue-500">
              <h2>Horizontal Slide 2</h2>
              <p>This is custom content for slide 2</p>
            </SlideContent>
          </CarouselItem>
          <CarouselItem>
            <SlideContent color="bg-green-500">
              <h2>Horizontal Slide 3</h2>
              <p>This is custom content for slide 3</p>
            </SlideContent>
          </CarouselItem>
        </DirectionalCarousel>
      </div>

      <div className="flex-1">
        <DirectionalCarousel direction="vertical">
          <CarouselItem>
            <SlideContent color="bg-purple-500">
              <h2>Vertical Slide 1</h2>
              <p>This is custom content for slide 1</p>
            </SlideContent>
          </CarouselItem>
          <CarouselItem>
            <SlideContent color="bg-yellow-500">
              <h2>Vertical Slide 2</h2>
              <p>This is custom content for slide 2</p>
            </SlideContent>
          </CarouselItem>
          <CarouselItem>
            <SlideContent color="bg-pink-500">
              <h2>Vertical Slide 3</h2>
              <p>This is custom content for slide 3</p>
            </SlideContent>
          </CarouselItem>
        </DirectionalCarousel>
      </div>
    </div>
  )
}
