import { bee, bg, bis, epr, isi, tec, wpc } from "../utils/ImgUtils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "BIS",
    description:
      'Ministry of Electronics & Information Technology (MeitY) has notified "Electronics and Information...',
    path: "/bis",
    image: bis,
    icon: <ChevronRight />,
  },
  {
    title: "BEE",
    description:
      "We help our clients get BEE labeling on their products. This labeling is given by Bureau of energy...",
    path: "/service2",
    image: bee,
    icon: <ChevronRight />,
  },
  {
    title: "WPC",
    description:
      "Equipment Type Approval (ETA) is an approval that has to be obtained from WPC before importing...",
    path: "/service3",
    image: wpc,
    icon: <ChevronRight />,
  },
  {
    title: "ISI",
    description:
      "Bureau of Indian Standards (BIS) offers an ISI Marking scheme for all products...",
    path: "/service4",
    image: isi,
    icon: <ChevronRight />,
  },
  {
    title: "TEC",
    description:
      "TEC refers to Telecom Engineering Centre, The Department of...",
    path: "/service5",
    image: tec,
    icon: <ChevronRight />,
  },
  {
    title: "EPR",
    description:
      "We at MCS Technology Inc, are providing end-to-end E-waste management...",
    path: "/service6",
    image: epr,
    icon: <ChevronRight />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const OurServices = () => {
  return (
    <div
      className="bg-no-repeat bg-cover lg:px-5 py-10 pb-20 "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circIn" }}
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-10 text-center text-[var(--gray-color4)]"
        >
          Our Services
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4   gap-5 "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white bg-opacity-80 backdrop-blur-md hover:shadow-2xl transition-all p-2 md:p-3 rounded-2xl shadow-md cursor-pointer "
            >
              <Link to={service.path}>
                <div className=" rounded-lg flex justify-center items-center overflow-hidden mb-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="flex gap-3 justify-center items-center text-black text-sm sm:text-lg lg:text-xl font-bold ">
                  {service.title}
                  {service.icon}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
