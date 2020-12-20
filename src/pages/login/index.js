import { useEffect } from "react";
import {
  Grid,
  Button,
  TextField,
  Card,
  CardContent,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {},
  loginContainer: {
    height: "100vh",
  },
  formHelperTextError: {
    color: "red",
  },
}));

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  const { errors, touched, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return null;

  {
    /*
		<form onSubmit={handleSubmit}>
			<div className={classes.root}>
			<Grid 
				container 
				justify="center" 
				alignItems="center" 
				className={classes.loginContainer}
			>
				<Grid item>
					<Card>
						<CardContent>
							<Grid container direction="column" spacing={2}>
								<Grid item>
									<TextField
										label="email"
										id="email"
         						name="email"
         						type="text"
         						onChange={handleChange}
										value={values.email}
										error={errors.email ? true : null}
									/>
									<FormHelperText 
										className={classes.formHelperTextError}
										filled={errors.email ? true : null}
									>
										{touched.email && errors.email ? errors.email : null}
									</FormHelperText>
								</Grid>
								<Grid item>
									<TextField 
										label="senha"
										id="password"
										name="password"
										type="password"
										onChange={handleChange}
										value={values.password}
										error={errors.password ? true : null}
									/>
									<FormHelperText 
										className={classes.formHelperTextError}
										filled={errors.password ? true : null}
									>
										{touched.password && errors.password ? errors.password : null}
									</FormHelperText>
								</Grid>
								<Grid item>
									<Button type="submit" variant="outlined">
										entrar
									</Button>
								</Grid>
								<Grid item>
									<Link to="recover-password">
										recuperar senha
									</Link>
								</Grid>
								<Grid item>
									<Link to="signup">
										cadastrar-se
									</Link>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
		</form>
		*/
  }
};

export default Login;
