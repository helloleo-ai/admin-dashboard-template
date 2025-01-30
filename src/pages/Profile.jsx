import { useState } from 'react';

const userProfile = {
  name: 'Obi-Wan Kenobi',
  email: 'obiwan.kenobi@jedi-council.rep',
  avatar: 'https://terros.io/wp-content/uploads/2024/04/Leo.webp',
  role: 'Administrator',
  department: 'Management',
  location: 'New York, USA',
  timezone: 'GMT-4 (Eastern Time)',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  joinDate: 'January 2024'
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="py-6 relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Profile</h1>
        <div className="mt-8">
          <div className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0 flex justify-center">
                <img className="h-24 w-24 rounded-full" src={userProfile.avatar} alt="" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{userProfile.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{userProfile.email}</p>
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="btn btn-primary"
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Role</h3>
                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{userProfile.role}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Department</h3>
                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{userProfile.department}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{userProfile.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Timezone</h3>
                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{userProfile.timezone}</p>
                  </div>
                </div>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Bio</h3>
                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{userProfile.bio}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Member since</h3>
                    <p className="mt-1 text-sm text-gray-900 dark:text-gray-100">{userProfile.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
