import Container from "components/Container";
import AddButton from "components/AddButton";
import CardListView from "components/CardListView";
import Title from "components/Title";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { GetAllProductByState } from "services/ProductServices";
import NavbarProvider from "components/NavbarProvider";

import styles from "./ProductProvider.module.css";

interface Product {
  name: string;
  code: string;
  size: string;
  color: string;
  active: boolean;
}

const ProductProvider = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product[]>([]);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    navigate(`/dashboard/Products/${id}`);
  };

  const handleAddStore = () => {
    navigate("/dashboard/Products/create");
  };

  useEffect(() => {
    GetAllProductByState(false)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data.content.products);
      });
  }, []);

  return (
    <div>
      <NavbarProvider />
      <Container direction='column'>
        <Container position='right'>
          <AddButton title='Agregar Producto' onClick={handleAddStore} />
        </Container>
        <Container direction='row' wrap='wrap'>
          {product.map((product) => {
            return (
              <CardListView
                title={`Producto: ${product.code}`}
                key={product.code}
                onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleOnClick(evt, product.code)
                }
              >
                <Title>Codigo: {product.code}</Title>
                <Title>Nombre: {product.name}</Title>
                <Title>Color: {product.color}</Title>
                <Title>Tamaño: {product.size}</Title>
              </CardListView>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default ProductProvider;
