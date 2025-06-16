import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type Category } from "@/types/category";

type CategoryListProps = {
  categories: Category[];
  activeCategory?: number | null;
  onClickCategory?: (categoryId: number) => void;
};

export default function CategoryList({
  categories,
  activeCategory,
  onClickCategory,
}: CategoryListProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories?.length ? (
          categories.map((category) => (
            <Link href={`/categories/${category.name}`} key={category.id}>
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  onClickCategory?.(category.id);
                }}
                size="sm"
                className="mb-2"
              >
                {category.name}
              </Button>
            </Link>
          ))
        ) : (
          <div>Ainda sem categorias.</div>
        )}
      </div>
    </div>
  );
}
