import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Backendless from "../../services/backendless/index";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const validLogin =
          await Backendless.UserService.isValidLogin();

        setIsLoggedIn(validLogin);
      } catch (error) {
        console.error("Gagal memeriksa login:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-gray-950">
        <p className="text-gray-700 dark:text-gray-300">
          Memeriksa login...
        </p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}