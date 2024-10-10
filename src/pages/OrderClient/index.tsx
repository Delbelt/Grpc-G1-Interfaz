import AddButton from "components/AddButton";
import CardListView from "components/CardListView";
import Container from "components/Container";
import Navbar from "components/Navbar";
import Title from "components/Title";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllOrder } from "services/OrderServices";
import { formatDate } from "utils/Helpers";

const OrderClient = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState<purchaseOrder[]>([]);

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    navigate(`/dashboard/orders/${id}`);
  };

  const handleAddOrder = () => {
    navigate("/dashboard/orders/new-order");
  };

  useEffect(() => {
    GetAllOrder()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.content);
        setOrders(data.content);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <Container direction='column'>
        <Container position='right'>
          <AddButton title='Agregar Orden' onClick={handleAddOrder} />
        </Container>
        <Container direction='row' wrap='wrap'>
          {orders.map((order) => {
            return (
              <CardListView
                titleFirstButton='Detalle'
                title={`Orden: ${order.idPurchaseOrder}`}
                key={order.idPurchaseOrder}
                onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleOnClick(evt, order.idPurchaseOrder)
                }
              >
                <Title>Estado: {order.state}</Title>
                <Title>Observaciones: {order.observations}</Title>
                <Title>Solicitud: {formatDate(order.requestDate)}</Title>
              </CardListView>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default OrderClient;
