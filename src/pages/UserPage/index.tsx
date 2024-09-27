import CardListView from "components/CardListView";
import Container from "components/Container";
import Navbar from "components/Navbar";
import { useNavigate } from "react-router-dom";

interface User {
  code: string;
  username: string;
  store: string;
  active: boolean;
}

// nombre de usuario, tienda, estado

const UserContent: User[] = [
  {
    code: "1111",
    username: "user1",
    store: "1111",
    active: true,
  },
];

const UserPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    navigate(`/dashboard/Users/${id}`);
  };

  return (
    <div>
      <Navbar />
      <Container direction='row' wrap='wrap'>
        {UserContent.map((user) => {
          return (
            <CardListView
              title={`Tienda: ${user.username}`}
              key={user.username}
              onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleOnClick(evt, user.code)
              }
            >
              <h2>{user.username}</h2>
              <h2>{user.store}</h2>
              <h2>{String(user.active)}</h2>
            </CardListView>
          );
        })}
      </Container>
    </div>
  );
};

export default UserPage;
