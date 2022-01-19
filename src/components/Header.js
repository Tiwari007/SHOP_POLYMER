import React, { Component } from 'react'
import { PageHeader } from 'antd';
import "./Header.css";

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom';


import BodyShop from './BodyShop';
import MenOutwear from './MenOutwear';
import MenTshirt from './MenTshirt';
import WomenOutwear from './WomenOutwear';
import WomentTshirt from './WomentTshirt';
import Cart from './Cart';



export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                
                <PageHeader
                    className="site-page-header"
                    // onBack={() => null}
                    // title="SHOP"
                     >SHOP</PageHeader>
                     

                <Router>
                
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/mens_outerwear" className="nav-link">Men's Outwear</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/ladies_outerwear" className="nav-link">Ladies Outwear</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/mens_tshirt" className="nav-link">Men's T-Shirt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/ladies_tshirt" className="nav-link">Ladies T-Shirt</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list/cart" className="nav-link">Cart</Link>
                    </li>
                </ul>

                <Routes>
                    <Route exact path='/' element={< BodyShop />}></Route>
                    <Route exact path='/list/mens_outerwear' element={< MenOutwear item="16" />}></Route>
                    <Route exact path='/list/ladies_outerwear' element={< WomenOutwear />}></Route>
                    <Route exact path='/list/mens_tshirt' element={< MenTshirt />}></Route>
                    <Route exact path='/list/ladies_tshirt' element={< WomentTshirt />}></Route>
                    <Route exact path='/list/cart' element={< Cart />}></Route>
                </Routes>

                </Router>

            </React.Fragment>
        )
    }
}

export default Header
