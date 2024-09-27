import CardListView from "components/CardListView";
import Container from "components/Container";
import Navbar from "components/Navbar";
import { useNavigate } from "react-router-dom";

interface Store {
  code: string;
  active: boolean;
}

const StoreContent: Store[] = [
  {
    code: "1111",
    active: true,
  },
  {
    code: "2222",
    active: true,
  },
  {
    code: "3333",
    active: true,
  },
  {
    code: "4444",
    active: true,
  },
  {
    code: "5555",
    active: true,
  },
  {
    code: "6666",
    active: true,
  },
  {
    code: "7777",
    active: true,
  },
];

const StorePage = () => {
  const navigate = useNavigate();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    navigate(`/dashboard/Stores/${id}`);
  };

  return (
    <div>
      <Navbar />
      <Container direction='row' wrap='wrap'>
        {StoreContent.map((store) => {
          return (
            <CardListView
              title={`Tienda: ${store.code}`}
              key={store.code}
              onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleOnClick(evt, store.code)
              }
            >
              <h2>{store.code}</h2>
              <h2>{String(store.active)}</h2>
            </CardListView>
          );
        })}
      </Container>
    </div>
  );
};

export default StorePage;
