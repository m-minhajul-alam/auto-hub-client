const Slider = () => {
    return (
        <div className="carousel w-full mt-8 mb-6 md:mb-14">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative w-fit mx-auto">
                    <img src="https://i.ibb.co/qnnw0NN/Rolls-Royce-2.png" className="p-12 max-h-96 my-auto" />
                    <img className="absolute left-0 top-0 w-20 md:w-32" src="https://i.ibb.co/c8LHbTG/spesial-offer-2.png" alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <div className="relative w-fit mx-auto">
                    <img src="https://i.ibb.co/bH2kdbh/Toyota-4.png" className="p-12 max-h-96 my-auto" />
                    <img className="absolute left-0 top-0 w-20 md:w-32" src="https://i.ibb.co/c8LHbTG/spesial-offer-2.png" alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className="relative w-fit mx-auto">
                    <img src="https://i.ibb.co/1zkd7Ms/Mercedes-Benz-4.png" className="p-10 max-h-96 my-auto" />
                    <img className="absolute left-0 top-0 w-20 md:w-32" src="https://i.ibb.co/c8LHbTG/spesial-offer-2.png" alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className="relative w-fit mx-auto">
                    <img src="https://i.ibb.co/4RWD5pf/Honda-3.png" className="p-10 max-h-96 my-auto" />
                    <img className="absolute left-0 top-0 w-20 md:w-32" src="https://i.ibb.co/c8LHbTG/spesial-offer-2.png" alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <div className="relative w-fit mx-auto">
                    <img src="https://i.ibb.co/Ybmp4Tg/Mercedes-Benz-3.png" className="p-10 max-h-96 my-auto" />
                    <img className="absolute left-0 top-0 w-20 md:w-32" src="https://i.ibb.co/c8LHbTG/spesial-offer-2.png" alt="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;