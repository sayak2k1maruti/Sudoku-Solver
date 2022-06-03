import React from 'react'
import policy from "../Data/policy.js"


const PrivacyPolicy = () => {
    return (
        <>
            <h1 className='text-4xl font-bold m-2 p-4 text-center'>Privacy Policy</h1>
            <hr />
            <div className='w-full p-4'>
                {
                    policy.map((item, key) => (
                        <p className='p-2 mb-10' key={key}>
                            <h1 className='font-bold text-2xl'>{item.title}</h1>
                            <p className='text-lg'>{item.description}</p>
                        </p>
                    ))
                }
                <p>

                </p>
            </div>
        </>
    )
}

export default PrivacyPolicy