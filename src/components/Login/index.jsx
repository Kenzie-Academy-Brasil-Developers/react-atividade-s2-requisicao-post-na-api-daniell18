import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { useState } from "react";
import Display from "../Display";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box, TextField } from "@material-ui/core";

function Login() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [formData, setFormData] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [sucess, setSucess] = useState(true);
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio"),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (e) => {
    setFormData(e);

    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", e)
      .then((Res) => {
        if (Res.statusText === "OK") {
          setIsLogged(true);
        }
      })
      .catch((err) => {
        setIsLogged(false);
        setSucess(false);
      });
  };
  const useStyles = makeStyles((theme) => ({
    root: { height: "100vh", backgroundColor: "#000000" },
    container: {
      width: "300px",
      minHeight: "65vh",
      gap: "20px",
      backgroundColor: "#B5B5B5",
      borderRadius: "10px",
    },
    button: {
      width: "200px",
      backgroundColor: "red ",
      color: "#F0F0F0",
    },
  }));
  const classe = useStyles();
  return (
    <>
      {isLogged ? (
        <Display
          formData={formData}
          setIsLogged={setIsLogged}
          setUser={setUser}
          setPassword={setPassword}
        />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit(handleOnSubmit)}
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classe.root}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classe.container}
          >
            <Grid item>
              <TextField
                type="text"
                required
                variant="outlined"
                label="Username"
                {...register("username")}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="PassWord"
                {...register("password")}
              />
            </Grid>
            <Grid item>{sucess ? "" : <p>Usuario ou senha invalidos</p>}</Grid>
            <Button className={classe.button} type="submit" variant="contained">
              Entrar
            </Button>
          </Grid>
        </Box>
      )}
    </>
  );
}
export default Login;
