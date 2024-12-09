import { useState } from "react";
import { RiVoiceAiFill } from "react-icons/ri";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";

const Lesson = () => {
  const { lessonNo } = useParams();
  const data = useLoaderData();

  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { speak } = useSpeechSynthesis();

  const filteredData = data.filter(
    (item) => item.Lesson_no === parseInt(lessonNo)
  );

  const getCardColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-400";
      case "medium":
        return "bg-yellow-300";
      case "hard":
        return "bg-red-400";
      default:
        return "bg-gray-400";
    }
  };

  const handleOpenModal = (item) => {
    setModalData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  //   {
  //     "Id": "word_052",
  //     "word": "perro",
  //     "pronunciation": "peh-rroh",
  //     "meaning": "dog",
  //     "part_of_speech": "noun",
  //     "difficulty": "easy",
  //     "Lesson_no": 9,
  //     "when_to_say": "describing actions",
  //     "example": "Ejemplo: 'perro' en una oraci\u00f3n: 'perro es muy com\u00fan.'"
  // },

  const pronounceWord = (word) => {
    speak({
      text: word,
      voice: window.speechSynthesis
        .getVoices()
        .find((voice) => voice.lang === "it-IT"),
      rate: 1, // Speech rate
      pitch: 1, // Speech pitch
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-5xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        {filteredData[0]?.title || `Lesson ${lessonNo}`}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className={`card transform transition-transform duration-300 hover:scale-105 shadow-lg p-6 rounded-lg ${getCardColor(
              item.difficulty
            )}`}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 ">
              {item.word}
            </h2>
            <p className="mb-2">
              <strong className="text-blue-700">Word:</strong>{" "}
              <span className="dark:text-gray-100">{item.word}</span>
            </p>
            <p className="mb-2">
              <strong className="text-blue-700">Meaning:</strong>
              <span className="dark:text-gray-100"> {item.meaning}</span>
            </p>
            <p className="mb-2">
              <strong className="text-blue-700">Pronunciation:</strong>{" "}
              <span className="dark:text-gray-100">{item.pronunciation}</span>
            </p>
            <p className="mb-4">
              <strong className="text-blue-700">Part of Speech:</strong>{" "}
              <span className="dark:text-gray-100">{item.part_of_speech}</span>
            </p>
            <button
              className="btn btn-sm w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none mt-4 hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 transition duration-300"
              onClick={() => pronounceWord(item.word)}
            >
              Pronounce Word
            </button>
            <button
              className="btn btn-sm w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none mt-4 hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 transition duration-300"
              onClick={() => handleOpenModal(item)}
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/start-learning"
          className="btn px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-md hover:scale-105 transform transition duration-300"
        >
          Back to Lesson
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl w-11/12 md:w-1/2 lg:w-1/3 relative animate-fade-in-down transform transition-transform duration-300">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition duration-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-3xl font-bold text-center text-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
              {modalData.word}
            </h2>

            <div className="text-gray-700 space-y-4">
              <p>
                <strong className="text-blue-700">Meaning:</strong>{" "}
                {modalData.meaning}
              </p>
              <p>
                <strong className="text-blue-700">When to Say:</strong>{" "}
                {modalData.when_to_say}
              </p>
              <p>
                <strong className="text-blue-700">Example:</strong>{" "}
                {modalData.example}{" "}
                <RiVoiceAiFill
                  className="mr-2"
                  onClick={() => pronounceWord(modalData.example)}
                />
              </p>
            </div>

            <button
              className="w-full py-3 mt-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-md hover:scale-105 transform transition duration-300"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>

          <style>
            {`
          .animate-fade-in-down {
            animation: fade-in-down 0.4s ease-out both;
          }
    
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
          </style>
        </div>
      )}
    </div>
  );
};

export default Lesson;
