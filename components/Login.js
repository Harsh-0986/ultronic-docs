import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";

function Login() {
  return (
    <>
      <Head>
        <title>Ultronic Documents</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <p className="ml-2 mt-2 font-semibold font-Gowun text-5xl text-gray-700 text-left">
          Ultronic Documents
        </p>
        <Button
          className="w-50 h-30 text-base mt-10 font-STIX"
          color="blue"
          buttonType="filled"
          riple="light"
          onClick={signIn}
        >
          Log In with Google
        </Button>
      </div>
      <footer className="w-screen flex items-center justify-center fixed bottom-0 ">
        Made with 💛 by &nbsp
        <Link href="https://harsh-shah.tk">
          <span className="text-blue-400">Harsh Shah</span>
        </Link>
      </footer>
    </>
  );
}

export default Login;
