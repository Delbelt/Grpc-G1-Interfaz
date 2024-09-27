import Container from "components/Container";
import styles from "./Navbar.module.css";
import { modules } from "utils/modules";
import useNavigateModule from "hooks/useNavigateModule";

const Navbar = () => {
  const { handleNavigate, loginNavigate } = useNavigateModule();

  const handleLogout = () => {
    localStorage.removeItem("token");

    loginNavigate();
  };

  return (
    <Container position='right' classname={styles.navbarContainer}>
      <div className={styles.navbarPrincipal}>
        <button className={styles.navbarPages} onClick={() => handleNavigate()}>
          Dashboard
        </button>
      </div>

      {modules.map((module) => {
        return (
          <button className={styles.navbarPages} onClick={() => handleNavigate(module.module)}>
            {module.module}
          </button>
        );
      })}

      <button className={styles.navbarLogout} onClick={handleLogout}>
        Log out
      </button>
    </Container>
  );
};

export default Navbar;
