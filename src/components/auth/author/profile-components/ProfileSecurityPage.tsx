import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { TabsContent } from "@/components/ui/tabs";

export const SecurityPage = () => {
  return (
    <TabsContent value="security">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Two-Factor Authentication</CardTitle>
            <CardDescription>
              Add an extra layer of security to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="text-base font-medium">Authenticator App</h3>
                <p className="text-sm text-muted-foreground">
                  Use an authenticator app to get two-factor authentication
                  codes.
                </p>
              </div>
              <Button variant="outline">Set up</Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="text-base font-medium">SMS Recovery</h3>
                <p className="text-sm text-muted-foreground">
                  Use your phone number as a backup method.
                </p>
              </div>
              <Button variant="outline">Set up</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sessions</CardTitle>
            <CardDescription>
              Manage your active sessions on different devices.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                device: "MacBook Pro",
                location: "New York, USA",
                lastActive: "Now",
                current: true,
              },
              {
                device: "iPhone 13",
                location: "New York, USA",
                lastActive: "2 hours ago",
                current: false,
              },
              {
                device: "Windows PC",
                location: "Boston, USA",
                lastActive: "3 days ago",
                current: false,
              },
            ].map((session, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="text-base font-medium">
                    {session.device}{" "}
                    {session.current && (
                      <span className="text-xs text-green-500">(Current)</span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {session.location} • {session.lastActive}
                  </p>
                </div>
                {!session.current && (
                  <Button variant="outline" size="sm">
                    Log out
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline">Log out of all devices</Button>
          </CardFooter>
        </Card>
      </div>
    </TabsContent>
  );
};
