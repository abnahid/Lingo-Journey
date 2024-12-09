/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import singIn from "../assets/lottie/Animation - 1733417495925.json";
import { AuthContext } from "./../context/AuthProvider";

const Register = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const { createUser, updateUserProfile, setUser, googleLogin, gitHubLogin } =
    useContext(AuthContext);

  const [validations, setValidations] = useState({
    lower: false,
    upper: false,
    length: false,
  });

  const handleChange = (value) => {
    const rules = {
      lower: /[a-z]/,
      upper: /[A-Z]/,
      length: /.{8,}/,
    };

    setValidations({
      lower: rules.lower.test(value),
      upper: rules.upper.test(value),
      length: rules.length.test(value),
    });
  };

  const handleGitHub = () => {
    gitHubLogin()
      .then(() => {
        navigate(location?.state?.from || "/");
      })
      .catch((error) => toast.error(`GitHub Login Failed: ${error.message}`));
  };

  const handleGoogle = () => {
    googleLogin().then((result) => {
      navigate(location?.state?.from || "/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (name.length < 5) {
      setError({ ...error, name: "Name should be more than 5 characters" });
      return;
    }

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    if (!validations.lower || !validations.upper || !validations.length) {
      toast.error("Password does not meet complexity requirements");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User created successfully!");
        setUser(user);

        return updateUserProfile({
          displayName: name,
          photoURL: photoUrl,
        });
      })
      .then(() => {
        navigate(location?.state?.from || "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Error: ${err.message}`);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-10 flex flex-wrap justify-center items-center bg-white shadow sm:rounded-lg">
      <div className="w-full lg:w-1/2 px-4">
        {/* Sign-up Form */}
        <div className="p-6 sm:p-8 bg-white shadow rounded-xl">
          <h2 className="text-gray-800 text-center text-2xl font-bold mb-2">
            Sign up
          </h2>
          {/* Social Buttons */}
          <div>
            <button
              className="w-full  font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow"
              onClick={handleGoogle}
            >
              <div className="bg-white p-2 rounded-full">
                <svg className="w-4" viewBox="0 0 533.5 544.3">
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              <span className="ml-4">Sign Up with Google</span>
            </button>
            <button
              className="w-full  font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow mt-5"
              onClick={handleGitHub}
            >
              <div className="bg-white p-1 rounded-full">
                <svg className="w-6" viewBox="0 0 32 32">
                  <path
                    fillRule="evenodd"
                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                  />
                </svg>
              </div>
              <span className="ml-4">Sign Up with GitHub</span>
            </button>
          </div>
          {/* Separator */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5"></span>
            <span className="text-xs text-center text-gray-500 uppercase">
              or
            </span>
            <span className="border-b w-1/5"></span>
          </div>
          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                User Name
              </label>
              <input
                name="name"
                type="text"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                placeholder="Enter user name"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="email"
                name="email"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <input
                type={type}
                name="password"
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-primary"
                placeholder="Enter your password"
                onChange={(e) => handleChange(e.target.value)}
                required
              />
              <div className="text-sm mt-2">
                <p
                  className={
                    validations.lower ? "text-green-500" : "text-red-500"
                  }
                >
                  Contains a lowercase letter
                </p>
                <p
                  className={
                    validations.upper ? "text-green-500" : "text-red-500"
                  }
                >
                  Contains an uppercase letter
                </p>
                <p
                  className={
                    validations.length ? "text-green-500" : "text-red-500"
                  }
                >
                  At least 8 characters
                </p>
              </div>
            </div>
            {/* Sign-Up Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-medium text-white bg-primary rounded-lg hover:bg-btnHover focus:outline-none"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      {/* Animation Section */}
      <div className="hidden lg:block w-full lg:w-1/2 px-4">
        <Lottie animationData={singIn} loop={true} className="max-w-full" />
      </div>
    </div>
  );
};

export default Register;
