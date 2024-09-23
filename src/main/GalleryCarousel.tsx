import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import GalleryPreview1 from "./images/gallery-preview-1";
import GalleryPreview2 from "./images/gallery-preview-2";
import GalleryPreview3 from "./images/gallery-preview-3";

const GalleryCarousel = () => {
  const images = [<GalleryPreview1 />, <GalleryPreview2 />, <GalleryPreview3 />];
  return (
    <Carousel
      style={{ opacity: "0" }}
      className="z-20 w-full max-w-xs animate"
      opts={{
        align: "start",
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true
        })
      ]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6 aspect-square">
                  {image}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GalleryCarousel;
