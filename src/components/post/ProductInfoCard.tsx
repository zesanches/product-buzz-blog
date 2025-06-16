import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type PostFrontmatter } from "@/lib/posts";
import { event } from "@/lib/analytics";

type ProductInfoCardProps = {
  frontmatter: PostFrontmatter;
};

export default function ProductInfoCard({ frontmatter }: ProductInfoCardProps) {
  const handleClickOffer = () => {
    // Track affiliate link click
    event({
      action: "click_affiliate_link",
      category: "conversion",
      label: frontmatter.title,
    });
  };

  return (
    <Card className="p-6 mb-8 sticky top-24">
      <h3 className="font-bold text-xl mb-4">Product Information</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Price:</p>
          <p className="font-semibold">{frontmatter.price}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Category:</p>
          <Link href={`/categories/${frontmatter.category}`}>
            <Badge className="cursor-pointer">{frontmatter.category}</Badge>
          </Link>
        </div>

        <a
          href={frontmatter.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6"
          onClick={handleClickOffer}
        >
          <Button className="w-full">View Offer</Button>
        </a>
        <p className="text-xs text-center text-muted-foreground mt-2">
          *Price may vary since the last update
        </p>
      </div>
    </Card>
  );
}
