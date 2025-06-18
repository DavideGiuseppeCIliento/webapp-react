// context/LoadingContext.jsx
import { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

function useLoading() {
  const context = useContext(LoadingContext);
  return context;
}

export { LoadingProvider, useLoading };
