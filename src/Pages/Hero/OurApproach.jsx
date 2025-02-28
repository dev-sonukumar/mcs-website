import { motion } from "framer-motion";

const approachData = [
  {
    title: "Strategic Planning",
    description:
      "We analyze your business needs and create a strategy that ensures success.",
  },
  {
    title: "Innovative Development",
    description:
      "Using cutting-edge technology, we develop efficient and scalable solutions.",
  },
  {
    title: "Seamless Integration",
    description:
      "Our solutions are designed to integrate seamlessly with your existing systems.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "We continuously monitor and enhance our solutions for peak performance.",
  },
];

const OurApproach = () => {
  return (
    <section className="my-20">
      <section className="container flex gap-10 ">
        <div className="w-1/2 bdr">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-10">
              Expertise in Strategy, Design, and Development
            </h2>
            <p className="text-gray-700 text-lg mb-14 max-w-3xl mx-auto">
              To build a successful digital solution, we follow a
              well-maintained structured approach that ensures functionality,
              durability, and scalability, aligning with BIS certification
              standards.
            </p>
          </div>
        </div>

        <div className="w-1/2 bdr">
          <div className="grid md:grid-cols-2 gap-10">
            {approachData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurApproach;
