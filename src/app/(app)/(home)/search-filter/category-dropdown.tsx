"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";
import { CustomCategory } from "../types";

interface Props {
    category: CustomCategory;
    isActive?: boolean;
    isNavigationHovered?: boolean;
};

export const CategoryDropdown = ({
    category,
    isActive,
    isNavigationHovered
}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { getDropdownPosition } = useDropdownPosition(dropdownRef);

    const onMouseEnter = () => {
        if (category.subcategories) {
            setIsOpen(true);
        }
    };

    const onMouseLeave = () => {
        setIsOpen(false);
    }; 

    // Ấn vào nút sẽ mở và tắt dropdown trong mobile nhưng cấn sửa thêm
    // const toggleDropdown = () => {
    //     if (category.subcategories?.docs?.length) {
    //         setIsOpen(!isOpen);
    //     }
    // };

    const dropdownPosition = getDropdownPosition();

    return (
        <div
            className="relative"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            // onClick={toggleDropdown}
            ref={dropdownRef}
        >
            <div className="relative">
                <Button 
                    variant="link" 
                    className={cn("border-none shadow-none",
                    isActive && !isNavigationHovered && "bg-black text-white",
                    isOpen && "underline"    
                    )}
                >
                    <Link
                        href={`/${category.slug === "all" ? "" : category.slug}`}
                    >
                        {category.name}
                    </Link>
                </Button>
                {category.subcategories && category.subcategories.length > 0 && (
                    <div
                        className={cn(
                            "opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2", isOpen && "opacity-100"
                        )}
                    />
                )}
            </div>

            <SubcategoryMenu
                category={category}
                isOpen={isOpen}
                position={dropdownPosition}
            />
        </div>
    );
};