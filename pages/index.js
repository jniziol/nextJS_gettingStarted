import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      <h1>Home PPPPPage</h1>
      {session ? (
        <div>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button>Sign In</button>
        </div>
      )}
    </>
  );
}
