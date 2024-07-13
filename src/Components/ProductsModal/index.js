import Dialog from '@mui/material/Dialog';
import { Rating } from '@mui/material';
import Button from "@mui/material/Button";
import { useContext, useRef, useState } from 'react';
import { IoMdHeart } from "react-icons/io";
import { MdClose, MdOutlineCompareArrows } from "react-icons/md";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MyContext } from "../../App";
import Image5 from "../../Assets/cat-9(120x120).png";
import Image4 from "../../Assets/product-image-1.jpg";
import Image1 from "../../Assets/product-image-2.jpg";
import Image2 from "../../Assets/product-image-2b.jpg";
import Image3 from "../../Assets/product-image-2c.jpg";
import QuantityDrop from '../QuantityDrop';

const ProductsModal = (props) => {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext);
    const [slideIndex, setslideIndex] = useState(0);

    const goto = (index) => {
        setslideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <>
            <Dialog open={context.setIsOpenProductModal} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
                <Button className="closeButton" onClick={() => context.setIsOpenProductModal(false)}> 
                    <MdClose />
                </Button>
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
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidePerGroup={1}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}
                            >
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image1}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image2}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image3}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image4}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='item'>
                                        <InnerImageZoom
                                            zoomType="hover" zoomScale={1}
                                            src={Image5}
                                        />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            navigation={true}
                            slidePerGroup={1}
                            modules={[Navigation]}
                            className="zoomSlider"
                            ref={zoomSlider}
                        >
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                                    <img src={Image1} alt='' className='w-100' onClick={() => goto(0)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                                    <img src={Image2} alt='' className='w-100' onClick={() => goto(1)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                                    <img src={Image3} alt='' className='w-100' onClick={() => goto(2)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 3 && 'item_active'}`}>
                                    <img src={Image4} alt='' className='w-100' onClick={() => goto(3)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 4 && 'item_active'}`}>
                                    <img src={Image5} alt='' className='w-100' onClick={() => goto(4)} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='col-md-7'>
                        <div className="d-flex info align-items-center mb-3">
                            <span className="oldPrice lg mr-2">Rs 9.00</span>
                            <span className="netPrice text-danger lg">Rs 8.00</span>
                        </div>
                        <span className="badge bg-success">IN STOCK</span>
                        <p className="mt-2">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                        <div className="d-flex align-items-center">
                            <QuantityDrop />
                            <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to Cart</Button>
                        </div>
                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className="btn-round btn-sml" variant='outlined'><IoMdHeart /> &nbsp; Add To Wishlist</Button>
                            <Button className="btn-round btn-sml ml-3" variant='outlined'><MdOutlineCompareArrows /> &nbsp; Compare</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default ProductsModal;
