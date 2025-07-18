"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { NavbarSidebar } from "./navbar-sidebar";


const poppins  = Poppins({
    subsets: ["latin"],
    weight: ["700"],
    }   
);

interface NavbarItemProps{
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
};

const NavbarItem = ({
    href,
    children,
    isActive,
    }: NavbarItemProps) => {
    return (
        <Button
        asChild
        variant="outline"
        className={cn("bg-transparent h-full flex hover:bg-black hover:text-white shadow-none rounded-none hover:border-primary border-none px-3.5 text-lg w-auto", isActive && "bg-black text-white hover:bg-black hover:text-white")}
        >
        <Link href={href}>
            {children}      
        </Link>
        </Button> 
    );
};

const navbarItems = [
    {href: "/",children:"Home"},
    {href: "/about",children:"About"},
    {href: "/features",children:"Features"},
    {href: "/pricing",children:"Pricing"},
    {href: "/contact",children:"Contact"},
];


export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return(
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center" >
            <span className={cn("text-5xl font-semibold", poppins.className )}>
            logo
            </span>
            </Link>

            <NavbarSidebar 
                items={navbarItems}
                open={isSidebarOpen}
                onOpenChange={setIsSidebarOpen}
            />

            <div className="items-center hidden lg:flex w-full pl-5">
                {navbarItems.map((item)=>(
                    <NavbarItem 
                        key= {item.href}
                        href= {item.href}
                        isActive={pathname === item.href}
                        >
                        
                        {item.children}
                    </NavbarItem> 
                ))}
            </div>
            <div className="hidden lg:flex items-center space-x-4">

                <Button 
                asChild 
                variant="secondary"
                className="border-black border-l border-t border-b border-r px-6 h-12 rounded-full bg-white hover:bg-gray-100 hover:text-black transition-colors text-lg">
                    <Link href="/sign-in">
                        Log in
                    </Link>
                </Button>
                <Button 
                asChild
                className="border-black border-l border-t border-b border-r px-6 h-12 rounded-full bg-black hover:bg-gray-800 hover:text-white transition-colors text-lg mr-4">
                    <Link href="/sign-up">
                        Start Selling
                    </Link>
                </Button>
            </div>

            <div className="flex lg:hidden items-center justify-center">
                <Button
                  variant="ghost"
                  className="size-12 border-transparent bg-white"
                  onClick={() => setIsSidebarOpen(true)}
                >
                    <MenuIcon />
                </Button>
            </div>
        </nav>
    );
};