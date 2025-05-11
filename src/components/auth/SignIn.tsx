import { useState } from "react";
import { TabsContent } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { authUser } from "@/requests/UserRequest";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);
    const response = await authUser("auth/login", formData);
    console.log(response.message);
    setIsLoading(false);
  }

  return (
    <TabsContent value="signin">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            placeholder="name@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Button variant="link" className="px-0 font-normal h-auto text-xs">
              Forgot password?
            </Button>
          </div>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="****"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm font-normal">
            Remember me
          </Label>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </TabsContent>
  );
}
