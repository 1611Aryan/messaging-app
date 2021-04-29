import { useEffect } from "react";
import io from "socket.io-client";

const Home: React.FC = () => {
  useEffect(() => {
    const socket = io("http://localhost:5000");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section>
      <h1>Home</h1>
    </section>
  );
};

export default Home;
