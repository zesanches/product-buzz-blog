import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { api } from "@/api/api";
import { Eye, EyeClosed } from "lucide-react";

const formSchema = z.object({
  email: z
    .string()
    .min(3, "Email must be at least 3 characters long")
    .email("Invalid email format"),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});

type FormValues = z.infer<typeof formSchema>;

type LoginFormProps = {
  onSuccess?: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async ({ email, password }: FormValues) => {
    try {
      setIsSubmitting(true);

      const {
        data: { access_token },
      } = await api.post("/auth/login", {
        email,
        password,
      });

      if (!access_token) {
        toast.toast({
          title: "Login inválido",
          description: "Verifique seu email e senha.",
          variant: "destructive",
          duration: 5000,
        });

        setIsSubmitting(false);
        return;
      }

      await fetch("/api/set-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: access_token }),
      });

      toast.toast({
        title: "Login successful",
        description: "You are now logged in.",
        variant: "default",
        duration: 5000,
      });
      router.push("/admin");
    } catch (error) {
      toast.toast({
        title: "Error",
        description: "Failed to Log in. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Card className="w-1/2 justify-self-center mt-14">
        <CardContent className="pt-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">LOGIN</h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4 w-full"
            >
              <div className="grid grid-cols-1 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Your admin email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="flex flex-1 w-full items-center gap-2">
                          <Input
                            {...field}
                            placeholder="Your admin password"
                            type={seePassword ? "text" : "password"}
                            className="flex-1"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setSeePassword(!seePassword)}
                            className="h-9"
                          >
                            {seePassword ? (
                              <EyeClosed size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-start">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Loggin in..." : "Log In"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default LoginForm;
