import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ReminderSecurity = () => {
  return (
    <TabsContent value="security" className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="current-password">Current Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter current password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">New Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Set a strong password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm new Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
        <Select>
          <SelectTrigger id="twoFactor">
            <SelectValue placeholder="Select 2FA method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
            <SelectItem value="app">Authenticator App</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </TabsContent>
  );
};
