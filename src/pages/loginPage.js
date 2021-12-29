import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../components/customButton";
import useStyles from "../styles/styles";
import CustomTextField from "../components/customTextField";
import axios from "axios";


const LoginPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Styling
  const classes = useStyles();

  const handleLogin = () => {
    setError(null);
    setLoading(true);

    axios
      .post("https://dcw-test.layermark.com/layerexchange-api/user/login", {
        username: { username },
        password: { password },
        application: "VALVE",
        deviceInfo: {
          macAddress: "1234",
          deviceType: "WINDOWS_TABLET",
          deviceVendor: "DELL",
          modelName: "xyz",
          osType: "windows",
          osVersion: "windows 10",
        },
      })
      .then((res) => {
        setLoading(false);
        console.log("res", res);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong.");

        console.log("error", error);
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <CustomTextField
              txt="username"
              val={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomTextField
              txt="password"
              val={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className={classes.alert}>{error}</div>}

            <CustomButton
              btn="Log In"
              value={loading ? "loading..." : "login"}
              disable={loading}
              onClick={handleLogin}
            />
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
