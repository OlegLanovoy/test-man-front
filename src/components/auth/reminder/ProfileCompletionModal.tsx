"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  User,
  Shield,
  Settings,
} from "lucide-react";

export function ProfileCompletionModal() {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState("profile");
  const [progress, setProgress] = useState(1);

  const steps = ["profile", "account", "security"];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
      setProgress(currentIndex + 2);
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
      setProgress(currentIndex);
    }
  };

  const handleComplete = () => {
    // Here you would typically save all the form data
    // setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className="sm:max-w-[500px]"
      >
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

        <Tabs value={currentStep} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger
              value="profile"
              onClick={() => {
                setCurrentStep("profile");
                setProgress(1);
              }}
              className="flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger
              value="account"
              onClick={() => {
                setCurrentStep("account");
                setProgress(2);
              }}
              className="flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Account</span>
            </TabsTrigger>
            <TabsTrigger
              value="security"
              onClick={() => {
                setCurrentStep("security");
                setProgress(3);
              }}
              className="flex items-center gap-2"
            >
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Security</span>
            </TabsTrigger>
          </TabsList>

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
                    <SelectItem value="utc+8">
                      China Standard Time (UTC+8)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>

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
        </Tabs>

        <DialogFooter className="flex justify-between mt-6">
          <div>
            {currentStep !== "profile" && (
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
          </div>
          <div>
            {currentStep !== "security" ? (
              <Button onClick={handleNext}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleComplete}>Complete Profile</Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
