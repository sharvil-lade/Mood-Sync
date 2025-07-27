/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.error("Please Login or Sign Up");
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay navigation by 1 second
    }
  }, [user, navigate]);

  // Load entries from local storage or API on component mount
  useEffect(() => {
    const savedEntries =
      JSON.parse(localStorage.getItem("journalEntries")) || [];
    setEntries(savedEntries);
  }, []);

  const handleSave = () => {
    if (!currentEntry.trim()) {
      toast.error("Please fill the journal entry");
      return;
    }

    const newEntry = { date, content: currentEntry };
    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    setCurrentEntry("");

    // Save to local storage or API
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));

    toast.success("Journal created successfully");
  };

  const handleDelete = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    toast.error("Journal deleted successfully");
  };

  return (
    <div className="p-6 dbg-neutral-900  min-h-screen bg-purple-200">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center text-[#000000] mb-8">
        Your Personal Journal
      </h1>

      <div className=" bg-purple-200 shadow-lg md:max-w-3xl m-auto rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#000000]">
          Write Your Thoughts
        </h2>
        <textarea
          className="w-full bg-neutral-800 text-white h-36 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          placeholder="What's on your mind today?"
          value={currentEntry}
          onChange={(e) => setCurrentEntry(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleSave}
            className="bg-[#e576f1] hover:bg-[#d25fdc] text-white font-semibold px-4 py-2 rounded-md transition duration-200"
          >
            Save Entry
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl  mt-7 text-center  font-bold text-pink-500 mb-4">
          Your Journal Entries
        </h2>
        {entries.length > 0 ? (
          <div className="space-y-6 overflow-y-scroll h-96 mb-7 scroll-container">
            {entries.map((entry, index) => (
              <div
                key={index}
                className="bg-neutral-800 md:max-w-3xl m-auto shadow-lg rounded-lg p-5 border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">{entry.date}</p>
                    <p className="text-white mt-3">{entry.content}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-600 hover:underline text-sm"
                  >
                    <MdDelete size={28} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 font-semibold text-center">
            No entries yet. Start writing your first one!
          </p>
        )}
      </div>
    </div>
  );
};

export default Journal;
