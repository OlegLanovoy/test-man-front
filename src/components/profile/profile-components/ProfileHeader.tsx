import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  age?: number;
  webSite: string;
  instagram: string;
  linkedIn: string;
}

export const ProfileHeader = ({ userData }: { userData: UserData | null }) => {
  return (
    <div className="mb-10 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-start gap-6">
        <div className="relative">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="/placeholder.svg?height=96&width=96"
              alt="Profile"
            />
            <AvatarFallback>
              {userData ? userData.firstName[0] + userData.lastName[0] : "JD"}
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="outline"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
          >
            <Camera className="h-4 w-4" />
            <span className="sr-only">Upload avatar</span>
          </Button>
        </div>

        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold">
            {userData
              ? `${userData.firstName} ${userData.lastName}`
              : "Loading..."}
          </h2>
          <p className="text-muted-foreground">
            {userData ? userData.email : "Loading email..."}
          </p>
          <p className="text-sm text-muted-foreground">Age: {userData?.age}</p>
        </div>
      </div>
    </div>
  );
};
