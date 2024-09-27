import CardListView from "components/CardListView";
import Container from "components/Container";
import Navbar from "components/Navbar";
import { useNavigate } from "react-router-dom";

interface Product {
  name: string;
  code: string;
  size: string;
  color: string;
}

interface Stock {
  codeStore: string;
  quantity: number;
  product: Product;
}

// tienda (código), producto (nombre, código, talle, color) y cantidad

const StockContent: Stock[] = [
  {
    codeStore: "1111",
    quantity: 15,
    product: {
      code: "1111",
      color: "red",
      name: "Producto 1",
      size: "M",
    },
  },
];

const StockPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    navigate(`/dashboard/Stocks/${id}`);
  };

  return (
    <div>
      <Navbar />
      <Container direction='row' wrap='wrap'>
        {StockContent.map((stock) => {
          return (
            <CardListView
              title={`Stock: ${stock.codeStore}`}
              key={stock.codeStore}
              onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleOnClick(evt, stock.codeStore)
              }
            >
              <h2>{stock.codeStore}</h2>
              <h2>{stock.product.code}</h2>
              <h2>{stock.product.name}</h2>
              <h2>{stock.product.size}</h2>
              <h2>{stock.product.color}</h2>
              <h2>{stock.quantity}</h2>
            </CardListView>
          );
        })}
      </Container>
    </div>
  );
};

export default StockPage;
