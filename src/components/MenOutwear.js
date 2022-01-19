import React, { Component } from 'react'
import CartIconMO from './images/mens_outerwear.jpg'


export class MenOutwear extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img src={CartIconMO} />
                </div>
                <h6 className="pt-4 pb-2">Men's Outerwear</h6>
                <p>{}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-3">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO1.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-md-4 col-sm-3">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO2.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-md-4 col-sm-3">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO3.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-md-4 col-sm-3">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO4.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-md-4 col-sm-3">
                            <img src={`${process.env.PUBLIC_URL}/assets/MO5.jpg`}></img>
                            <p>Men's Tech Shell full zip</p>
                            <p>$50.55</p>
                        </div>
                        <div className="col-md-4 col-sm-3">
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

export default MenOutwear


