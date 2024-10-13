import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselSpacing() {
  return (
    <div className="relative w-full px-4">
      <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px] items-center justify-center border ">
              <img
                src="https://images.unsplash.com/photo-1727322116763-7475d57ca086"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px] items-center justify-center border ">
              <img
                src="https://images.unsplash.com/photo-1728560367995-ca3aac1ea4db"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px] items-center justify-center border ">
              <img
                src="https://images.unsplash.com/photo-1728740628211-199fdc3dacff"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px]  items-center justify-center border ">
              <img
                src="https://images.unsplash.com/photo-1728640907073-843dadc6f26b"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px]  items-center justify-center border ">
              <img
                src="https://images.unsplash.com/photo-1728640907121-0a83281273ec"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px]  items-center justify-center border ">
              <img
                src="https://images.unsplash.com/photo-1719216323965-9abc36678063"
                alt=""
              />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3 pl-4">
            <div className="flex aspect-square w-full h-[200px]  items-center justify-center border ">
              <img
                src="https://plus.unsplash.com/premium_photo-1728542462125-bc2888fda325"
                alt=""
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNavigation
          className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
          classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
          alwaysShow
        />
      </Carousel>
    </div>
  );
}
