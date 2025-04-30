
import ProfileForm from "@/components/ProfileForm";

const ProfilePage = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <h1 className="text-2xl font-bold mb-6">Create Your Profile</h1>
          <p className="text-gray-600 mb-8">
            Complete your profile to start exchanging skills with others. The more
            detailed your profile is, the better matches you'll find.
          </p>
          
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
