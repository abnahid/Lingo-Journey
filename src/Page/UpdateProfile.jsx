import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const UpdateProfile = () => {
  const { updateUserProfile, user, auth, setUser } = useContext(AuthContext);
  const [btnLoading, setBtnLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const name = e.target.name.value;
    const photo = e.target.profilePhoto.files[0];

    try {
      let photoURL = user?.photoURL;

      if (photo) {
        const formData = new FormData();
        formData.append("image", photo);

        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload image to ImgBB");
        }

        const data = await response.json();
        photoURL = data.data.url;
      }

      await updateUserProfile({ displayName: name, photoURL });
      setUser({ ...auth.currentUser, displayName: name, photoURL });
      toast.success("Profile updated successfully!");

      navigate(location.state?.from || "/");
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="py-11">
      <Helmet>
        <title>Update Profile - Warm Hearts</title>
      </Helmet>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Profile
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user?.displayName || ""}
              required
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo (optional):
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              className="file-input file-input-bordered file-input-sm w-full mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={btnLoading}
            className={`btn bg-primary hover:bg-blue-500 text-white w-full flex items-center justify-center ${
              btnLoading ? "cursor-not-allowed opacity-75" : ""
            }`}
          >
            {btnLoading ? (
              <div className="flex justify-center items-center gap-2">
                <span className="loading loading-spinner loading-md"></span>
                <p>Updating...</p>
              </div>
            ) : (
              "Update Profile"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
