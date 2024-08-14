import Breadcrumbs from "../components/fragments/Breadcrumb";
import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";
import MaxLayout from "../components/layouts/MaxLayout";
import ProductDetailsLayout from "../components/layouts/productDetails/ProductDetailsLayout";
import ProductsLayout from "../components/layouts/ProductsLayout";

const ProductDetailPage = () => {
    return (
        <>
        <Navbar/>
        <MaxLayout>
            <Breadcrumbs/>
            <ProductDetailsLayout/>
            <div className="mt-20">
                <ProductsLayout
                swiperDelay={8000}
                />
            </div>
        </MaxLayout>
        {/* <Footer/> */}
        </>
    )
}

export default ProductDetailPage;