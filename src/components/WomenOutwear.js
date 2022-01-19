import React, { Component } from 'react'
import CartIconMT from './images/ladies_outerwear.jpg'

export class WomenOutwear extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img src={CartIconMT} />
                </div>
                <h3>Women's Outerwear</h3>
                <p>{}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO1.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO2.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO3.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO4.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO5.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-4">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO6.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WomenOutwear
