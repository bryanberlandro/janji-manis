import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import ProductCard from "../fragments/ProductCard";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import DataDummy from "../../data/DataDummy";
import { Link } from "react-router-dom";

type ProductLayoutType = {
    swiperDelay: number;
}

type DataDummyType = {
    id: number;
    name: string;
    price: string;
    image: string;
}

const ProductsLayout = ({swiperDelay}: ProductLayoutType) => {
    const data:DataDummyType[] = DataDummy

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold text-teak-950">Best Sellers</h1>
                <div className="flex items-center gap-2 text-lg">
                    <div className="rounded-full bg-teak-50 p-2 text-teak-600 swiper-button-prevs hover:brightness-95 active:shadow-sm active:brightness-90 active:scale-[.95]">
                        <BiChevronLeft/>
                    </div>
                    <div className="rounded-full bg-teak-50 p-2 text-teak-600 swiper-button-nexts hover:brightness-95 active:shadow-sm active:brightness-90 active:scale-[.95]">
                        <BiChevronRight/>
                    </div>
                </div>
            </div>

            <Swiper
            modules={[Scrollbar, A11y, Autoplay, Navigation]}
            spaceBetween={50}
            autoplay={{
                delay: swiperDelay,
                disableOnInteraction: false,
            }}
            navigation={{
                prevEl: ".swiper-button-prevs",
                nextEl: ".swiper-button-nexts",
            }}
            slidesPerView={1}
            breakpoints={{
                360: {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 0,
                },
            }}
            loop={true}
            className="w-full overflow-hidden mt-4 xl:mt-6"
            >
                {
                    data.map(dt => (
                    <SwiperSlide key={dt.id}>
                        <Link to={`/coffe/${dt.name}`}>
                            <ProductCard 
                            name={dt.name}
                            price={dt.price}
                            />
                        </Link>
                    </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ProductsLayout;