import CardListView from "components/CardListView";
import Container from "components/Container";
import Navbar from "components/Navbar";
import { useNavigate } from "react-router-dom";

interface Product {
  name: string;
  code: string;
  size: string;
  color: string;
  active: boolean;
}

//  nombre, código, talle, color

const ProductContent: Product[] = [
  {
    code: "1111",
    active: true,
    color: "red",
    name: "producto 1",
    size: "M",
  },
  {
    code: "2222",
    active: true,
    color: "red",
    name: "producto 1",
    size: "M",
  },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    navigate(`/dashboard/Products/${id}`);
  };

  return (
    <div>
      <Navbar />
      <Container direction='row' wrap='wrap'>
        {ProductContent.map((product) => {
          return (
            <CardListView
              title={`Producto: ${product.code}`}
              key={product.code}
              onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleOnClick(evt, product.code)
              }
            >
              <h2>{product.code}</h2>
              <h2>{product.name}</h2>
              <h2>{product.color}</h2>
              <h2>{product.size}</h2>
              <h2>{String(product.active)}</h2>
            </CardListView>
          );
        })}
      </Container>
    </div>
  );
};

export default ProductPage;
