import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Collection from "../components/Collection";

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="mt-2 mb-16">
                <h2 className="text-3xl font-bold text-center  mb-7">Populer <span className="text-red-600">Brands</span></h2>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        brands.map(brand => <div key={brand.id} className="rounded-2xl border-2 border-gray-400 hover:border-red-600 p-2">
                            <Link to={`/products/${brand.id}`}>
                                <img className="mx-auto p-4" src={brand.logo} alt="" />
                                <h4 className="text-xl font-light text-center ">{brand.name}</h4>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
            <Collection></Collection>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;