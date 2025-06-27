import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CreditCard } from "lucide-react";

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
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { AccountFormValues } from "@/validation-schemas/profile-schema";
import { profileRequest } from "@/requests/Profilerequest";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  company?: string;
  role?: string;
  webSite: string;
  instagram: string;
  linkedIn: string;
}

export const AccountPage = ({ userData }: { userData: UserData }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      role: "",
    },
  });

  useEffect(() => {
    if (userData) {
      form.reset({
        firstName: userData.firstName,
        lastName: userData.lastName,
        company: userData.company ?? "",
        role: userData.role ?? "",
      });
    }
  }, [userData]);

  async function onSubmit(data: AccountFormValues) {
    setIsLoading(true);
    try {
      const response = await profileRequest("me/profile", data);
      console.log("Profile updated", response.data);
    } catch (err) {
      console.error("Update error", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TabsContent value="account">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Manage your account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="designer">
                            Product Designer
                          </SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="manager">
                            Product Manager
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save changes"}
                </Button>
              </CardFooter>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Subscription Plan</h3>
                <Alert>
                  <CreditCard className="h-4 w-4" />
                  <AlertDescription>
                    You are currently on the <strong>Pro Plan</strong>{" "}
                    ($29/month). Your next billing date is{" "}
                    <strong>July 1, 2023</strong>.
                  </AlertDescription>
                </Alert>
                <div className="flex justify-end">
                  <Button variant="outline">Manage Subscription</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Danger Zone</h3>
                <Alert className="border-destructive">
                  <AlertDescription>
                    Permanently delete your account and all of your content.
                  </AlertDescription>
                </Alert>
                <div className="flex justify-end">
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </TabsContent>
  );
};
