import Dialog from '@mui/material/Dialog';
import Slider from 'react-slick';
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import { Rating } from '@mui/material';
import Image1 from "../../Assets/product-image-2.jpg";
import { useContext, useRef } from 'react';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Image2 from "../../Assets/product-image-2b.jpg";
import Image3 from "../../Assets/product-image-2c.jpg";
import QuantityDrop from '../QuantityDrop';
import { IoMdHeart } from "react-icons/io";
import {MdOutlineCompareArrows} from "react-icons/md";
import {MyContext} from "../../App";





const ProductsModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext);


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    const goto = (index) =>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }
    return (
        <>
            <Dialog open={true} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
                <Button className="closeButton" onClick={() => context.setIsOpenProductModal(false)}> <MdClose /></Button>
                <h4 className="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands:</span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>

                    <Rating name="read-only" value={5} size="small" readOnly />

                </div>
                <hr />

                <div className='row mt-2 productDetailModal'>
                    <div className='col-md-5'>
                        <div className='productZoom position-relative'>
                            <div className="badge badge-primary">23%</div>
                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={Image1}
                                    />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={Image2}
                                    />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={Image3}
                                    />
                                </div>
                            </Slider>
                        </div>


                        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                            <div className='item'>
                                <img src={Image1} alt='' className='w-100' onClick={() => goto(0)}/>
                            </div>
                            <div className='item'>
                                <img src={Image2} alt='' className='w-100' onClick={() => goto(1)}/>
                            </div>
                            <div className='item'>
                                <img src={Image3} alt='' className='w-100' onClick={() => goto(2)}/>
                            </div>
                            </Slider>
                    </div>
                    <div className='col-md-7'>
                        <div className="d-flex align-items-center mb-3">
                            <span className='oldPrice lg mr-2'>Rs 9.00</span>
                            <span className='netPrice lg text-danger'>Rs 8.00</span>
                        </div>
                        <span className="badge bg-success">IN STOCk</span>
                        <p className="mt-2">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                        
                        <div className="d-flex align-items-center">
                            <QuantityDrop/>
                            <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to Cart</Button>
                        </div>

                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className="btn-round btn-sml" variant='outlined'><IoMdHeart/> &nbsp; Add To Wishlist</Button>
                            <Button className="btn-round btn-sml ml-3" variant='outlined'><MdOutlineCompareArrows/> &nbsp; Compare</Button>
                        </div>
                    </div>
                </div>
            </Dialog >
        </>
    )
}

export default ProductsModal;