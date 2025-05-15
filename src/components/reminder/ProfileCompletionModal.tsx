import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { ReminderHeader } from "./reminder-components/ReminderHeader";
import { ReminderFooter } from "./reminder-components/ReminderFooter";
import { ReminderTabsList } from "./reminder-components/ReminderTabsList";
import { ReminderProfile } from "./reminder-components/ReminderProfile";
import { ReminderAccount } from "./reminder-components/ReminderAccount";
import { ReminderSecurity } from "./reminder-components/ReminderSecurity";

export function ProfileCompletionModal() {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState("profile");
  const [progress, setProgress] = useState(1);

  const handleComplete = () => {
    // Here you would typically save all the form data
    // setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="sm:max-w-[500px]"
      >
        <ReminderHeader progress={progress} />
        <Tabs value={currentStep} className="w-full">
          <ReminderTabsList
            setCurrentStep={setCurrentStep}
            setProgress={setProgress}
          />
          <ReminderProfile />
          <ReminderAccount />
          <ReminderSecurity />
        </Tabs>
        <ReminderFooter
          step={currentStep}
          setStep={setCurrentStep}
          setProgress={setProgress}
          onComplete={handleComplete}
        />
      </DialogContent>
    </Dialog>
  );
}
