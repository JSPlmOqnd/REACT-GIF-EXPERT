// import React from 'react' // Anulamos esta linea por react ya se import de forma global en vite.config.js

import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    // console.log(categories)

    return (
        <>
        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={ (value) => onAddCategory(value)}
        />
        
        {
            categories.map((category) => (
            <GifGrid
                key={category}
                category= {category} />
            )
        )}
        </>
    )
}
