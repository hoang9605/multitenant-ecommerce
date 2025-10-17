import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";


interface ProductCardProps {
    id: string;
    name: string;
    imageUrl?: string | null;
    tenantSlug: string;
    tenantImageUrl?: string | null;
    reviewRating: number;
    reviewCount: number;
}

export const ProductCard = ({
    id,
    name,
    imageUrl,
    tenantSlug,
    tenantImageUrl,
    reviewRating,
    reviewCount,
}: ProductCardProps) => {

    return (
        <Link href={`$/library/${id}`}>
            <div className="transition-transform transform hover:scale-101 hover:-translate-y-1 border rounded-md bg-white border-black overflow-hidden h-full flex flex-col">
                <div className="relative aspect-square border-b border-black">
                    <Image
                        alt={name}
                        fill
                        src={imageUrl || "/placeholder.png"}
                        className="object-cover" 
                    />
                </div>
                <div className="p-4 border-y flex flex-col gap-3 flex-1">
                    <h2 className="text-lg font-medium line-clamp-4">{name}</h2>
                    {/* TODO: Redirect to user shop page */}
                    <div className="flex items-center gap-2">
                        {tenantImageUrl && (
                            <Image
                                alt={tenantSlug}
                                src={tenantImageUrl}
                                width={16}
                                height={16}
                                className="rounded-full border border-black shrink size-[16px]"
                            />
                        )}
                        <p className="text-sm underline font-medium">{tenantSlug}</p>
                    </div>
                    {reviewCount > 0 && (
                        <div className="flex items-center gap-1">
                            <StarIcon className="size-3.5 fill-black" />
                            <p className="text-sm font-medium">
                                {reviewRating} ({reviewCount}) 
                            </p>
                        </div>
                    )}
                </div>            
            </div>
        </Link>
    )
};

export const ProductCardSkeleton = () => {
    return (
        <div className="w-full aspect-3/4 bg-neutral-200 rounded-lg animate-pulse"/>
    );
}