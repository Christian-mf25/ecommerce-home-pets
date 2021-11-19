import {
  Input,
  Password,
  PrimaryButton,
  SecondaryButton,
} from "../../Styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../Providers/Login";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Container, ContainerForm, DivLogo, Form, HomeMain } from "./styles";
import Logo from "../../assets/image/logo-ecommerce.png";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginForm = () => {
  const token = JSON.parse(localStorage.getItem("@Pets:token"));
  const { login } = useLogin();
  const history = useHistory();

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  useEffect(() => {
    token && sendTo("/");
  }, [token]);

  const sendTo = (path) => {
    history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup.string().default(() => values.password),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (prop) => (event) => {
    console.log(values.password);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <HomeMain>
      <Container>
        <DivLogo>
          <img src={Logo} alt="logo" />
        </DivLogo>

        <ContainerForm>
          <Form>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(login)}>
              <Input
                label="E-mail"
                size="medium"
                variant="outlined"
                margin="dense"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              {/* <Input
                label="Password"
                size="medium"
                variant="outlined"
                margin="dense"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              /> */}

              <Password sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </Password>

              <PrimaryButton variant="contained" type="submit">
                Entrar
              </PrimaryButton>
            </form>

            <p>Ainda não tem conta?</p>
            <SecondaryButton
              variant="contained"
              onClick={() => sendTo("/register")}
            >
              Criar conta
            </SecondaryButton>
          </Form>
        </ContainerForm>
      </Container>
    </HomeMain>
  );
};

export default LoginForm;
