import { useState, useEffect } from 'react';

const useSession = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('session', JSON.stringify(userData));
    setSession(userData);
  };

  const logout = () => {
    localStorage.removeItem('session');
    setSession(null);
  };

  return { session, login, logout };
};

export default useSession;
