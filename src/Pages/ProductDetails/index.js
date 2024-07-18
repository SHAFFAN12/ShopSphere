import ProductZoom from '../../Components/ProductZoom';
import QuantityDrop from '../../Components/QuantityDrop';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";

const ProductDetails = () => {
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light">Brands: </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className="d-flex align-items-center">
                                    <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly/>
                                    <span className="text-light cursor ml-2">1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info mb-3">
                            <span className="oldPrice ">Rs 9.00</span>
                            <span className="netPrice text-danger ml-2">Rs 8.00</span>
                        </div>
                        <span className="badge badge-success">IN STOCK</span>
                        <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                        <div className="d-flex align-items-center mt-">
                            <QuantityDrop/>
                            <Button className="btn-blue btn-lg btn-big btn-round"><BsCartFill/> &nbps; Add to Cart</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;

