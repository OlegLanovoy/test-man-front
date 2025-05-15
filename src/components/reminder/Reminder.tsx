import { ProfileCompletionModal } from "./ProfileCompletionModal";
import { ReminderHeader } from "./reminder-components/ReminderHeader";

export default function Reminder() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ProfileCompletionModal />
    </main>
  );
}
