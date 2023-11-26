import { useState } from 'react';

function Category({ onSelect }) {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleValue = (category) => {
        setSelectedCategory(category);
        onSelect(category);
    }

    return (
        <>
            <div>
                {
                    ['Cafeteria', 'Comida Rapida', 'Gourmet', 'Pastas', 'Internacional'].map((category) => (
                        <div key={category}>
                            <span
                                key={category}
                                onClick={() => handleValue(category)}                                
                                style={{ cursor: 'pointer' }}
                            >
                                {category}
                            </span>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default Category;