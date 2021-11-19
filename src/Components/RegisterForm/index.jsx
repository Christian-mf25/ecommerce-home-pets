import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { useRegister } from "../../Providers/Register";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../assets/image/logo-ecommerce.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import * as yup from "yup";
import {
  Input,
  PrimaryButton,
  SecondaryButton,
  StyledFormControl,
} from "../../Styles/global";
import {
  Container,
  ContainerForm,
  ContainerModal,
  DivLogo,
  Form,
  HomeMain,
} from "./style";

const RegisterForm = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const {
    handleChange,
    userType,
    showModalType,
    showType,
    sendTo,
    registerForm,
  } = useRegister();

  useEffect(() => {
    token && sendTo("/home");
  }, [token]);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    type: yup.string().default(() => userType),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(7, "Minimo de 7 digitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, minúscula número e um caractere special"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      {showType ? (
        <HomeMain>
          <ContainerModal>
            <DivLogo>
              <img src={Logo} alt="logo" />
            </DivLogo>

            <ContainerForm>
              <Form>
                <h3>Selecione um tipo de cadastro</h3>
                <form>
                  <StyledFormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>Tipo de cadastro*</InputLabel>
                    <Select
                      label="Tipo de cadastro*"
                      onChange={handleChange}
                      value={userType}
                    >
                      <MenuItem value={"ONG"}>ONG</MenuItem>
                      <MenuItem value={"PJ"}>Pessoa Jurídica</MenuItem>
                      <MenuItem value={"PF"}>Pessoa Física</MenuItem>
                    </Select>
                  </StyledFormControl>
                  <PrimaryButton type="button" onClick={showModalType}>
                    Continuar
                  </PrimaryButton>
                </form>
                <p>Já possui uma conta?</p>
                <SecondaryButton onClick={() => sendTo("/login")}>
                  Login
                </SecondaryButton>
              </Form>
            </ContainerForm>
          </ContainerModal>
        </HomeMain>
      ) : (
        <HomeMain>
          <Container>
            <DivLogo>
              <img src={Logo} alt="logo" />
            </DivLogo>

            <ContainerForm>
              <Form>
                <h2>Cadastro</h2>

                <form onSubmit={handleSubmit(registerForm)}>
                  <Input
                    label="E-mail"
                    size="medium"
                    variant="outlined"
                    margin="dense"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />

                  <Input
                    disabled
                    label={userType}
                    value={userType}
                    size="medium"
                    variant="outlined"
                    margin="dense"
                    color="primary"
                    {...register("type")}
                    error={!!errors.type}
                    helperText={errors.type?.message}
                  />

                  <Input
                    type="password"
                    label="Senha"
                    size="medium"
                    variant="outlined"
                    margin="dense"
                    color="primary"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />

                  <Input
                    type="password"
                    label="Confirmar senha"
                    size="medium"
                    variant="outlined"
                    margin="dense"
                    color="primary"
                    {...register("confirm_password")}
                    error={!!errors.confirm_password}
                    helperText={errors.confirm_password?.message}
                  />

                  <PrimaryButton variant="contained" type="submit">
                    Registre-se
                  </PrimaryButton>
                </form>
              </Form>
            </ContainerForm>
          </Container>
        </HomeMain>
      )}
    </>
  );
};

export default RegisterForm;
