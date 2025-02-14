import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Edit, PlusCircle } from "lucide-react";

const API_URL = "https://mcs-backend-zrpv.onrender.com/bisfaqs";

const BisFaqManager = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });
  const [editingFAQ, setEditingFAQ] = useState(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  // Fetch FAQs from backend
  const fetchFAQs = async () => {
    try {
      const res = await axios.get(API_URL);
      setFaqs(res.data);
    } catch (err) {
      console.error("Error fetching FAQs:", err);
    }
  };

  // Add FAQ
  const handleAddFAQ = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, newFAQ);
      setFaqs([...faqs, res.data]); // Update state immediately
      setNewFAQ({ question: "", answer: "" });
    } catch (err) {
      console.error("Error adding FAQ:", err);
    }
  };

  // Edit FAQ

  const handleEditFAQ = async (e) => {
    e.preventDefault();
    if (!editingFAQ?._id) return alert("Invalid FAQ ID!");

    try {
      const response = await axios.put(`${API_URL}/${editingFAQ._id}`, {
        question: editingFAQ.question,
        answer: editingFAQ.answer,
      });

      setFaqs(
        faqs.map((faq) => (faq._id === editingFAQ._id ? response.data : faq))
      );
      setEditingFAQ(null);
    } catch (err) {
      console.error("Error updating FAQ:", err);
    }
  };

  // Delete FAQ
  const handleDeleteFAQ = async (id) => {
    if (!id || !window.confirm("Are you sure you want to delete this FAQ?"))
      return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setFaqs(faqs.filter((faq) => faq._id !== id));
    } catch (err) {
      console.error("Error deleting FAQ:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">FAQ Manager</h2>

      {/* Add or Edit FAQ Form */}
      <form
        onSubmit={editingFAQ ? handleEditFAQ : handleAddFAQ}
        className="space-y-4 mb-6"
      >
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter question..."
          value={editingFAQ ? editingFAQ.question : newFAQ.question}
          onChange={(e) =>
            editingFAQ
              ? setEditingFAQ({ ...editingFAQ, question: e.target.value })
              : setNewFAQ({ ...newFAQ, question: e.target.value })
          }
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Enter answer..."
          value={editingFAQ ? editingFAQ.answer : newFAQ.answer}
          onChange={(e) =>
            editingFAQ
              ? setEditingFAQ({ ...editingFAQ, answer: e.target.value })
              : setNewFAQ({ ...newFAQ, answer: e.target.value })
          }
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <PlusCircle size={18} />
          {editingFAQ ? "Update FAQ" : "Add FAQ"}
        </button>
      </form>

      {/* FAQ List */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Existing FAQs</h3>
        {faqs.length === 0 ? (
          <p className="text-gray-500">No FAQs found.</p>
        ) : (
          <ul className="space-y-4">
            {faqs.map((faq) => (
              <li
                key={faq._id}
                className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{faq.question}</p>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditingFAQ(faq)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center gap-2"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteFAQ(faq._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BisFaqManager;
