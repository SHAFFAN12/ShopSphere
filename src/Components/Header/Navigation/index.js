import { Button } from '@mui/material';
import { IoMenu } from "react-icons/io5";
import {FaAngleDown} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <Button className="CategoryTab align-items-center">
                            <span className='icon1 mr-2'><IoMenu/></span>
                            <span className="text">All categories</span>
                            <span className='icon2 ml-2'><FaAngleDown/></span>
                        </Button>
                    </div>
                <div className='col-sm-10 navPart2 d-flex align-items-center'>
                    <ul className="list list-inline ml-auto">
                        <li className="list-inline-item"><Link to='/'><Button>Home</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Fashion</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Electronic</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Grocery</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Mobiles</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Bakery</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Blog</Button></Link></li>
                        <li className="list-inline-item"><Link to='/'><Button>Contact Us</Button></Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    )
};
export default Navigation;