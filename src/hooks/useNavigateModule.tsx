import { useNavigate } from "react-router-dom";

const useNavigateModule = () => {
  const navigate = useNavigate();

  const handleNavigate = (module = "") => {
    navigate(`/dashboard/${module}`);
  };

  const loginNavigate = () => {
    navigate("/");
  };

  return { handleNavigate, loginNavigate };
};

export default useNavigateModule;
