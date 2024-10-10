import Container from "components/Container";
import useNavigateModule from "hooks/useNavigateModule";
import { modulesProvider } from "utils/modules";

import styles from "./Navbar.module.css";

const NavbarProvider = () => {
  const { handleNavigateProvider, handleNavigateDashboard } = useNavigateModule();

  return (
    <Container position='right' classname={styles.navbarContainer}>
      <div className={styles.navbarPrincipal}>
        <div>
          <button className={styles.navbarPages} onClick={() => handleNavigateDashboard()}>
            Dashboard
          </button>
          <button className={styles.navbarPages} onClick={() => handleNavigateProvider()}>
            Proveedor
          </button>
        </div>
      </div>

      {modulesProvider.map((module) => {
        return (
          <button
            className={styles.navbarPages}
            onClick={() => handleNavigateProvider(module.module)}
          >
            {module.name}
          </button>
        );
      })}
    </Container>
  );
};

export default NavbarProvider;
