import Image from "next/image";
import googlepik from "../assets/images/google-icon.svg";
import applepik from "../assets/images/apple-icon.svg";

import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  function handleSignInGoogle() {
    signIn("google", { callbackUrl: process.env.NEXTAUTH_URL });
    router.push("/");
  }
  function handleSignInGithub() {
    signIn("github", { callbackUrl: process.env.NEXTAUTH_URL });
    router.push("/");
  }
  return (
    <div className="flex h-[100vh]">
      <div className="w-full right grid place-items-center">
        <div className="w-11/12 md:w-4/12">
          <h1 className="text-[36px] font-bold">Sign In</h1>
          <h2 className="text-[16px] mb-[15px]">Sign in to your account</h2>
          <div className="flex gap-[10px] justify-between">
            <button className="sign-icon" onClick={handleSignInGoogle}>
              <Image src={googlepik} width={16} height={16} alt="Google" />
              <span>Sign in with Google</span>
            </button>
            <button className="sign-icon" onClick={handleSignInGithub}>
              <Image src={applepik} width={16} height={16} alt="Google" />
              <span>Sign in with Github</span>
            </button>
          </div>
          <div className="user-form">
            <label htmlFor="email" className="w-[100%] block mb-[10px]">
              Email address
            </label>
            <input type="text" placeholder="johndoe@gmail.com" />
            <label htmlFor="pass" className="block mb-[10px]">
              Password
            </label>
            <input type="password" placeholder="••••••••" />
            <button className="forgot-btn">Forgot password?</button>
            <button className="submit-btn">Submit</button>
          </div>
          <p className="register-btn">
            Don’t have an account? <button>Register here</button>
          </p>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
