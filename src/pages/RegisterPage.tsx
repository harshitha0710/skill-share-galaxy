
import { Link } from "react-router-dom";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <div className="text-center mb-6">
            <Link to="/" className="text-2xl font-bold text-skill-purple inline-block">
              Skill<span className="text-skill-teal">Galaxy</span>
            </Link>
            <h1 className="text-2xl font-bold mt-6">Create an account</h1>
            <p className="text-gray-600 mt-2">Join the skill exchange network</p>
          </div>
          
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
