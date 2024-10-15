import React, { useState, useEffect } from "react";

function App() {
  // Inicializa el tema desde el localStorage o por defecto en "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Guardar la preferencia del usuario
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  

  return (
    <div>
      <i class="bi bi-moon-stars-fill"  onClick={toggleTheme}></i>
    </div>
  );
}

export default App;
