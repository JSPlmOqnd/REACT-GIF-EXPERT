import { useState } from 'react'


// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit}>
        <input
            id='entrada'
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange }
        />
        </form>

    )
}
