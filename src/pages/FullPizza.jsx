import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62f3b29ea84d8c968129e3d9.mockapi.io/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        console.log("ошибка");
        alert("Ощибка пиццы не найдены")
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;
