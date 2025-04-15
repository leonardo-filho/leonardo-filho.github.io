// components/Cursor.js
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const color = theme === "dark" ? "#fff" : "#000";

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-6 h-6 rounded-full border transition-all duration-100"
      style={{
        top: position.y,
        left: position.x,
        borderColor: color,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Cursor;
