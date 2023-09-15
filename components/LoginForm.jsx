import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <div>message</div>
      </form>
      <Link href="/register">Register</Link>
    </>
  );
};

export default LoginForm;
