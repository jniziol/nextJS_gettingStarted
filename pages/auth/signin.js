import { useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const router = useRouter();

  async function submitForm(event) {
    event.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (result.ok && result.error === null) {
      router.push("/");
    }
  }

  return (
    <form onSubmit={submitForm}>
      <input type="email" placeholder="Email" ref={emailRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
