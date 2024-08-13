import Carousel from "../components/fragments/Carousel";
import CategoryCard from "../components/fragments/CategoryCard";
import CategoryList from "../components/fragments/CategoryList";
import Navbar from "../components/fragments/Navbar";
import MaxLayout from "../components/layouts/MaxLayout";
import ProductsLayout from "../components/layouts/ProductsLayout";
import Footer from "../components/fragments/Footer";
import 'swiper/swiper-bundle.css'

const HomePage = () => {
    return (
        <>
        <Navbar/>
        <MaxLayout>
            <Carousel/>
            <div className="mt-6">
                <h1 className="font-bold text-xl text-teak-950">Our Top Categories</h1>
                <div className="mt-3">
                    <CategoryList/>
                </div>
                <div className="mt-10">
                    <ProductsLayout swiperDelay={4000}/>
                </div>

                <div className="my-20">
                    <div className="flex gap-2">
                        <CategoryCard
                        title="Signature Coffee"
                        />
                        <CategoryCard
                        title="Non Coffee"
                        bgcol="bg-teal-100"
                        />
                        <CategoryCard
                        title="Cake & Pastry"
                        bgcol="bg-rose-100"
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <ProductsLayout swiperDelay={5000}/>
                </div>

                <div className="mt-20">
                    <ProductsLayout swiperDelay={7000}/>
                </div>

            </div>
        </MaxLayout>
        <Footer/>
        </>
    )
}

export default HomePage;