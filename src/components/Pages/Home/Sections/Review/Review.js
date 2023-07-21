import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from '../../../../Shared/Loading/Loading';
import Ratings from 'react-rating';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Review = () => {
    const [review, setReview] = useState([])
    const [loading, setLoading] = useState(true)
    const [exists, setexists] = useState(true)
    useEffect(() => {
        axios(`/review`).then(res => {
            setReview(res.data);
        }).finally(() => {
            setLoading(false)
            setexists(review?true:false)
        })
    }, [])

    return (
        <div className='container p-5 pt-0 border my-3 bg-primary' id='review'>
            <h1 className="text-center m-4 text-white">Client Talks</h1>
            {
                exists & loading ? <Loading /> : (
                    <Carousel responsive={responsive} centerMode={false}>
                        {review.map((revew) => (
                            <div className="card" style={{ width: '95%' }} key={revew._id}>
                                <div className="card-body">
                                    <h4>{revew.user.name}</h4>
                                    <p className="card-title">
                                        Ratings : <Ratings initialRating={revew.ratings} readonly={true} emptySymbol={<i className="far fa-star"></i>} fullSymbol={<i className="fas fa-star text-warning"></i>}/>
                                    </p>
                                    <p className="card-text">{revew.review}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )
            }
        </div>
    )
}

export default Review
