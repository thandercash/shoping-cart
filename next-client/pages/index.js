import Hero from "../components/hero";
import Products from "../components/products";
import StoreCart from "../components/storeCart";
import ProductService from "../services/product";

export default function Home({ products }) {
  return (
    <>
      <Hero header="Web3 Store" description="Buy products with a crypto wallet" />
      <Products products={products} />
      <StoreCart />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await ProductService.getAll();
    return {
      props: {
        products: res.data || [],
      },
    };
  } catch (err) {
    return {
      props: {
        products: [],
      },
    };
  }
}
