import React from 'react'

const Note = (props) => {
    return (
        <>
            <div className='notes shadow-lg d-flex justify-content-start align-items-start flex-column mt-5'>
                <div className='title'>
                    <p className=''> {props.value} </p>
                </div>
                <div className='content'>
                    <p className=''> {props.content} </p>
                </div>

                <div className='deleteButton'><button className='btn btn-warning rounded-circle' onClick={() => props.deletenote(props.id)}><i className="fa-solid fa-multiply"></i></button> </div>
            </div>
        </>
    )
}

export default Note;