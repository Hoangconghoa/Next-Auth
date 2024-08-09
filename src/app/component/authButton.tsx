"use client";
import Image from "next/image";

import { signIn, useSession, signOut } from "next-auth/react";
type Props = {
  provider: string;
  icon: any;
};
const SignInButton = ({ provider, icon }: Props) => {
  const login = () => {
    signIn(provider, { callbackUrl: "http://localhost:3000/" });
  };

  const { data: session } = useSession();
  console.log("session", session);
  return (
    <>
      <button
        onClick={login}
        className="p-3 flex items-center font-semibold justify-center transition-colors duration-300 bg-slate-300 text-black rounded-lg focus:shadow-outline hover:bg-slate-200"
      >
        <Image src={icon} alt={provider} width={20} height={20} />
      </button>
    </>
  );
};
export default SignInButton;
