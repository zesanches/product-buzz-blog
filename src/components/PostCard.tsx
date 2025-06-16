import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { ArticleItem, type Article } from "@/types/article";

type PostCardProps = {
  post: ArticleItem;
  isFeature?: boolean;
};

export default function PostCard({ post, isFeature = false }: PostCardProps) {
  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: enUS,
  });

  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(post.products[0].price));

  const imageUrl = post.products[0].imagem || "/placeholder.svg";

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-lg ${
        isFeature ? "md:grid md:grid-cols-2 gap-0" : ""
      }`}
    >
      <div className={`${isFeature ? "h-full" : "h-48"} relative`}>
        <img
          src={imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
        <Badge className="absolute top-2 right-2">{post.category}</Badge>
      </div>

      <div>
        <CardHeader>
          <div className="flex items-center text-sm text-muted-foreground gap-2 mb-2">
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
          <Link href={`/posts/${post.slug}`}>
            <h3 className="font-bold text-xl hover:text-primary transition-colors">
              {post.title}
            </h3>
          </Link>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
            {post.description}
          </p>
          <div className="mt-4">
            <span className="font-semibold">{formattedCurrency}</span>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Link href={`/posts/${post.slug}`}>
            <Button variant="outline">Read More</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
}
