
import { Link } from "react-router-dom";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="text-center mb-6">
            <Link to="/" className="text-2xl font-bold text-skill-purple inline-block">
              Skill<span className="text-skill-teal">Galaxy</span>
            </Link>
            <h1 className="text-2xl font-bold mt-6">Welcome back</h1>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>
          
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
