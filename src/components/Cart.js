import React from 'react'

function Cart() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`${process.env.PUBLIC_URL}/assets/MO1.jpg`} />
                </div>

                <div className="detail col-6" has-content="">
                    <h1>Men's Tech Shell Full-Zip</h1>
                    <div className="price">$50.20</div>
                    <div className="pickers">
                        <shop-select>
                            <label id="sizeLabel" prefix="">Size</label>
                            <select id="sizeSelect" aria-labelledby="sizeLabel">
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M" selected="">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                            <br />
                            <shop-md-decorator aria-hidden="true">
                            <shop-underline></shop-underline>
                            </shop-md-decorator>
                        </shop-select>
                        <shop-select>
                            <label id="quantityLabel" prefix="">Quantity</label>
                            <select id="quantitySelect" aria-labelledby="quantityLabel">
                                <option value="1" selected="">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <shop-md-decorator aria-hidden="true">
                            <shop-underline></shop-underline>
                            </shop-md-decorator>
                        </shop-select>
                    </div>
                    <div className="description">
                        <h2>Description</h2>
                        <p id="desc">A versatile full-zip that you can wear all day long and even to the gym. This technical shell features moisture-wicking fabric, added stretch and a hidden pocket for your smartphone or media player.&nbsp;
                        <div>Features:</div>
                        <div>
                            <ul>
                                <li>100% polyester.</li>
                                <li>Smooth, technical front with textured mesh back.</li>
                                <li>Drawstring bottom for adjustable fit.</li>
                                <li>Raglan sleeves.</li>
                                <li>Available in forest green with the white Google logo embroidered at left chest.</li>
                            </ul>
                        </div>
                        </p>
                    </div>
                    <shop-button responsive="">
                        <button aria-label="Add this item to cart">Add to Cart</button>
                    </shop-button>
                </div> 
                {/* end of second col division */}

            </div>
            {/* end of row division */}
            
        </div>
    )
}

export default Cart
