import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export const ReminderProfile = () => {
  return (
    <TabsContent value="profile" className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your full name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Tell us about yourself"
          className="min-h-[100px]"
        />
      </div>
      <div className="flex w-full">
        <div className="space-y-2 w-1/2 pr-2">
          <Label htmlFor="instagram">Instagram</Label>
          <Input
            id="instagram"
            placeholder="Enter link for Instagram"
            className="w-full"
          />
        </div>
        <div className="space-y-2 w-1/2 pl-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            placeholder="Enter link for Website"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedIn">LinkedIn</Label>
        <Input id="linkedIn" placeholder="Enter link for LinkedIn" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="avatar">Profile Picture</Label>
        <Input id="avatar" type="file" className="cursor-pointer" />
      </div>
    </TabsContent>
  );
};
