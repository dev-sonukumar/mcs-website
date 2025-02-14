import { useState, useEffect } from "react";
import axios from "axios";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const api = "https://mcs-backend-zrpv.onrender.com/bisfaqs";

  useEffect(() => {
    axios
      .get(api)
      .then(({ data }) => {
        setFaqData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load FAQs");
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10">
          Frequently Asked Questions for BIS
        </h1>
        <p className="text-center text-gray-700 text-lg mb-8">
          Have a question? Check out our most commonly asked questions below.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {loading ? (
            <p className="text-center text-gray-600 text-lg">Loading FAQs...</p>
          ) : error ? (
            <p className="text-center text-red-500 text-lg">{error}</p>
          ) : faqData.length > 0 ? (
            faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <h2 className="text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                    {item.question}
                  </h2>
                  {/* Icon Fix for Mobile */}
                  <div className="flex items-center justify-center p-2">
                    <svg
                      className={`w-6 h-6 sm:w-7 sm:h-7 text-gray-600 transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {/* Answer Section */}
                {activeIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No FAQs available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
