# MoodSync: Your Personal Mental Wellness Companion

MoodSync is a comprehensive mental wellness web application designed to empower you on your journey to better mental health. With a suite of tools for meditation, mindfulness, and self-assessment, MoodSync provides a personalized and supportive environment to help you understand and improve your emotional well-being.

---

## ✨ Features

- **🧘 Guided Meditations:** Access a library of guided meditation sessions to reduce stress, improve focus, and find your inner calm.
- **📝 Mental Health Assessments:** Take standardized self-assessments like the PHQ-9 to track and understand your depression severity over time.
- **🌿 Mindfulness Exercises:** Learn and practice mindfulness techniques to foster emotional balance and relieve stress.
- **🔐 Secure User Authentication:** A robust and secure login and registration system, ensuring your personal data remains private.
- **📊 Mood Tracking & Visualization:** Log your daily moods and see your emotional trends visualized in an intuitive dashboard.
- **✍️ Personal Journal:** A safe space to write down your thoughts and feelings, helping you to reflect and process your emotions.
- **🎧 Calming Audios:** A curated collection of calming sounds and music to help you relax and de-stress.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS 
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB

---

## 🚀 Getting Started

Follow these instructions to get a local copy of MoodSync up and running on your machine.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (or a MongoDB Atlas cluster URI)
- An API testing tool like Postman (optional)

### Installation

#### Clone the Repository

```bash
git clone https://github.com/sharvil-lade/Mood-Sync.git
```

#### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run server
```

#### Frontend Setup

```bash
cd client
npm install
```

Start the React development server:

```bash
npm run dev
```

---

## 💡 Usage

- **Register or Log In:** Create an account to start tracking your mental wellness journey.
- **Take an Assessment:** Navigate to the PHQ-9 test to evaluate your current depression severity.
- **Explore Meditations:** Choose from a variety of guided meditations to find one that suits your needs.
- **Log Your Mood:** Regularly log your mood to see trends and gain insights into your emotional patterns.
- **Write in Your Journal:** Use the journal to express your thoughts and feelings in a private and secure space.

---

## 🔮 Future Updates

Here are some features that will be added in the future:

- **🤖 Real-time AI Emotional Support:** An integrated AI chatbot to provide instant, conversational support based on your needs.
- **🎭 Emotion Recognition:** Utilizing AI to analyze facial expressions or voice tones during assessments for a more holistic understanding of your emotional state.
