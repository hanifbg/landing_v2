'use client';

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { API_CONFIG } from '@/config/api';
import { useTranslation } from '@/contexts/LanguageContext';

type JSONArray = string[];
type JSONMap = { [key: string]: unknown };

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
    tokopedia_url?: string;
    shopee_url?: string;
    is_active: boolean;
    variants: ProductVariant[];
    created_at: string;
    updated_at: string;
    deleted_at?: string;
}

interface CategoryDetailsResponse {
    id: string;
    name: string;
    slug: string;
    hero_headline?: string;
    hero_subheadline?: string;
    hero_image_url?: string;
    section3_headline?: string;
    section3_subheadline?: string;
    section3_image_url?: string;
    meta_title?: string;
    meta_description?: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    products: Product[];
}

export default function CategoryPage() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const { t } = useTranslation();
    
    const [category, setCategory] = useState<CategoryDetailsResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [featuredProducts] = useState<Product[]>([]);

    const fetchCategory = async (categorySlug: string) => {
        try {
            setLoading(true);
            setError(null);
            
            const res = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}/${categorySlug}`);
            
            if (!res.ok) {
                if (res.status === 404) {
                    notFound();
                    return;
                }
                throw new Error(`Failed to fetch category: ${res.status}`);
            }
            
            const data: CategoryDetailsResponse = await res.json();
            setCategory(data);
        } catch (err) {
            console.error('Error fetching category:', err);
            setError(err instanceof Error ? err.message : 'Failed to load category');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (slug) {
            fetchCategory(slug);
        }
    }, [slug]);

    // Set document title dynamically
    useEffect(() => {
        if (category?.meta_title) {
            document.title = category.meta_title;
        }
    }, [category?.meta_title]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-xl">{t('category.loading')}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-xl">{error}</p>
            </div>
        );
    }

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500 text-xl">{t('category.notFound')}</p>
            </div>
        );
    }

    return (
        <main className="bg-white text-gray-900">
            {/* Hero Banner */}
            <section className="relative bg-black">
                <Image
                    alt={category.hero_headline || category.name}
                    className="w-full object-cover object-center max-h-[280px]"
                    height={280}
                    src={category.hero_image_url || "https://storage.googleapis.com/a1aa/image/a7749f44-0629-45d2-7df6-df99bb77a0b5.jpg"}
                    width={1280}
                    priority
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20">
                    <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl max-w-md leading-tight">
                        {category.hero_headline || category.name}
                    </h1>
                    {category.hero_subheadline && (
                        <p className="text-white text-xs sm:text-sm mt-1 max-w-xs">
                            {category.hero_subheadline}
                        </p>
                    )}
                </div>
            </section>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="max-w-[1280px] mx-auto px-4 py-3 text-xs text-gray-400 select-none">
                <ol className="flex flex-wrap gap-1">
                    <li>
                        <Link className="hover:underline text-gray-300" href="/">
                            {t('nav.home')}
                        </Link>
                        <span className="mx-1">/</span>
                    </li>
                    <li aria-current="page" className="text-gray-500">
                        {category.name}
                    </li>
                </ol>
            </nav>

            {/* Products Grid */}
            <section className="max-w-[1280px] mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <section className="bg-gray-50 py-10">
                <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
                    <Image
                        alt={category.section3_headline || "Category info"}
                        className="rounded-md w-full max-w-[400px] object-cover"
                        height={280}
                        src={category.section3_image_url || "https://storage.googleapis.com/a1aa/image/cecdecfa-f0a4-4293-f852-1cac5fae8b55.jpg"}
                        width={400}
                    />
                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold max-w-md leading-snug">
                            {category.section3_headline || "Elevate Your Spiritual Practice with Innovative Smart Technology"}
                        </h2>
                        {category.section3_subheadline && (
                            <p className="text-gray-600 mt-4 max-w-md">
                                {category.section3_subheadline}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* You May Also Like */}
            {featuredProducts.length > 0 && (
                <section className="max-w-[1280px] mx-auto px-4 py-6">
                    <h3 className="text-center font-semibold text-lg mb-6">
                        You May Also Like
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <ProductCard key={`featured-${product.id}`} product={product} />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}