import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale"; // Changed to enUS for English locale
import { type PostFrontmatter } from "@/lib/posts";

type PostHeaderProps = {
  frontmatter: PostFrontmatter;
};

export default function PostHeader({ frontmatter }: PostHeaderProps) {
  // Format the date for English (e.g., "May 24, 2025")
  const formattedDate = format(new Date(frontmatter.date), "MMMM d, yyyy", {
    locale: enUS,
  });

  return (
    <div
      className="relative w-full h-64 md:h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(${frontmatter.image || "/placeholder.svg"})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <div className="container mx-auto px-4 py-6">
          <Badge className="mb-2">{frontmatter.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {frontmatter.title}
          </h1>
          <div className="flex items-center mt-4 text-white text-opacity-80">
            <Calendar size={16} className="mr-2" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
