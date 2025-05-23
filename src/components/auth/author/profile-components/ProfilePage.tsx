import { Globe } from "lucide-react";

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

import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { ProfileFormValues } from "@/validation-schemas/profile-schema";
import { useEffect, useState } from "react";
import { profileRequest } from "@/requests/Profilerequest";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  webSite: string;
  instagram: string;
  linkedIn: string;
}

export const ProfilePage = ({ userData }: { userData: UserData | null }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // CHECK OUT THIS CASE

  // const form = useForm({
  //   defaultValues: {
  //     fullName: `${userData?.firstName ?? ""} ${userData?.lastName ?? ""}`,
  //     email: userData?.email ?? "",
  //     age: userData?.age ?? 0,
  //   },
  // });

  // console.log(userData.bio);

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      bio: "",
      webSite: "",
      instagram: "",
      linkedIn: "",
    },
  });

  useEffect(() => {
    if (userData) {
      form.reset({
        fullName: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        bio: userData.bio,
        webSite: userData.webSite,
        instagram: userData.instagram,
        linkedIn: userData.linkedIn,
      });
    }
  }, [userData]);

  // SOME FAKE ONSUBMIT

  async function onSubmit(data: ProfileFormValues) {
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
    <TabsContent value="profile">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal information and how others see you on the
                platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        We'll never share your email with anyone else.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Brief description for your profile. URLs are hyperlinked.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <h3 className="mb-4 text-sm font-medium">Social Links</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="webSite"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="https://example.com"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="instagram"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Instagram</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <span className="mr-2 text-muted-foreground">
                                @
                              </span>
                              <Input
                                placeholder="twitter username"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="linkedIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn</FormLabel>
                        <FormControl>
                          <div className="flex items-center">
                            <Input placeholder="linkedin username" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                type="button"
                // onClick={() => form.reset(defaultValues)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save changes"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </TabsContent>
  );
};
