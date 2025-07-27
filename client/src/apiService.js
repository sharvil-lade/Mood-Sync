import axios from "axios";

const submitPHQ9 = async (userId, date, responses, token) => {
  const response = await axios.post(
    "https://mental-wellness-backend.vercel.app/phq9/submit",
    { userId, date, responses },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// // Fetch PHQ-9 Result
//  const fetchPHQ9Result = async (userId, date) => {
//   const response = await fetch(`https://mental-wellness-backend.vercel.app/phq9/result?userId=${userId}&date=${date}`);
//   if (!response.ok) throw new Error("Failed to fetch PHQ-9 result.");
//   return response.json();
// };

export { submitPHQ9 };
