import { useState } from "react";

import styles from "./App.module.css";
import ExampleResponse from "components/ExampleResponse";

// INITIAL COMMIT: Se modificara en futuras revisiones

type Status = "idle" | "loading" | "successfull" | "rejected";

interface dataContent<T> {
  content: T;
}

const App = () => {
  const [data, setData] = useState<string>();
  const [statusSayHello, setStatusSayHello] = useState<Status>("idle");
  const [statusGetUserById, setStatusGetUserById] = useState<Status>("idle");

  const handleStatus = (status: string) => {
    switch (status) {
      case "idle":
        return "En espera";
      case "loading":
        return "Cargando...";
      case "successfull":
        return data;
      case "rejected":
        return "Error en la confirmacion";
      default:
        return "Esperando confirmacion";
    }
  };

  const handleStylesStatus = (status: string) => {
    switch (status) {
      case "idle":
        return "idle";
      case "loading":
        return "loading";
      case "successfull":
        return "successfull";
      case "rejected":
        return "rejected";
      default:
        return "Esperando confirmacion";
    }
  };

  const handleSubmitSayHello = async () => {
    const queryParams = "Prueba";
    const url = `https://localhost:7139/Greeter/hello?message=${queryParams}`;

    setStatusSayHello("loading");

    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: dataContent<string>) => {
        setData(data.content);
        setStatusSayHello("successfull");
      })
      .catch((error) => {
        setStatusSayHello("rejected");
        console.log(error);
      })
      .finally(() => {
        const intervalId = setInterval(() => {
          setStatusSayHello("idle");
          clearInterval(intervalId);
        }, 4000);
      });
  };

  const handleSubmitUser = async () => {
    const queryParams = "1";
    const url = `https://localhost:7139/Greeter/user/${queryParams}`;

    setStatusGetUserById("loading");

    interface userGrpc {
      id: string;
      name: string;
    }

    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: dataContent<userGrpc>) => {
        const formatData = `Id:${data.content.id} Name:${data.content.name}`;
        setData(formatData);
        setStatusGetUserById("successfull");
      })
      .catch((error) => {
        setStatusGetUserById("rejected");
        console.log(error);
      })
      .finally(() => {
        const intervalId = setInterval(() => {
          setStatusGetUserById("idle");
          clearInterval(intervalId);
        }, 4000);
      });
  };

  return (
    <div className={styles.appContainer}>
      <ExampleResponse
        handleStatus={handleStatus}
        handleStylesStatus={handleStylesStatus}
        handleSubmit={handleSubmitSayHello}
        status={statusSayHello}
        title='SayHello Test'
      />
      <ExampleResponse
        handleStatus={handleStatus}
        handleStylesStatus={handleStylesStatus}
        handleSubmit={handleSubmitUser}
        status={statusGetUserById}
        title='GetUserById Test'
      />
    </div>
  );
};

export default App;
