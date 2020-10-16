import React from 'react'; 


const Pizza = (props) => {
    const {pizza}= props
    return (<div>
        <h2> You order is on the way!!!!</h2>
        <h4>Order Details</h4>
        <ul>
            <li>{pizza.size}</li>
            <li>{pizza.sauce}</li>
            <li>{pizza.topping}</li>
            <li>{pizza.instructions}</li>
        </ul>


    </div>  );
}
 
export default Pizza;