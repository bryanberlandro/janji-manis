import Carousel from "../components/fragments/Carousel";
import CategoryList from "../components/fragments/CategoryList";
import Navbar from "../components/fragments/Navbar";
import MaxLayout from "../components/layouts/MaxLayout";
import ProductsLayout from "../components/layouts/ProductsLayout";

const HomePage = () => {
    return (
        <>
        <Navbar/>
        <MaxLayout>
            <Carousel/>
            <div className="mt-6">
                <h1 className="font-bold text-lg">Our Top Categories</h1>
                <div className="mt-3">
                    <CategoryList/>
                </div>
                <div className="mt-10">
                    <ProductsLayout/>
                </div>
            </div>
        </MaxLayout>
        </>
    )
}

export default HomePage;