import Link from "next/link";

import { Category } from "@/payload-types";

import { CategoriesGetManyOutput } from "@/modules/categories/type";

interface Props {
    category: CategoriesGetManyOutput[1]; 
    isOpen: boolean;
}

export const SubcategoryMenu = ({ 
    category,
    isOpen, 
}: Props) => {
    if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
        return null;
    }

    const backgroundColor = category.color || "white";

    return (
        <div
            className="absolute z-50"
            style={{
                top: "100%",
                left: 0,
            }}
        >
            {/* Create invisible bridge maintain hover */}
            <div className="h-3 w-60" />
            <div 
            style={{ backgroundColor }}
            className="w-60 text-black rounded-md overflow-hidden border border-black">
                <div>
                    {category.subcategories?.map((subcategory: Category) => (
                        <Link 
                            key={subcategory.slug} 
                            href={`/${category.slug}/${subcategory.slug}`} 
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center font-medium"
                            >
                            {subcategory.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};