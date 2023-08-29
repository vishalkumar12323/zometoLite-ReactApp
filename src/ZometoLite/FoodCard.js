import { useState } from "react";
import Food from "./Food";
import FoodCenter from "./FoodCenter";
import ButtonGroup from "./ButtonGroup";

const uniqueFoodList = ['All', ...new Set(Food.map((foodCategory) => {
    return foodCategory.category;
}))];

const FoodCard = () => {
    const [newCard, setNewCard] = useState(Food);
    const [foodCategory, setFoodCategory] = useState(uniqueFoodList);

    const food_Filter = (category) => {

        if (category === "All") {
            return setNewCard(Food);

        }
        const uniqueFoodList = Food.filter((categoryFood) => {
            return categoryFood.category === category;
        });
        setNewCard(uniqueFoodList);
    }

    return (
        <>

            <div className="row">
                <ButtonGroup foodFilter={food_Filter} foodcategory={foodCategory} />
            </div>
            <div className="row">
                {
                    newCard.map((currCard) => {
                        const { id, name, category, image, price, discription } = currCard;
                        return <FoodCenter key={id} id={id} foodName={name} image={image} discription={discription} price={price} category={category} />
                    })
                }
            </div>
        </>
    )
}

export default FoodCard;