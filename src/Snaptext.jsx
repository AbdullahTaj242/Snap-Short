import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Snaptext() {
    const [inpValue, setInpValue] = useState('');
    const [divBackgroundColor, setBackgroundColor] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setInpValue(newValue);

        if (newValue.trim() !== '') {
            setBackgroundColor('#051C33');
        } else {
            setBackgroundColor('');
        }
    };

    const isInputNotEmpty = inpValue.trim() !== '';
    const iconStyle = {
        color: isInputNotEmpty ? 'white' : '#051C33',
        opacity: isInputNotEmpty ? 1 : 0.1,
        width: '28px',
        height: '28px',
    };

    return (
        <>
            <div className='border-2 border-black '>
                <h1 className='text-7xl text-center pt-[140px] '>
                    SnapShot
                </h1>
                <div className='flex justify-center items-center pt-12 '>
                    <input
                        onChange={handleChange}
                        className='w-96 h-12 rounded-[10px] text-black bg-[#EDEFF0] border-r-0 px-[20px] text-lg border-2'
                        type="search"
                        placeholder='Search...'
                    />
                    <div
                        style={{ backgroundColor: divBackgroundColor }}
                        className='w-14 h-12 rounded-[10px] border-2 border-l-0 flex justify-center items-center'
                    >
                        <AiOutlineSearch style={iconStyle} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Snaptext;