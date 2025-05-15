import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Shield, Settings } from "lucide-react";

interface TabsListProps {
  setCurrentStep: (str: string) => void;
  setProgress: (num: number) => void;
}

const tabSteps = [
  { value: "profile", label: "Profile", icon: User },
  { value: "account", label: "Account", icon: Settings },
  { value: "security", label: "Security", icon: Shield },
];

export const ReminderTabsList = ({
  setCurrentStep,
  setProgress,
}: TabsListProps) => {
  return (
    <TabsList className="grid grid-cols-3 mb-4">
      {tabSteps.map((tab, index) => (
        <TabsTrigger
          key={tab.value}
          value={tab.value}
          onClick={() => {
            setCurrentStep(tab.value);
            setProgress(index + 1);
          }}
          className="flex items-center gap-2"
        >
          <tab.icon className="h-4 w-4" />
          <span className="hidden sm:inline">{tab.label}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
