const Collection = () => {
    return (
        <div className="py-10 container mx-auto text-center">
            <h2 className="text-3xl font-bold text-center  mb-7">Populer <span className="text-red-600">Collections</span></h2>
            <div className="flex flex-wrap justify-center mt-6">
                <div className="m-4">
                    <img src="https://i.ibb.co/58cW3xT/Mercedes-Benz-1.png" alt="" className="rounded-lg shadow-md w-64 h-64 object-cover" />
                    <p className="mt-2 text-gray-400 text-lg">Mercedes-Benz</p>
                </div>

                <div className="m-4">
                    <img src="https://i.ibb.co/6vmfNp0/Tesla-2.png" alt="" className="rounded-lg shadow-md w-64 h-64 object-cover" />
                    <p className="mt-2 text-gray-400 text-lg">Tesla</p>
                </div>

                <div className="m-4">
                    <img src="https://i.ibb.co/FYhVx8D/Honda-1.png" alt="" className="rounded-lg shadow-md w-64 h-64 object-cover" />
                    <p className="mt-2 text-gray-400 text-lg">Honda</p>
                </div>

                <div className="m-4">
                    <img src="https://i.ibb.co/XZSBSSN/Rolls-Royce-4.png" alt="" className="rounded-lg shadow-md w-64 h-64 object-cover" />
                    <p className="mt-2 text-gray-400 text-lg">Rolls-Royce</p>
                </div>

                <div className="m-4">
                    <img src="https://i.ibb.co/9g2BV59/BMW-4.png" alt="" className="rounded-lg shadow-md w-64 h-64 object-cover" />
                    <p className="mt-2 text-gray-400 text-lg">BMW</p>
                </div>

                <div className="m-4">
                    <img src="https://i.ibb.co/JyVGWvf/Rolls-Royce-3.png" alt="" className="rounded-lg shadow-md w-64 h-64 object-cover" />
                    <p className="mt-2 text-gray-400 text-lg">Rolls-Royce</p>
                </div>
            </div>
        </div>
    );
};

export default Collection;