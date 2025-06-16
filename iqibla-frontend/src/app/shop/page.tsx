import ProductCard from '@/components/ProductCard';

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
    tokopedia_url?: string; // Added: Optional string for Tokopedia URL
    shopee_url?: string;    // Added: Optional string for Shopee URL
    is_active: boolean;
    variants: ProductVariant[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

async function getProducts() {
    try {
        const res = await fetch('http://localhost:8081/api/v1/products', {
            next: { revalidate: 60 } // Revalidate every minute
        });
        
        if (!res.ok) throw new Error('Failed to fetch products');
        
        return res.json();
    } catch (error) {
        throw new Error('Failed to fetch products');
    }
}

export default async function ShopPage() {
    let products: Product[] = [];
    let error = null;

    try {
        products = await getProducts();
    } catch (e) {
        error = e instanceof Error ? e.message : 'Failed to load products';
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">
                    Failed to load products. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
}