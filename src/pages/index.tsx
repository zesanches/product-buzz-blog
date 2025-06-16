import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import CategoryList from "@/components/CategoryList";
import { Card } from "@/components/ui/card";
import { fetchPostsAndCategories } from "@/lib/fetchPosts";
import { ArticleItem, type Article } from "@/types/article";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { type Category } from "@/types/category";
import { useState } from "react";

type Props = {
  articles: Article;
  featuredArticle: ArticleItem | null;
  categories: Category[];
};

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Index({
  articles,
  featuredArticle,
  categories,
}: Props) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    toast.success("Thank you for subscribing!", {
      description: "You will receive updates to your inbox.",
      action: {
        label: "Close",
        onClick: () => {
          toast.dismiss();
        },
      },
      duration: 5000,
      dismissible: true,
      position: "bottom-right",
    });

    form.reset();
  };

  return (
    <Layout>
      <Hero />

      <div className="container mx-auto px-4 py-12">
        {featuredArticle && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured</h2>
            <PostCard post={featuredArticle} isFeature={true} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles?.items?.length ? (
                articles.items?.map((post: ArticleItem) => (
                  <PostCard key={post.slug} post={post} />
                ))
              ) : (
                <div>Ainda sem posts.</div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="p-4">
              <CategoryList
                categories={categories}
                onClickCategory={(categoryId: number) => {
                  setActiveCategory(categoryId);
                }}
                activeCategory={activeCategory}
              />
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-lg mb-4">
                Subscribe to the Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the best recommendations straight to your inbox.
              </p>
              <Form {...form}>
                <form
                  className="space-y-2"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} placeholder="your@email.com" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { mainPosts, featuredArticle, categories } =
    await fetchPostsAndCategories();

  return {
    props: {
      articles: mainPosts,
      featuredArticle: featuredArticle || null,
      categories,
    },
  };
}
