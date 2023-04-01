import { useSession } from "next-auth/react";
import { useQuery } from "react-query";

export default function ProfilePage() {
  const { data: session, status: loading } = useSession();
  const { data: userData, isLoading } = useQuery("/api/user", () =>
    fetch("/api/user").then((res) => res.json())
  );
//   console.log(userData);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>Please sign in</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.fullname}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
