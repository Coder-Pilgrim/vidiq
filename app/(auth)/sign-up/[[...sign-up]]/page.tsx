import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
