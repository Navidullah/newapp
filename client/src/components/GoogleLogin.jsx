import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "@/helpers/firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {
  const handleLogin = async () => {
    const googleResponse = await signInWithPopup(auth, provider);
  };
  return (
    <Button className="w-full text-black bg-gray-300" onClick={handleLogin}>
      <FcGoogle />
      Continue with Google
    </Button>
  );
};

export default GoogleLogin;
