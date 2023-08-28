import React, { useState } from 'react';
import Note from './Note';

const Home = () => {

    const [note, setNote] = useState({ title: "", content: "" });
    const [newNote, setNewNote] = useState([]);
    const inputValue = (event) => {
        const { name, value } = event.target;
        setNote((previousValue) => {
            return {
                ...previousValue,
                [name]: value
            }
        });
    }

    const addNote = () => {
        setNewNote((previousValue) => {
            return (
                [...previousValue, note]
            )
        });
        setNote({ title: "", content: "" });
    }

    const deleteNote = (id) => {
        setNewNote((previousValue) => {
            return previousValue.filter((currNote, index) => {
                return id !== index;
            });
        });
        // alert('function running');
    };

    return (
        <>
            <div className=' frist_container container d-flex flex-column align-items-center justify-content-center'>
                <div className="input_box w-75 mt-4 ">
                    <div className="">
                        <div className="form-floating">
                            <input type="text" className="form-control shadow-lg" id="floatingInputGroup1" placeholder="Leave a Comment" onChange={inputValue} name='title' value={note.title} />
                            <label htmlFor="floatingInputGroup1">New Title</label>
                        </div>
                    </div>

                </div>
                <div className=' textArea w-75 mt-1'>
                    <div className="form-floating w-100">
                        <textarea className="form-control shadow-lg" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '130px' }} onChange={inputValue} name='content' value={note.content}></textarea>
                        <label htmlFor="floatingTextarea2">Write a Note...</label>
                    </div>
                    <button type="button" className="btn btn-warning rounded-circle" onClick={addNote}> <i className="fa-solid fa-plus"></i> </button>
                </div>
            </div>
            <div className='button_box'>

            </div>
            <div className='row w-100 px-3'>
                {newNote.map((value, index) => {
                    return <Note value={value.title} content={value.content} key={index} id={index} deletenote={deleteNote} />
                })}
            </div>
        </>
    )
}

export default Home;