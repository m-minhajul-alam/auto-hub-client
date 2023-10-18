const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between items-center my-24">
            <div className="flex-1">
                <h2 className="text-2xl text-center md:text-left md:text-3xl lg:text-5xl font-bold">Discover the <span className="text-red-500">World of</span><br /><span className="text-red-500"> Automotive</span> Excellence</h2>
                <p className="text-sm font-light mt-6 text-justify md:text-left">Explore our wide range of automotive brands, from classics like Toyota and Ford to luxury icons like BMW and Mercedes-Benz. Uncover the future with innovative electric vehicles from Tesla and embrace reliability with Honda. Start your journey into the world of automobiles with us.</p>
            </div>
            <div className="flex-1">
                <img src="https://i.ibb.co/tHjyt51/luxury-cars.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;