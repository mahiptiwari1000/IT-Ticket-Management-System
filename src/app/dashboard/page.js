'use client';

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <h2>Your Tickets</h2>
      {/* Here you can list tickets */}
      <a href="/ticketpage">Go to Ticket Page</a>
    </div>
  );
};

export default Dashboard;
