export const carousel = `import {
    DirectionalCarousel,
    CarouselItem,
    SlideContent,
  } from "@/components/carousel/carousel";

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
</DirectionalCarousel>`;