"use client";
import { CodeBlock, github } from "react-code-blocks";
import { carousel } from "@/components/carousel/code";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DirectionalCarousel,
  CarouselItem,
  SlideContent,
} from "@/components/carousel/carousel";

const Carousel = () => {
  return (
     <div className="flex justify-center border-2 border-black rounded-md p-4">
      <Tabs defaultValue="account" className="w-[550px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Example</TabsTrigger>
          <TabsTrigger value="password">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardContent>
              <div className="size-[500px]">
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
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardContent className="space-y-2">
              <CodeBlock
                customStyle={{
                  borderBottomLeftRadius: "1rem",
                  paddingLeft: "0.4rem",
                  overflowY: "scroll",
                  overflowX: "hidden",
                }}
                text={carousel}
                language="tsx"
                showLineNumbers={false}
                theme={github}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Carousel;
