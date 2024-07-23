"use client";
import * as React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  framework: z.string().min(1, "Framework is required"),
});

type FormType = z.infer<typeof formSchema>;

type FormErrors = {
  name?: string[] | undefined;
  framework?: string[] | undefined;
};

export function CardWithForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<FormType>({
    name: "",
    framework: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({
    name: undefined,
    framework: undefined,
  });

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleDeploy = (formData: FormData) => {
    const result = formSchema.safeParse(Object.fromEntries(formData));
    if (result.success) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        formRef.current?.reset();
      }, 3000);
    } else {
      setErrors(result.error.flatten().fieldErrors);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <form action={handleDeploy} ref={formRef}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Name of your project"
              />
              {errors.name &&
                errors.name.map((error, index) => (
                  <div key={index} className="text-red-500 text-xs">
                    {error}
                  </div>
                ))}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select
              name="framework" 
              >
                <SelectTrigger >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
              {errors.framework &&
                errors.framework.map((error, index) => (
                  <div key={index} className="text-red-500 text-xs">
                    {error}
                  </div>
                ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button disabled={isLoading}>
            {isLoading ? "Deploying..." : isSuccess ? "Deployed!" : "Deploy"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
