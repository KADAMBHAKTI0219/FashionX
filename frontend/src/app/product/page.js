import ProductHero from "../../components/product/ProductHero";
import ProductSteps from "../../components/product/ProductSteps";
import ProductComparison from "../../components/product/ProductComparison";
import FAQ from "../../components/home/faq";

export const metadata = {
  title: 'Product | FashionX',
  description: 'Learn how our AI generated fashion models work',
};

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      {/* Product Hero Section */}
      <ProductHero />
      
      {/* Product Steps Section with Sticky Scroll */}
      <ProductSteps />
      
      {/* Product Comparison Section */}
      <ProductComparison />
      
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}