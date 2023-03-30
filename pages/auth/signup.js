import { useRef } from "react";
import { useRouter } from "next/router";

export default function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const router = useRouter();
  console.log(process.env.NODE_ENV);
  async function submitForm(event) {
    event.preventDefault();

    const userSignInData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    };

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userSignInData),
    });

    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <form onSubmit={submitForm}>
      <input type="email" placeholder="Email" ref={emailRef} />
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <input type="password" placeholder="Password Confirmation" ref={passwordConfirmationRef} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
