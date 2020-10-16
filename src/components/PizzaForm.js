import React from 'react';

const PizzaForm = () => {
    return (
        <div >
            <h2>Build Your Own Pizza</h2>
            <form className='form-container'>
                <label>
                    <h3>Choose Your Size</h3>
                </label>
                <div id='drop-down'>
                    <select 
                        name='role'
                        >
                        <option value=''>- Choose your size -</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='x-large'>Extra Large</option>
                    </select>
                </div>

                <label id='bottom-border'>
                <h3>Choose Your Sauce</h3>
                </label>
                <div className='choices'>
                    <div>
                        <input type='radio' /> House Red
                    </div>
                    <div>
                        <input type='radio' /> Garlic Ranch
                    </div>
                    <div>
                        <input type='radio' /> Kentucky BBQ
                    </div>
                    <div>
                        <input type='radio' /> Spinach Alfredo
                    </div>
                </div>

                <label id='bottom-border'>
                <h3>Add Toppings</h3>
                </label>
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <div className='toppings'>
        <div className='section'>
        <div>Cheese
            <input 
            type='checkbox'
            name='pepperoni'
            />

        </div>

        
        <div>Pepperoni
            <input 
            type='checkbox'
            name='pepperoni'
            />

        </div>
        </div>
        <div className='section'>
        <div>Meat Lovers
            <input 
            type='checkbox'
            name='meatLovers'
            />

        </div>
        <div >
        Veggie Lovers
            <input 
            type='checkbox'
            name='veggieLovers'
            />
        </div>
        </div>
        </div>
            <label id='bottom-border'>
                <h3 >Special Instructions </h3>
                </label>
                <textarea id='instructions'
                type='text'
                />

                <button id='submit'>Make My PIZZA</button>

            </form>
        </div>
     );
}
 
export default PizzaForm;