import { useNavigate } from "react-router-dom";
import { useLoginStore, user } from "../../store/Store";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextInput } from "../../components/filterNetwork/FilterNetwork.style";
import { useEffect } from "react";
import {
  ButtonStyle,
  ErrorLabel,
  FormLogin,
  LoginContainer,
} from "./Login.style";

const Login = () => {
  const { user, login, isLoggedIn } = useLoginStore((state) => state);
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .required("Email richiesta")
      .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"Email non valida"),
    password: yup
      .string()
      .required("Password richiesta")
      .min(8,"Password troppo corta, minimo 8 caratteri")
      .matches(/[a-zA-Z]/,"Password deve contenere almeno una lettera"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<user>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, isLoggedIn]);

  return (
    <LoginContainer>
      <h1>Login</h1>
      <FormLogin onSubmit={handleSubmit((user) => login(user))}>
        {<TextInput
          type="text"
          placeholder="Username"
          {...register("email")}
           $error={errors.email ? true : false}
        /> }
        {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
        <TextInput
          type="password"
          placeholder="Password"
          {...register("password")}
          $error={errors.email ? true : false}
        />
        {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
        <ButtonStyle
          type="submit"
          onClick={handleSubmit((user) => login(user))}
        >
          Login
        </ButtonStyle>
      </FormLogin>
    </LoginContainer>
  );
};

export default Login;
