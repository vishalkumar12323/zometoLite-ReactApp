import React from 'react';
import './FoodCenter.css';

const FoodCenter = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="food_card shadow-lg mx-1 ">
                    <div className="food_img shadow-sm mb-1">
                        <img src={props.image} alt="samosha" />
                    </div>
                    <div className="food_body">
                        <span className="food_card_number rounded-circle"> {props.id}</span>
                        <h4 className="food_name"> {props.foodName} </h4>
                        <p className="food_discription"> {props.discription} </p>
                        <button className="btn btn-info">Order Now</button>
                        <span className="food_price"> {props.price} </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoodCenter;