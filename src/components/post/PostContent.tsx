import { Badge } from "@/components/ui/badge";
import { ArticleItem } from "@/types/article";
import { Tag } from "lucide-react";
import { Editor } from "primereact/editor";

type PostContentProps = {
  frontmatter: ArticleItem;
  htmlContent: string;
};

export default function PostContent({
  frontmatter,
  htmlContent,
}: PostContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <div className="mb-8 text-lg text-muted-foreground">
        {frontmatter.content}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 my-6">
        <Tag className="h-4 w-4 mr-1" />
        {frontmatter.tag.map((tag) => (
          <Badge key={tag} variant="secondary" className="mr-2">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="card">
        <Editor value={htmlContent} readOnly style={{ height: "320px" }} />
      </div>
    </div>
  );
}
