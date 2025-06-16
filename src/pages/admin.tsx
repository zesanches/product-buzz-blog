import { Suspense, useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoadingArticles from "@/components/loading/LoadingArticle";
import { Button } from "@/components/ui/button";
import AdminPostList from "@/components/admin/AdminPostList";
import CreatePostForm from "@/components/admin/CreatePostForm";
import { useToast } from "@/hooks/use-toast";
import { GetServerSideProps } from "next";
import nookies from "nookies";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { fetchPostsAndCategories } from "@/lib/fetchPosts";
import { type Category } from "@/types/category";

type AdminPageProps = {
  categories: Category[];
  token: string | null;
};

const AdminPage = ({ categories, token }: AdminPageProps) => {
  const [activeTab, setActiveTab] = useState("posts");
  const { toast } = useToast();
  const router = useRouter();
  const newCategories: Category[] = [
    ...categories,
    { id: "0", name: "New Category" },
  ];

  if (!token) {
    return (
      <Layout token={token}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Access Denied</h1>
          <p className="text-muted-foreground">
            You do not have permission to access this page.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => router.push("/login-admin")}
          >
            Go to Login
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

        <Tabs
          defaultValue="posts"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="create">Create New</TabsTrigger>
          </TabsList>

          <Suspense fallback={<LoadingArticles />}>
            <TabsContent value="posts">
              <AdminPostList />
            </TabsContent>
          </Suspense>

          <TabsContent value="create">
            <CreatePostForm
              categories={newCategories}
              onSuccess={() => {
                setActiveTab("posts");
                toast({
                  title: "Success!",
                  description: "Post created successfully.",
                });
              }}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  const { categories } = await fetchPostsAndCategories();

  if (!token) {
    return { redirect: { destination: "/login-admin", permanent: false } };
  }

  return {
    props: {
      categories,
      token: token || null,
    },
  };
};

export default AdminPage;
