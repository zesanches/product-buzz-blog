import { type Article } from "@/types/article";
import { type Category } from "@/types/category";

export async function fetchPostsAndCategories() {
  const resArticles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`);
  const articles: Article = await resArticles.json();

  const featuredArticle = articles.items?.[0] || null;
  const mainPosts = featuredArticle
    ? articles.items.filter(
        (article) => article.slug !== featuredArticle.slug
      )
    : articles.items;

    const resCategories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
    const categories: Category = await resCategories.json();

  return { mainPosts, featuredArticle, categories };
}
