import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Container, TextField, Button, Typography, Box } from "@mui/material"

function Login() {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    console.log("Login Data:", data)

    // fake login
    if (data.username && data.password) {
      localStorage.setItem("token", "fake-token")
      navigate("/products")
    }
  }

  return (
    <Container maxWidth={false} sx={{ display: "flex", height: "100vh" }}>

      {/* IMAGE */}
      <Box
        sx={{ width: "50%", height: "100%" }}
        component="img"
        src="11.png"
        alt="img"
      />

      {/* FORM */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          gap: 3,
          width: "80%"
        }}
      >

        <Typography variant="h4">Login</Typography>

        {/* USERNAME */}
        <TextField
          {...register("username", {
            required: "username is required",
            minLength: {
              value: 3,
              message: "minimum 3 characters"
            }
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
          label="username"
        />

        {/* EMAIL */}
        <TextField
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "email is invalid"
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          label="email"
        />

        {/* PASSWORD */}
        <TextField
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters"
            }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="password"
          type="password"
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ margin: "auto", textTransform: "capitalize", fontSize: 20 }}
        >
          Login
        </Button>

      </Box>
    </Container>
  )
}

export default Login