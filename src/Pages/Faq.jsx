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
        setLoading(false); // ✅ Stop loading after successful fetch
      })
      .catch(() => {
        setError("Failed to load FAQs"); // ✅ Proper error handling
        setLoading(false); // ✅ Stop loading even if there’s an error
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  console.log(faqData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {loading ? (
            <p className="text-center text-gray-600">Loading FAQs...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : faqData.length > 0 ? (
            faqData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.question}
                    </h2>
                    <svg
                      className={`w-6 h-6 text-gray-600 transform transition-transform duration-200 ${
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
                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No FAQs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
