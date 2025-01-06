import axios from "axios";
import { useEffect } from "react";
import Domain from "../../services/Endpoint";

const ProductPage = () => {
  const call = async () => {
    try {
      // const response = await axios(`${Domain}/user/products`);

      const response = {
        data: {
          status: 200,
          data: {
            name: 'rice 5kg',
            description: 'rice is one bag',
            price: 5.00,
          },
        },
      };
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    call();
  }, []);

  return (
    <div>
      <h1>This is the protected product page</h1>
    </div>
  );
};

export default ProductPage;
