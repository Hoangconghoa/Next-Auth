"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const Layout = () => {
  const { data: session } = useSession();
  console.log("sess", session);
  const logout = () => {
    signOut();
  };
  return (
    <div>
      {!session ? (
        <Button>
          <Link href={"/login"}>Login</Link>{" "}
        </Button>
      ) : (
        <div>
          Xin chao, {session.user?.name}
          <Image
            src={session.user?.image || ""}
            alt="a"
            width={50}
            height={50}
          />
          <Button onClick={logout}>Đăng xuất</Button>
        </div>
      )}
    </div>
  );
};

export default Layout;
