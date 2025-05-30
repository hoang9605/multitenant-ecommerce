"use client";

import { ListFilterIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

import { CustomCategory } from "../types";
import { CategoriesSidebar } from "./categories-sidebar";
import { Button } from "@/components/ui/button";

interface Props {
    disabled?: boolean;
    data: CustomCategory[];
};

export const SearchInput = ({
    disabled,
    data,
}: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex items-center gap-2 w-full">
            <CategoriesSidebar data={data} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
            <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
                <Input className="pl-8" placeholder="Search products" disabled={disabled} />
            </div>
            {/* TODO: add view all button*/}
            <Button
                variant="outline" 
                className="lg:hidden size-12 shrink-0 flex"
                onClick={() => setIsSidebarOpen(true)}
            >
                <ListFilterIcon />
            </Button>
            {/* TODO: add library button */}
        </div>
    )
}