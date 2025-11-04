"use client";

import Link from "next/link";
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CategoriesSidebar } from "./categories-sidebar";

import { useProductFilters } from "@/modules/products/hooks/use-product-filters";

interface Props {
    disabled?: boolean;
};

export const SearchInput = ({
    disabled,
}: Props) => {
    const [filters, setFilters] = useProductFilters();
    const [searchValue, setSearchValue] = useState(filters.search); 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const trpc = useTRPC();
    const session = useQuery(trpc.auth.session.queryOptions());

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setFilters({ search: searchValue });
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchValue, setFilters]);

    return (
        <div className="flex items-center gap-2 w-full">
            <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
            <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
                <Input 
                    className="pl-8" 
                    placeholder="Search products" 
                    disabled={disabled} 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
            <Button
                variant="outline" 
                className="lg:hidden size-12 shrink-0 flex"
                onClick={() => setIsSidebarOpen(true)}
            >
                <ListFilterIcon />
            </Button>
            {session.data?.user && (
                <Button
                    asChild
                    variant="secondary"
                    className="border-neutral-500 border-l border-t border-b border-r hover:bg-black hover:text-white"
                >
                    <Link prefetch href = "/library">
                       <BookmarkCheckIcon />
                       Library
                    </Link>
                </Button>
            )}
        </div>
    )
}