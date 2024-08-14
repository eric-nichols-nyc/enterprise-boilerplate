import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DirectionalCarousel, CarouselItem, SlideContent } from './carousel';

const meta: Meta<typeof DirectionalCarousel> = {
  title: 'Components/DirectionalCarousel',
  component: DirectionalCarousel,
  tags: ["autodocs"],

  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DirectionalCarousel>;

const HorizontalCarousel: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => (
    <div style={{ height: '400px' }}>
      <DirectionalCarousel {...args}>
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
  ),
};

const VerticalCarousel: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <div style={{ height: '400px' }}>
      <DirectionalCarousel {...args}>
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
  ),
};

export const Horizontal = HorizontalCarousel;
export const Vertical = VerticalCarousel;