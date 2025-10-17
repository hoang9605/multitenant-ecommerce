import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { useCart } from "@/modules/checkout/hooks/use-cart";


interface Props {
    tenantSlug: string;
    productId: string;
    isPurchased?: boolean;
};

export const CartButton = ({ tenantSlug, productId, isPurchased }: Props) => {
    const cart = useCart(tenantSlug)

    if (isPurchased) {
        return (
            <Button
                variant="outline"
                asChild
                className="flex-1 font-medium bg-white hover:bg-black hover:text-white"
            >
                <Link prefetch href={`/library/${productId}`}>
                    View in Library
                </Link>
            </Button>
        );
    }

    return (
        <Button
            variant="outline"
            className={cn("flex-1 bg-green-300", cart.isProductInCart(productId) && "bg-red-500")}
            onClick={() => cart.toggleProduct(productId)}
        >
            {cart.isProductInCart(productId)
                ? "Remove from cart"
                : "Add to cart"
            }
        </Button>
    );
};