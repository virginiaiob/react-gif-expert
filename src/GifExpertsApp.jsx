 

import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


export const GifExpertsApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory=(newCategory)=> {
        
        if (categories.includes(newCategory)) return; //esto es una función. Si el if tiene sólo una línea se hace así. 
      
        setCategories([newCategory, ...categories])
        //setCategories( cat => [...cat, 'Valorant']);
    }

    return(
        <>
            {/* título */}
            <h1>GifExpertsApp</h1>

            {/* Input */}
            <AddCategory 
           
                onNewCategory = { (value) => onAddCategory(value) }
            />

            {/* Listado de Gifs */}
            {
                categories.map( ( category )=> (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
    
                ))
            }
            
    </>
    );
};