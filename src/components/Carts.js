import React from 'react'
import './Carts.css'
import sofa_1 from '../assets/sofa-1.jpg'
import sofa_2 from '../assets/sofa-2.jpg'
import sofa_3 from '../assets/sofa-3.jpg'

export default function Carts() {
    return (
        <div className='container'>
            <div className="cart">
                <div className="name">Sofa -1</div>
                <div className="discount">25%</div>
                <img src={sofa_1} alt='sofa-1' />
                <div className="price-section">
                    <div className="price">
                        <div className="now">$1245</div>
                        <div className="main">($1525)</div>
                    </div>
                    <button>View</button>
                </div>
            </div>
            <div className="cart">
                <div className="name">Sofa -2</div>
                <div className="discount">25%</div>
                <img src={sofa_2} alt='sofa-1' />
                <div className="price-section">
                    <div className="price">
                        <div className="now">$1245</div>
                        <div className="main">($1525)</div>
                    </div>
                    <button>View</button>
                </div>
            </div>
            <div className="cart">
                <div className="name">Sofa -3</div>
                <div className="discount">25%</div>
                <img src={sofa_3} alt='sofa-1' />
                <div className="price-section">
                    <div className="price">
                        <div className="now">$1245</div>
                        <div className="main">($1525)</div>
                    </div>
                    <button>View</button>
                </div>
            </div>
        </div>
    )
}
