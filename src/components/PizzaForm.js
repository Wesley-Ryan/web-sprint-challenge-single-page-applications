import React, {useState} from 'react';
import Pizza from './Pizza'

const initialValues= { 
    size: '', 
    sauce: '',
    pepperoni:false, 
    cheese: false, 
    meatLovers: false,
    veggieLovers: false,
    instructions:""
}

let ordered = false

const PizzaForm = () => {
    const [formValues,setFormValues]=useState(initialValues)
    const [pizza, setPizza]=useState()


    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({
            ...formValues,
            [name]: valueToUse
          })
      }

      const onSubmit = (event) => { 
          event.preventDefault()
          setPizza(formValues)
          ordered=true
          
      }

      if (ordered) {
        return <Pizza pizza={pizza} />

    } else {
        return (
        <div >
            <h2>Build Your Own Pizza</h2>

          

            <form className='form-container' onSubmit={onSubmit}>
                <label>
                    <h3>Choose Your Size</h3>
                </label>
                <div id='drop-down'>
                    <select 
                        name='size'
                        value={formValues.size}
                        onChange={onChange}
                        >
                        <option value=''>- Choose your size -</option>
                        <option value='Small' 
                        
                        >
                            Small
                        </option>
                        <option value='Medium'
                       
                        >
                            Medium
                        </option>
                        <option value='Large'
                        
                        >
                            Large
                        </option>
                        <option value='X-Large'

                        >
                            Extra Large
                        </option>
                    </select>
                </div>

                <label id='bottom-border'>
                    <h3>Choose Your Sauce</h3>
                </label>
                <div className='choices'>
                    <div>
                        <input type='radio' 
                        name='sauce'
                        value='House Red'
                        checked={formValues.sauce === 'House Red'}
                        onChange={onChange}
                        /> House Red
                    </div>
                    <div>
                        <input type='radio'
                        name='sauce'
                        value="Garlic Ranch"
                        checked={formValues.sauce === 'Garlic Ranch'}
                        onChange={onChange} 
                        /> Garlic Ranch
                    </div>
                    <div>
                        <input type='radio'
                        name='sauce'
                        value="Kentucky BBQ"
                        checked={formValues.sauce === 'Kentucky BBQ'}
                        onChange={onChange} 
                        /> Kentucky BBQ
                    </div>
                    <div>
                        <input type='radio'
                        name='sauce'
                        value="Spinach Alfredo"
                        checked={formValues.sauce === 'Spinach Alfredo'}
                        onChange={onChange} 
                        /> Spinach Alfredo
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
            name="cheese"
            checked={formValues.cheese}
            onChange={onChange}
            />

        </div>
        <div>Pepperoni
            <input 
            type='checkbox'
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={onChange}
            />
            </div>
        </div>
        <div className='section'>
            <div>Meat Lovers
            <input 
            type='checkbox'
            name='meatLovers'
            checked={formValues.meatLovers}
            onChange={onChange}
            />

            </div>
            <div >Veggie Lovers
            <input 
            type='checkbox'
            name='veggieLovers'
            checked={formValues.veggieLovers}
            onChange={onChange}
            />
            </div>
        </div>
        </div>
            <label id='bottom-border'>
                <h3 >Special Instructions </h3>
                </label>
                <textarea id='instructions'
                type='text'
                name='instructions'
                value={formValues.instructions}
                onChange={onChange}
                />

                <button id='submit'>Make My PIZZA</button>

            </form>
        </div>
     )
}
}

 
export default PizzaForm;