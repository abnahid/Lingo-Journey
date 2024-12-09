import { useContext } from "react";
import { Helmet } from "react-helmet";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>Dashboard - Warm Hearts</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center">
        Welcome, {user?.displayName || "User"}!
      </h1>
      <p className="text-center text-gray-600 mt-4 mb-8">
        Welcome to your dashboard. Here you can view and update your profile
        information.
      </p>

      {/* Profile Information */}
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#1da1f2] to-[#0e71c8] animate-gradient h-32">
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            <img
              className="h-24 w-24 rounded-full object-cover border-4 border-white"
              src={user?.photoURL}
              alt="Profile"
            />
          </div>
        </div>
        <div className="pt-16 pb-8 px-6">
          <div className="text-center">
            <h1 className="text-lg font-semibold">{user.displayName}</h1>
            <p className="text-sm text-gray-500">{user.email}</p>
            <div className="mt-4 flex justify-center space-x-3">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaBehance></FaBehance>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter />
              </a>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Known for their creative mindset,{" "}
              {user.displayName || "this user"} enjoys contributing to
              innovative campaigns.
            </p>
            <div className="my-4">
              <button
                onClick={() =>
                  navigate("/update-profile", {
                    state: { from: location.pathname },
                  })
                }
                className="btn bg-gradient-to-r from-[#1da1f2] to-[#0e71c8] animate-gradient text-BgColor rounded-full"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
