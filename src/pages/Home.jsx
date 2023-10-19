import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="mt-2 mb-16">
                <h2 className="text-3xl font-bold text-center  mb-7">Populer <span className="text-red-600">Brands</span></h2>
                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
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
            <AboutUs></AboutUs>

          
                <div className="container mx-auto flex flex-col items-center py-12">
                    <div className="w-full lg:w-1/2 px-4 text-center">
                        <h2 className="text-3xl font-bold text-center mb-5">Contact <span className="text-red-600">Information</span></h2>
                        <p className="text-lg">We are here to assist you. Contact us for any questions or inquiries.</p>
                        <p className=" mb-4">Feel free to reach out to us via email or phone. We are available to assist you.</p>
                        <p>support@autohub.com</p>
                        <p>(123) 456-7890</p>
                        <p>1234 Elm Street, City, Country</p>
                    </div>
                </div>
         

        </div>
    );
};

export default Home;