import { ProfileCompletionModal } from "./ProfileCompletionModal";

export default function Reminder() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Your Dashboard</h1>
      <p className="text-xl mb-4">Your profile is incomplete!</p>
      <ProfileCompletionModal />
    </main>
  );
}
