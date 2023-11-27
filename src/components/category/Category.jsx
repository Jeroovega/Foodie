import { useState } from 'react';
import './Category.css';

function Category({ onSelect }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [marginTop, setMarginTop] = useState(false);

    const handleValue = (category) => {
        setSelectedCategory(category);
        onSelect(category);
        setMarginTop(true);
    }

    return (
        <>
            <div className={`flex flex-col w-[100vw] items-center ${marginTop ? 'mt-[32rem]' : ''} flex-wrap`}>
                <h1 className='flex mb-10 text-2xl font-bold text-[#000]'>Categorías</h1>
                <div className='flex flex-wrap gap-10'>
                    {
                        ['Cafeteria', 'Comida Rapida', 'Gourmet', 'Pastas'].map((category) => (
                            <div class={`max-w-sm rounded-lg w-96 overflow-hidden shadow-lg bg-slate-200 background-${category}`}>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl  mb-2 text-[#fff]">{category}</div>

                                    <button onClick={() => handleValue(category)} className={` w-full mt-8 text-black border-none bg-[#f0b973b0] rounded-md cursor-pointer btn  hover:text-white ${selectedCategory === category ? 'bg-black text-white' : ''}`}>
                                        Ver restaurantes
                                    </button>
                                </div>
                            </div>

                        ))
                    }
                </div>


            </div>
        </>
    )
};

export default Category;