import React from "react";
import './index.scss';


const Sellers = (props) => {
    const {itemList} = props;
    return (
        <section id="sellers">
        <div className="seller container">
        <h2>Top Sales</h2>
        <div className="best-seller">
        {itemList.map(i=>{
            return (
                <div className="best-p1">
                <img src={i.image} alt="img"/>
                <div className="best-p1-txt">
                    <div className="name-of-p">
                        <p>{i.title}</p>
                    </div>
                    <div className="rating">
                        {i.rating.rate}
                    </div>
                    <div className="price">
                        dollar:{i.price}
                        <div className="colors">
                            <i className='bx bxs-circle red'></i>
                            <i className='bx bxs-circle blue'></i>
                            <i className='bx bxs-circle white'></i>
                        </div>
                    </div>
                    <div className="buy-now">
                        <button><a href="https://codepen.io/sanketbodke/full/mdprZOq">Buy  Now</a></button>
                    </div>
                    <div className="add-cart">
                        <button>Add To Cart</button>
                        <form>
                            <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                            <input type="number" id="number" value="0" />
                            <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                        </form>
                    </div>
                </div>
            </div>
                    );
                })}
        </div>
        </div>
        </section>
    );
}

export default Sellers;