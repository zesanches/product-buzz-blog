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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EditorText } from "../EditorText";
import { Bot } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/api/api";
import { type Category } from "@/types/category";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  price: z.string(),
  affiliateLink: z.string().url("Affiliate link must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  tags: z.string(),
  image: z.string().url("Image URL must be valid"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
});

type FormValues = z.infer<typeof formSchema>;

type CreatePostFormProps = {
  onSuccess: () => void;
  categories: Category[];
};

const CreatePostForm = ({ onSuccess, categories }: CreatePostFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCategoryCreating, setIsCategoryCreating] = useState(false);
  const toast = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      price: "$ 0.00",
      affiliateLink: "https://",
      category: "",
      tags: "",
      image: "https://",
      content: "",
    },
  });

  const { getValues } = form;
  const categorySelected = getValues("category");

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);

      const { price, image, affiliateLink, tags, ...rest } = values;

      await api.post("/article", {
        ...rest,
        tag: tags,
        products: [
          {
            price: price.replace("$", "").trim(),
            image: image.trim(),
            link: affiliateLink.trim(),
          },
        ],
      });

      onSuccess();
    } catch (error) {
      toast.toast({
        title: "Error",
        description: "Failed to create article. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreateCategory = async () => {
    try {
      setIsCategoryCreating(true);

      if (categorySelected.trim() === "") {
        toast.toast({
          title: "Error",
          description: "Category name cannot be empty.",
          variant: "destructive",
        });

        return;
      }

      await api.post("/category", { description: categorySelected });

      toast.toast({
        title: "Success",
        description: "Category created successfully.",
        variant: "default",
      });
      form.resetField("category");
    } catch (error) {
      toast.toast({
        title: "Error",
        description: "Failed to create category. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsCategoryCreating(false);
    }
  };

  const handleHelpAI = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "Você é um assistente útil." },
          { role: "user", content: "Qual é a capital do Brasil?" },
        ],
      }),
    });

    const data = await res.json();
    console.log(data.reply);
  };

  const TextAreaAIAssistant = () => {
    return (
      <div className="grid w-full gap-3">
        <Textarea
          placeholder="Type your message here."
          id="message-2"
          rows={8}
        />
        <p className="text-muted-foreground text-sm text-zinc-300">
          AI Assistant will fill in the content based on your request.
        </p>
      </div>
    );
  };

  const DialogHelpIA = () => {
    return (
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>AI Assistant</DialogTitle>
          <DialogDescription className="text-zinc-200">
            Use the <strong>AI assistant</strong> to help you generate content
            for your article. You can ask it to write a summary, generate ideas,
            or even create full sections of your article. Just type your request
            in the editor below and let the AI assist you.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <TextAreaAIAssistant />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    );
  };

  return (
    <Dialog>
      <DialogHelpIA />
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Create New Article</h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Article title" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="article-title" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="A brief description of the article"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="$ 99.90" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="affiliateLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Affiliate Link</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="https://example.com/product"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select {...field} defaultValue="">
                          <SelectTrigger id="category-selsect" className="w-64">
                            <SelectValue placeholder="Select a Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel className="px-3">
                                Categories
                              </SelectLabel>
                              {categories.map((category) => (
                                <SelectItem
                                  value={category.id}
                                  className="px-3"
                                >
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {categorySelected === "0" && (
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem className="flex gap-2">
                        <FormLabel>New Category</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter new category" />
                        </FormControl>
                        <FormMessage />
                        <Button
                          variant="secondary"
                          size="sm"
                          type="button"
                          onClick={() => {
                            handleCreateCategory();
                          }}
                          disabled={isCategoryCreating}
                        >
                          {isCategoryCreating ? "Creating..." : "Create"}
                        </Button>
                      </FormItem>
                    )}
                  />
                )}

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags (comma-separated)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="tech, gadgets, review" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://example.com/image.jpg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className="flex w-full justify-between items-center">
                        <FormLabel>Article Content</FormLabel>

                        <DialogTrigger>
                          <Button
                            variant="default"
                            size="sm"
                            aria-label="Generate content with AI"
                            type="button"
                          >
                            <Bot size={128} />
                            AI Assistant
                          </Button>
                        </DialogTrigger>
                      </div>
                      <FormControl>
                        <EditorText
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Publishing..." : "Publish Article"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default CreatePostForm;
