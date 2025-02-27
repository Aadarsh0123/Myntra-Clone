import React, { useState } from "react";
import poster from "../assets/login_photo.jpg";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { signInSuccessfull } from "../redux/user/userSlice";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signupValidation, setSignupValidation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEmailPasswordSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSignupError(null);
    if (formData.password.length < 6) {
      setSignupValidation("password length must be 6 letters at least");
      setLoading(false);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("Email/password signup successful:", user);

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setSignupError("Internal Server Error, Try again later some time");
      setLoading(false);
      console.error("Error signing up with email/password:", error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google signup successful:", user);

      dispatch(
        signInSuccessfull({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })
      );

      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        createdAt: new Date(),
      });

      navigate("/");
    } catch (error) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  return (
    <div className="m-auto">
      <div className="flex flex-col items-center">
        <img
          className="sm:w-2/4 w-full h-52 object-cover lg:w-1/4 mx-auto"
          src={poster}
          alt="poster"
        />
        <div className="lg:w-1/4 sm:w-2/4 p-3 flex flex-col items-center">
          <h1 className="text-xl font-bold my-6">Signup</h1>
          <form className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="enter email"
              name="email"
              className="border-2 rounded p-2 text-lg outline-none text-gray-700"
              onChange={handleFormDataChange}
            />
            <input
              type="password"
              placeholder="enter password"
              name="password"
              className="border-2 rounded p-2 text-lg outline-none text-gray-700"
              onChange={handleFormDataChange}
            />

            {signupValidation && formData.password.length < 6 && (
              <p className="text-sm text-red-600">{signupValidation}</p>
            )}

            <p className="text-sm text-gray-500">
              By continuing, I agree to the{" "}
              <span className="text-pink-600 font-bold">Terms of Use</span> &{" "}
              <span className="text-pink-600 font-bold">Privacy Policy</span>
            </p>

            <button
              className="p-3 font-bold bg-pink-600 text-white"
              onClick={handleEmailPasswordSignup}
            >
              {loading ? "Loading..." : "Continue"}
            </button>

            <div
              className="flex cursor-pointer items-center justify-center gap-2"
              onClick={handleGoogleSignup}
            >
              <p className="font-semibold">Sign up with </p>
              <FaGoogle className="text-red-700" />
            </div>
            {signupError && (
              <p className="p-2 text-sm text-red-600">{signupError}</p>
            )}

            <p className="text-sm text-gray-500">
              Already a member ?{" "}
              <Link
                to="/signin"
                className="text-pink-600 font-semibold cursor-pointer"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
