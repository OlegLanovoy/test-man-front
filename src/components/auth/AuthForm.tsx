// import type React from "react";

// SOLVE ISSUE WITH TAILWIND

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { Github, Mail } from "lucide-react";
import SignUp from "../auth/SignUp";
import SignIn from "./SignIn";

export default function AuthForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 to-indigo-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                className="data-[state=active]:bg-gray-300 data-[state=active]:text-gray-800"
                value="signin"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-gray-300 data-[state=active]:text-gray-800"
                value="signup"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <SignIn />
            <SignUp />
          </Tabs>

          {/* SEPARATOR  */}

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* GITHUB OR GOOGLE ETC */}

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-xs text-muted-foreground text-center">
            By clicking continue, you agree to our{" "}
            <Button variant="link" className="h-auto p-0 text-xs">
              Terms of Service
            </Button>{" "}
            and{" "}
            <Button variant="link" className="h-auto p-0 text-xs">
              Privacy Policy
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
