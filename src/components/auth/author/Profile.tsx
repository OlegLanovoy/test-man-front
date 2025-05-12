// IMPORT OF REACT
import { useEffect, useState } from "react";

// IMPORTS OF PAGES
import { ProfilePage } from "./profile-components/ProfilePage";
import { SecurityPage } from "./profile-components/ProfileSecurityPage";
import { NotificationsPage } from "./profile-components/ProfileNotificationsPage";
import { AccountPage } from "./profile-components/ProfileAccountPage";

// IMPORTS OF UI
import { Tabs } from "@/components/ui/tabs";
import { ProfileHeader } from "./profile-components/ProfileHeader";
import { ProfileTabsTriggers } from "./profile-components/ProfileTabsTriggers";

// IMPORTS DF REQUESTS
import { getMe } from "@/requests/UserRequest";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { user } = await getMe("me");
      setUserData(user);
      console.log(user);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <ProfileHeader userData={userData} />

      <Tabs
        defaultValue="profile"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <ProfileTabsTriggers />
        <ProfilePage userData={userData} />
        <AccountPage />
        <SecurityPage />
        <NotificationsPage />
      </Tabs>
    </div>
  );
}
