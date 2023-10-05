import { useLoaderData } from "react-router-dom";
import { getProducts } from "../api/products";
import getPrice from "../utilties/getPrice";

export async function productLoader({ params }) {
  const product = await getProducts(params.productId);
  return { product };
}

export default function Product() {
  const { product } = useLoaderData();
  const price = getPrice(product);
  return (
    <div className="mx-auto mt-10 flex max-w-5xl p-8">
      <div className="">
        <img
          className="w-96 object-contain"
          src={product.featuredImage.url}
          alt=""
        />
      </div>
      <div className="ml-4 flex w-1/2 flex-col flex-wrap justify-between p-4">
        <p className="text-4xl">{product.title}</p>
        <p className="mt-2 text-2xl font-bold text-sky-700">${price}</p>
        <p className="p-4 text-lg ">{product.description}</p>
        <button className=" mt-auto flex  justify-center gap-4 border border-gray-400 font-bold text-gray-50 outline-none transition-colors duration-300 hover:bg-gray-50 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M220.61 60.16A6 6 0 0 0 216 58H53l-5.17-28.5A14 14 0 0 0 34.05 18H16a6 6 0 0 0 0 12h18a2 2 0 0 1 2 1.64l25.51 140.3a21.93 21.93 0 0 0 6.24 11.77a26 26 0 1 0 38.14 6.29h52.22A26 26 0 1 0 180 178H83.17a10 10 0 0 1-9.84-8.21L69.73 150H188.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91ZM98 204a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm96 0a14 14 0 1 1-14-14a14 14 0 0 1 14 14Zm3.94-74.21a10 10 0 0 1-9.84 8.21H67.55L55.19 70h153.62Z"
            ></path>
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
}
