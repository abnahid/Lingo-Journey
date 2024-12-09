import { Link, useRouteError } from "react-router-dom";
import Footer from "./../Components/Footer";
import Navbar from "./../Components/Navbar";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-lg text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">Oops!</h1>
          <p className="text-2xl font-semibold mb-2">Something went wrong.</p>
          <p className="text-lg text-gray-600 mb-6">
            <i>{error.statusText || error.message}</i>
          </p>
          <Link
            to={`/`}
            className="btn bg-primary text-white px-6 py-2 rounded-md shadow-md hover:bg-BtnHover"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
