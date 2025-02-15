import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import api_bisfaqs from "@/utils/api";

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFAQs = async () => {
      setLoading(true);
      try {
        const res = await fetch(api_bisfaqs);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setFaqData(data);
        setFilteredFaqs(data);
      } catch (e) {
        setError("Failed to fetch FAQs");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredFaqs(faqData);
      } else {
        const query = searchQuery.toLowerCase();
        setFilteredFaqs(
          faqData.filter(
            (faq) =>
              faq.question.toLowerCase().includes(query) ||
              faq.answer.toLowerCase().includes(query)
          )
        );
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchQuery, faqData]);

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-foreground mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-6">
          Have a question? Search below or browse our FAQs.
        </p>

        <div className="mb-8 flex justify-center">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full max-w-lg"
          />
        </div>

        {loading ? (
          <p className="text-center text-muted-foreground text-lg">
            Loading FAQs...
          </p>
        ) : error ? (
          <p className="text-center text-destructive text-lg">{error}</p>
        ) : filteredFaqs.length > 0 ? (
          <Accordion type="single" collapsible>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={faq._id || index} value={String(index)}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <Card>
                    <CardContent className="p-4 text-foreground text-md sm:text-lg leading-relaxed">
                      {faq.answer}
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            No FAQs found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
};

export default Faq;
