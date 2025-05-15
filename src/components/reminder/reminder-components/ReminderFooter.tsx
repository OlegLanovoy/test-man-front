// ReminderFooter.tsx
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = ["profile", "account", "security"];

interface ReminderFooterProps {
  step: string;
  setStep: (step: string) => void;
  setProgress: (progress: number) => void;
  onComplete: () => void;
}

export const ReminderFooter = ({
  step,
  setStep,
  setProgress,
  onComplete,
}: ReminderFooterProps) => {
  const currentIndex = steps.indexOf(step);

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
      setProgress(currentIndex + 2);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
      setProgress(currentIndex);
    }
  };

  return (
    <DialogFooter className="flex justify-between mt-6">
      <div>
        {step !== "profile" && (
          <Button variant="outline" onClick={handlePrevious}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
        )}
      </div>
      <div>
        {step !== "security" ? (
          <Button onClick={handleNext}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={onComplete}>Complete Profile</Button>
        )}
      </div>
    </DialogFooter>
  );
};
