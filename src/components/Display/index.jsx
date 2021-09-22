import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Paper } from "@material-ui/core";
function Display({ formData, setIsLogged, setUser, setPassword }) {
  const handleLogin = () => {
    setIsLogged(false);
    setUser("");
    setPassword("");
  };
  const useStyles = makeStyles((theme) => ({
    root: { height: "100vh", backgroundColor: "#000000", gap: "25px" },
    Paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "40vh",
      width: "300px",
      textAlign: "center",
    },
    button: {
      backgroundColor: "lime",
    },
  }));
  const classe = useStyles();
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        className={classe.root}
      >
        <Paper className={classe.Paper}>
          <h2>Parabens !!</h2>
          <h3>O usuario {formData.username} Logou com sucesso</h3>
        </Paper>
        <Button
          className={classe.button}
          onClick={() => handleLogin()}
          variant="contained"
        >
          Deslogar
        </Button>
      </Grid>
    </>
  );
}
export default Display;
