import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [loading, setLoading] = useState(true);

  const services = [
    {
      title: "BIS",
      description:
        'Ministry of Electronics & Information Technology (MeitY) has notified "Electronics and Information...',
      path: "/bis",
      image: "/path/to/image1.jpg",
    },
    {
      title: "BEE",
      description:
        "We helps our client to get BEE labeling on their products. This labeling is given by Bureau of energy...",
      path: "/service2",
      image: "/path/to/image2.jpg",
    },
    {
      title: "WPC",
      description:
        "Equipment Type Approval (ETA) is an approval that has to be obtained from WPC before importing...",
      path: "/service3",
      image: "/path/to/image3.jpg",
    },
    {
      title: "ISI",
      description:
        "Bureau of Indian Standards (BIS) offers an ISI Marking scheme for all products...",
      path: "/service4",
      image: "/path/to/image4.jpg",
    },
    {
      title: "TEC",
      description:
        "TEC refers to Telecom Engineering Centre, The Department of...",
      path: "/service5",
      image: "/path/to/image5.jpg",
    },
    {
      title: "EPR",
      description:
        "We at MCS Technology Inc, are providing end to end E-waste management ..",
      path: "/service6",
      image: "/path/to/image6.jpg",
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
    <div className="bg-[var(--bgcolor2)]">
      <div className="container mx-auto px-4 py-8 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md ">
              {loading ? (
                <div className="w-full h-40 bg-gray-300 animate-pulse rounded-t-lg mb-4"></div>
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                  loading="lazy"
                />
              )}
              <h3 className="text-black text-xl font-extrabold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
                <Link
                  to={service.path}
                  className="text-blue-500 hover:underline ml-2"
                >
                  Read More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
