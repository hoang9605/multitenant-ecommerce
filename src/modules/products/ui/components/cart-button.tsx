import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { useCart } from "@/modules/checkout/hooks/use-cart";

interface Props {
    tenantSlug: string;
    productId: string
};

export const CartButton = ({ tenantSlug, productId }: Props) => {
    const cart = useCart(tenantSlug)

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