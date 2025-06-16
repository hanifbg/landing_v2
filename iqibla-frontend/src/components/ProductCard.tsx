import Link from 'next/link';
import Image from 'next/image';

type JSONArray = string[];
type JSONMap = { [key: string]: any };

interface ProductVariant {
    id: string;
    product_id: string;
    sku: string;
    name: string;
    price: number;
    stock_quantity: number;
    image_url: string;
    weight: number;
    dimensions?: {
        length: number;
        width: number;
        height: number;
        unit: string;
    };
    attribute_values: JSONMap;
    specifications: JSONMap;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    features: JSONArray;
    in_box_items: JSONArray;
    image_urls: JSONArray;
    is_active: boolean;
    variants: ProductVariant[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const defaultImage = '/placeholder-product.jpg';
    const firstVariant = product.variants[0];

    return (
        <Link href={`/shop/${product.id}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
                <div className="relative w-full aspect-square">
                    <Image
                        src={product.image_urls[0] || defaultImage}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-xl font-semibold text-blue-600">
                        ${firstVariant.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;