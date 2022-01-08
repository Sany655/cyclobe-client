import React from 'react'

const Banner = () => {
    return (
        <div id="banner" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.sefiles.net/merchant/4672/images/site/Firebirdbanner2022-slimC.jpg?t=1628614961252" className="banner d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block" style={{ background: '#0000001c' }}>
                        <h1>CYCLOBE</h1>
                        <q>When in doubt, Pedal it out</q>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.sefiles.net/merchant/2788/images/site/trek_mtn1100txl_13_h.jpg" className="banner d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cyclepriceinbd.com/wp-content/uploads/2020/12/cover-pic.jpg" className="banner d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Life is like riding a bicycle. To keep your balance you must keep moving</h1>
                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Banner
