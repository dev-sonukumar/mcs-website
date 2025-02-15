import { useState, useEffect } from "react";

import api_bisfaqs from "@/utils/api";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqData, setFaqData] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFAQs = async () => {
      setLoading(true);
      try {
        const res = await fetch(api_bisfaqs); // Corrected fetch syntax
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json(); // Parse JSON
        console.log("API Response:", data); // Debugging output
        setFaqData(data);
        setFilteredFaqs(data);
      } catch (e) {
        console.error("Error fetching FAQs:", e);
        setError("Failed to fetch FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  // Debounced search function
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredFaqs(faqData);
      } else {
        const query = searchQuery.toLowerCase();
        const filtered = faqData.filter(
          (faq) =>
            faq.question.toLowerCase().includes(query) ||
            faq.answer.toLowerCase().includes(query)
        );
        setFilteredFaqs(filtered);
      }
    }, 300); // 300ms delay for better UX

    return () => clearTimeout(delaySearch);
  }, [searchQuery, faqData]);

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
            onChange={(e) => setSearchQuery(e.target.value)}
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
            filteredFaqs.map((faq, index) => (
              <div
                key={faq._id || index} // Use _id if available
                className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  aria-expanded={activeIndex === index}
                  role="button"
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                >
                  <h2 className="text-md sm:text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
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
                    {faq.answer}
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
