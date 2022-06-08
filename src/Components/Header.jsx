import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-full'>
            <div className='w-full flex  align-center items-center justify-center p-3'>
                <h1 className='flex text-3xl font-bold'>
                    <Link to='/Sudoku-Solver'>Soduku Solver</Link>
                </h1>
            </div>
        </header>
    )
}

export default Header