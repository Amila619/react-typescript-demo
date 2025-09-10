import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  // type assertion if we know the output
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () =>
    setUser({
      name: "Amila",
      email: "amila@example.com",
    });
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* check before accessing object if there is a possibility to be null */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
}
