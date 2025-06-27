import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, User } from "lucide-react";
import { CreditCard, Shield } from "lucide-react";

const tabs = [
  { value: "profile", label: "Profile", icon: User },
  { value: "account", label: "Account", icon: CreditCard },
  { value: "security", label: "Security", icon: Shield },
  { value: "notifications", label: "Notifications", icon: Bell },
];

export const ProfileTabsTriggers = () => {
  return (
    <TabsList className="grid w-full grid-cols-4 lg:w-auto">
      {tabs.map(({ value, label, icon: Icon }) => (
        <TabsTrigger
          key={value}
          value={value}
          className="flex items-center gap-2"
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline-block">{label}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
