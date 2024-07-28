import { useGetProductQuery } from "@/redux/api/baseApi";
import MyCard from "../Mycard/MyCard";


const Card = () => {
  const { data, isLoading } = useGetProductQuery({});

  if (isLoading) {
    return <p>loading....</p>;
  }
  const { data: product } = data;

  return (
    <div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {product.map((product)=>(<MyCard key={product?._id} product={product}/>))}
      </div>
    </div>
  );
};

export default Card;
