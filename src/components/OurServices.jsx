import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { bis } from "../ImportImage";

const OurServices = () => {
  const [loading, setLoading] = useState(true);

  const services = [
    {
      title: "BIS",
      description:
        'Ministry of Electronics & Information Technology (MeitY) has notified "Electronics and Information...',
      path: "/bis",
      image: { bis }, // Dummy image URL
    },
    {
      title: "BEE",
      description:
        "We helps our client to get BEE labeling on their products. This labeling is given by Bureau of energy...",
      path: "/service2",
      image: "../../src/assets/service/bis.png", // Dummy image URL
    },
    {
      title: "WPC",
      description:
        "Equipment Type Approval (ETA) is an approval that has to be obtained from WPC before importing...",
      path: "/service3",
      image: "https://via.placeholder.com/400x200", // Dummy image URL
    },
    {
      title: "ISI",
      description:
        "Bureau of Indian Standards (BIS) offers an ISI Marking scheme for all products...",
      path: "/service4",
      image: "https://via.placeholder.com/400x200", // Dummy image URL
    },
    {
      title: "TEC",
      description:
        "TEC refers to Telecom Engineering Centre, The Department of...",
      path: "/service5",
      image: "https://via.placeholder.com/400x200", // Dummy image URL
    },
    {
      title: "EPR",
      description:
        "We at MCS Technology Inc, are providing end to end E-waste management ..",
      path: "/service6",
      image: "https://via.placeholder.com/400x200", // Dummy image URL
    },
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[var(--main-color2)] bg-[url(../../assets/bg/asset10.svg)]">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              {loading ? (
                // Skeleton Loading for Image
                <div className="w-full h-40 bg-[var(--card-color)] animate-pulse rounded-t-lg mb-4"></div>
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                  loading="lazy"
                />
              )}

              {loading ? (
                // Skeleton Loading for Title
                <div className="h-6 bg-gray-300 animate-pulse rounded mb-2"></div>
              ) : (
                <h3 className="text-black text-xl font-extrabold mb-2">
                  {service.title}
                </h3>
              )}

              {loading ? (
                // Skeleton Loading for Description
                <>
                  <div className="h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                </>
              ) : (
                <p className="text-gray-600">
                  {service.description}
                  <Link
                    to={service.path}
                    className="text-blue-500 hover:underline ml-2"
                  >
                    Read More
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
