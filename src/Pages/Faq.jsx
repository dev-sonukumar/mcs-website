import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "The Compulsory Registration order will be effective based on manufacturing date or import date?",
      answer:
        "The date of manufacturing for domestically produced goods and date of landing of consignments in India for goods manufactured overseas would apply for consideration against deadlines notified.",
    },
    {
      question:
        "What would be the status of goods already in stock and in the market?",
      answer:
        "The products manufactured / imported before the due date of coming into effect of Order are not covered under the ambit of the Order.",
    },
    {
      question:
        "What will happen to goods ordered and expected to come on or after the due date (on account of deferment of shipments) or in transit?",
      answer:
        "The goods landing at Indian ports on or after the due date must comply with the requirements of Order.",
    },
    {
      question:
        "Who is eligible to get Unique Registration Number – the manufacturer or importer?",
      answer:
        "The manufacturer is eligible to apply and get unique registration number which is linked to manufacturer, location of factory, product and brand.",
    },
    {
      question: "What is the validity of test report?",
      answer:
        "As per BIS Rules, the test report shall not be older than ninety days as on the date of submission of application online as well as physical application for registration.",
    },
    {
      question: "Standard Mark will be on the product or packaging?",
      answer:
        "The Standard Mark shall be placed on the product & the packaging both however, if it is not feasible to place the same on the product for size constraints, it can be put on the packaging only. For the products with display screen, provisions of e-labelling of products also exist.",
    },
    {
      question:
        "If manufacturer is manufacturing under multiple brands, is registration required for each brand?",
      answer:
        "Different brands are required to be registered separately. However, it is feasible to do so based on a common test report, if the product and the manufacturing location are the same, All brands with respective model numbers should be listed in the test report. Test samples of all brands are not required to be submitted. However, product labels for respective brands must be placed in the test report. Lab may also include statement about coverage of this brand and respective model numbers to be covered based on the representative model tested and the declaration submitted by the manufacturer about multiple brands and respective model numbers.",
    },
    {
      question:
        "If product is certified at one manufacturing location, is it necessary that registration for that same product manufactured at other locations is done again?",
      answer:
        "The unique registration number provided by BIS is for unique manufacturing location. Hence, separate application has to be made for each location and supported with a test report for product from that manufacturing location.",
    },
    {
      question:
        "Once the product is registered as imported, would the repeat order of same product need to again register?",
      answer:
        "There is no requirement for re-registration for the same product. Registration once granted, is valid for two years. Original Registration could be revalidated, on request, as per provisions of the scheme.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
