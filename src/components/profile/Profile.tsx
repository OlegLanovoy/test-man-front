import { useEffect, useState } from "react";

import { ProfilePage } from "./profile-components/ProfilePage";
import { SecurityPage } from "./profile-components/ProfileSecurityPage";
import { NotificationsPage } from "./profile-components/ProfileNotificationsPage";
import { AccountPage } from "./profile-components/ProfileAccountPage";

import { Tabs } from "@/components/ui/tabs";
import { ProfileHeader } from "./profile-components/ProfileHeader";
import { ProfileTabsTriggers } from "./profile-components/ProfileTabsTriggers";

import { getMe } from "@/requests/UserRequest";
import { profileRequest } from "@/requests/Profilerequest";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  age?: number;
  userName: string;
  webSite: string;
  instagram: string;
  linkedIn: string;
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
        defaultValue="account"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <ProfileTabsTriggers />
        <ProfilePage userData={userData} />
        {userData && <AccountPage userData={userData} />}

        <SecurityPage />
        <NotificationsPage />
      </Tabs>
    </div>
  );
}
