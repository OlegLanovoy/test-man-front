import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";

import { CheckCircle2 } from "lucide-react";

const steps = ["profile", "account", "security"];

export const ReminderHeader = ({ progress }: { progress: number }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">
          Complete Your Profile
        </DialogTitle>
        <DialogDescription>
          Please complete your profile to get the most out of our platform.
        </DialogDescription>
      </DialogHeader>

      {/* Progress indicator */}
      <div className="flex justify-between mb-4 px-2">
        <div className="flex items-center gap-2 w-full">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center w-full">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  index + 1 <= progress
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1 <= progress ? (
                  index + 1 === progress ? (
                    index + 1
                  ) : (
                    <CheckCircle2 className="h-5 w-5" />
                  )
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-grow mx-1 ${
                    index + 1 < progress ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
