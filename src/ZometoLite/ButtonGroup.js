import React from 'react';

const ButtonGroup = (props) => {
    return (
        <>
            <div className="button_group">
                <div className="shadow-sm d-flex justify-content-center w-fit-content m-5 gap-2">
                    {
                        props.foodcategory.map((currElem) => {
                            return (
                                <>
                                    <button className="btn btn-outline-info" onClick={() => props.foodFilter(currElem)} >{currElem}</button>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ButtonGroup;