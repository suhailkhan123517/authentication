"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <div>
        <h1>
          Name: {session?.user?.name}
          {session?.user?.lname}
        </h1>
        <h1>Email:{session?.user?.email}</h1>
        <button onClick={() => signOut()}>logout</button>
      </div>
    </>
  );
};

export default UserInfo;
