import Link from "next/link";

import { Category } from "@/payload-types/";
import { CustomCategory } from "../types";

interface Props {
    category: CustomCategory; 
    isOpen: boolean;
    position: { top: number; left: number };
}

export const SubcategoryMenu = ({ 
    category,
    isOpen, 
    position 
}: Props) => {
    if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
        return null;
    }

    const backgroundColor = category.color || "white";

    return (
        <div
            className="fixed z-100"
            style={{
                top: position.top,
                left: position.left,
            }}
        >
            {/* Create invisible bridge maintain hover */}
            <div className="h-3 w-60" />
            <div 
            style={{ backgroundColor }}
            className="w-60 text-black rounded-md overflow-hidden border">
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