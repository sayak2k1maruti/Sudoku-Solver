import React from 'react'

const Button = ({ text, onClick, disabled }) => {
    return (
        <button className='text-xl mx-[50px] bg-neutral-100 hover:bg-neutral-200 py-2 px-4 border-black border w-[100px] disabled:bg-neutral-600' disabled={disabled} onClick={onClick} >
            {text}
        </button>
    )
}

export default Button