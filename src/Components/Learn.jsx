import { FaBookOpen } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const Learn = () => {
  const users = useLoaderData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Start Learning</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {users.slice(0, 10).map((user, index) => (
          <Link
            to={`/lesson/${user.Lesson_no}`}
            key={index}
            className="card shadow-lg bg-blue-100 p-4 text-center cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
          >
            <FaBookOpen className="text-4xl mb-4 mx-auto" />
            <h2 className="text-xl font-semibold">Lesson-{index + 1}</h2>
          </Link>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Alphabet Learning Tutorial
        </h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YCu45ILtikE?si=jtG0byCeACTWEM7Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/tutorials"
          className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Learn;
