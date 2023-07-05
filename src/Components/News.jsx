import React from 'react';

const News = (props) => {
    return (
        <>
            <div className='col-sm-2 col-md-3'>
                <div className="card">
                    <img src={props.data.urlToImage} className="card-img-top" style={{height:"170px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"70px"}}>{`${(props.data.title || "Not Found").slice(0,10)}...`}</h5>
                    <p className="card-text" style={{height :"130px"}}>{`${(props.data.description || "Not Found").slice(0,100)}...`}</p>
                    {/* {
                        console.log((props.data.description).slice(0,100))
                    } */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News