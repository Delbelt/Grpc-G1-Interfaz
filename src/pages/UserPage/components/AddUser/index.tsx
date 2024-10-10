import useForm from "hooks/useForm";
import FormContainer from "components/FormContainer";

import styles from "./AddUser.module.css";

const AddUser = () => {
  const { hasError, setHasError, isValidForm, setIsValidForm } = useForm();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <FormContainer
      title='Crear Usuario'
      isValidForm={isValidForm}
      ErrorMessage={hasError}
      handleSubmit={handleSubmit}
    >
      <input
        // onChange={handleOnchange}
        type='text'
        placeholder='Usuario'
        name='username'
        // value={user.username}
        autoComplete='off'
      />
    </FormContainer>
  );
};

export default AddUser;
