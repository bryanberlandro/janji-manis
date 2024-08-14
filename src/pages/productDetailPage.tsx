import Breadcrumbs from "../components/fragments/Breadcrumb";
import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";
import MaxLayout from "../components/layouts/MaxLayout";
import ProductDetailsLayout from "../components/layouts/productDetails/ProductDetailsLayout";

const ProductDetailPage = () => {
    return (
        <>
        <Navbar/>
        <MaxLayout>
            <Breadcrumbs/>
            <ProductDetailsLayout/>
        </MaxLayout>
        {/* <Footer/> */}
        </>
    )
}

export default ProductDetailPage;