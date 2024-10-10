import Container from "components/Container";
import Navbar from "components/Navbar";

import styles from "./HomeProvider.module.css";
import { modulesProvider } from "utils/modules";
import CardModule from "components/CardModule";
import useNavigateModule from "hooks/useNavigateModule";
import NavbarProvider from "components/NavbarProvider";

const HomeProvider = () => {
  const { handleNavigateProvider } = useNavigateModule();
  return (
    <div>
      <NavbarProvider />
      <Container direction='column'>
        <h2>PROVEEDOR</h2>
        <Container classname={styles.homeContainer}>
          {modulesProvider.map((module) => {
            return (
              <CardModule
                module={module.name}
                onClick={() => handleNavigateProvider(module.module)}
              />
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default HomeProvider;
