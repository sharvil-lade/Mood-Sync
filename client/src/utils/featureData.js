import { FaRegHeart } from "react-icons/fa";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

export const features = [
  {
    title: "Guided Meditation",
    description:
      "Expert-led sessions tailored to your needs, from beginner to advanced practitioners.",
    icon: FaRegHeart,
    color: "text-violet-500",
    url: "/features/meditation", // Updated URL
  },
  {
    title: "Mood Tracking",
    description:
      "Track your emotional patterns and gain insights into your mental well-being journey.",
    icon: BsBarChart,
    color: "text-blue-500",
    url: "/features/mood", // Placeholder URL (you can add this feature later)
  },
  {
    title: "Sleep Stories",
    description:
      "Calming narratives and sounds to help you achieve better sleep quality.",
    icon: MdOutlineAccessTime,
    color: "text-yellow-500",
    url: "/features/stories", // Updated URL
  },
  {
    title: "Community Support",
    description:
      "Connect with others on similar journeys and share experiences in a safe space.",
    icon: IoIosPeople,
    color: "text-pink-500",
    url: "/features/community", // Placeholder URL (you can add this feature later)
  },
  {
    title: "Daily Journal",
    description:
      "Document your thoughts and feelings with guided journaling prompts.",
    icon: BsJournalBookmark,
    color: "text-orange-500",
    url: "/features/journal", // Placeholder URL (you can add this feature later)
  },
  {
    title: "Instant Exercises",
    description:
      "Quick stress-relief techniques and breathing exercises for immediate calm.",
    icon: AiOutlineThunderbolt,
    color: "text-green-500",
    url: "/features/exercises", // Updated URL
  },
];
