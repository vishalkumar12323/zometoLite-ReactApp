import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className='bg-dark footer text-white px-4 d-flex justify-content-between align-items-center'>
                <p className='my-auto py-2'> CopyRight &copy; {year} </p>
                <p className='my-auto py-2'>Made By <b className='text-warning'>Vishal Kumar</b></p>
            </div>
        </>
    )
}

export default Footer