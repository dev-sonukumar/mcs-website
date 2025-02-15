import { useState, useEffect } from "react";
import axios from "axios";

const apiCall = async (url, retries = 3) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt} to fetch FAQs...`);
      const response = await axios.get(url, { timeout: 10000 }); // 10s timeout
      return response.data;
    } catch (error) {
      if (attempt === retries) {
        console.error("Final request failed:", error.message);
        throw new Error("Failed to fetch FAQs. Please try again later.");
      }
      console.warn(`Retrying... (${attempt}/${retries})`);
    }
  }
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const api = "https://mcs-backend-inoc.onrender.com/bisfaqs";

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const data = await apiCall(api);
        setFaqData(data);
        setFilteredFaqs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
    );
    setFilteredFaqs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6">
          Frequently Asked Questions for BIS
        </h1>
        <p className="text-center text-gray-700 text-lg mb-6">
          Have a question? Use the search bar below or browse our FAQs.
        </p>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search FAQs..."
            className="w-full max-w-lg px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {loading ? (
            <p className="text-center text-gray-600 text-lg">Loading FAQs...</p>
          ) : error ? (
            <p className="text-center text-red-500 text-lg">{error}</p>
          ) : filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <h2 className="text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                    {item.question}
                  </h2>
                  {/* Icon Toggle */}
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

                {/* Smooth Expanding Answer Section */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 py-3 px-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No FAQs found. Try a different search term.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
