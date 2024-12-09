import { useContext } from "react";
import { Helmet } from "react-helmet";
import {
  FaBehance,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import ".././index.css";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOutUser } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="py-11">
      <Helmet>
        <title>{user.displayName} - Warm Hearts</title>
      </Helmet>
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
            <div className="flex justify-around items-center my-4">
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
              <button
                onClick={signOutUser}
                className="btn bg-gradient-to-r from-[#d5135a] to-[#f05924] animate-gradient text-BgColor rounded-full"
              >
                Log-Out
              </button>
            </div>
            <p className="mt-2 text-gray-500 text-xs">Developed by abnahid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
