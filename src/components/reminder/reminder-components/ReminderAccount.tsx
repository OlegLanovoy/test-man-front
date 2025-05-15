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

export const ReminderAccount = () => {
  return (
    <TabsContent value="account" className="space-y-4">
      <div className="flex w-full">
        <div className="space-y-2 w-1/2 pr-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Change your Name"
            className="w-full"
          />
        </div>
        <div className="space-y-2 w-1/2 pl-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Change your Last Name"
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Choose a User-Name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Enter a company" />
      </div>

      <div className="flex w-full">
        <div className="space-y-2 w-1/2 pr-2">
          <Label htmlFor="timezone">Your role</Label>
          <Select>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select your timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-8">PM </SelectItem>
              <SelectItem value="utc-5">Programmer </SelectItem>
              <SelectItem value="utc+0">CTO</SelectItem>
              <SelectItem value="utc+1">Desiner </SelectItem>
              <SelectItem value="utc+8">Tech Lead </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 w-1/2 pr-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select your timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
              <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
              <SelectItem value="utc+0">UTC</SelectItem>
              <SelectItem value="utc+1">
                Central European Time (UTC+1)
              </SelectItem>
              <SelectItem value="utc+8">China Standard Time (UTC+8)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </TabsContent>
  );
};
