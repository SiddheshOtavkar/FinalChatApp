import { useFileHandler, useInputValidation } from "6pp";
import React, { useState } from "react";
import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { usernameValidator } from "../utils/validators";
import { Link } from "react-router-dom";

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation("");

    const avatar = useFileHandler("single");

    // const dispatch = useDispatch();

    const handleLogin = () => {
        console.log("Hello login");
    };

    const handleSignUp = () => {
        console.log("Hello signup");
    };

    const toggleLogin = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div>
            <Container
                component={"main"}
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isLogin ? (
                        <>
                            <Typography variant="h5">Login</Typography>
                            <form
                                style={{
                                    width: "100%",
                                    marginTop: "1rem",
                                }}
                                onSubmit={handleLogin}
                            >
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                        background:
                                            "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                                        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                                        borderRadius: 3,
                                        border: 0,
                                        color: "white",
                                        height: 48,
                                        padding: "0 30px",
                                        "&:hover": {
                                            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.5)", // darker shadow
                                        },
                                    }}
                                    type="submit"
                                    fullWidth
                                >
                                    Login
                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>
                                    OR
                                </Typography>

                                {/* <Button
                                    fullWidth
                                    variant="text"
                                    sx={{
                                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                                        color: "white",
                                        fontWeight: "bold",
                                        padding: "12px 24px",
                                        "&:hover": {
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                        },
                                    }}
                                    onClick={toggleLogin}
                                >
                                    Sign Up Instead
                                </Button> */}
                                <div style={{ textAlign: "center" }}>
                                    <span style={{ fontSize: "small" }}>Don't Have an Account: </span>
                                    <span
                                        style={{
                                            cursor: "pointer",
                                            fontWeight: "bold",
                                            color: "black",
                                            fontSize: "small",
                                            textDecoration: "none",
                                        }}
                                        onClick={toggleLogin}
                                    >
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                                transition: "color 0.3s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = "gray";
                                                e.target.style.textDecoration = "underline";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = "black";
                                                e.target.style.textDecoration = "none";
                                            }}
                                        >
                                            Sign In
                                        </span>
                                    </span>
                                </div>

                            </form>
                        </>
                    ) : (
                        <>
                            <Typography variant="h5">Sign Up</Typography>
                            <form
                                style={{
                                    width: "100%",
                                    marginTop: "1rem",
                                    padding: "0.5rem",
                                }}
                                onSubmit={handleSignUp}
                            >
                                <Stack position="relative" width={"10rem"} margin="auto">
                                    <Avatar
                                        sx={{
                                            width: "100%",
                                            height: "8rem",
                                            objectFit: "contain",
                                        }}
                                        src={avatar.preview}
                                    />

                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: "0",
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0,0.7)",
                                            },
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={avatar.changeHandler}
                                            />
                                        </>
                                    </IconButton>
                                </Stack>

                                <>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Name"
                                        margin="normal"
                                        variant="outlined"
                                        value={name.value}
                                        onChange={name.changeHandler}
                                        sx={{ marginBottom: '0.25rem' }}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Bio"
                                        margin="normal"
                                        variant="outlined"
                                        value={bio.value}
                                        onChange={bio.changeHandler}
                                        sx={{ marginBottom: '0.25rem' }}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Username"
                                        margin="normal"
                                        variant="outlined"
                                        value={username.value}
                                        onChange={username.changeHandler}
                                        sx={{ marginBottom: '0.25rem' }}
                                    />

                                    <TextField
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </>


                                <Button
                                    sx={{
                                        marginTop: "0.25rem",
                                        background:
                                            "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                                        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                                        borderRadius: 3,
                                        border: 0,
                                        color: "white",
                                        height: 48,
                                        padding: "0 30px",
                                        "&:hover": {
                                            boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.5)",
                                        },
                                    }}
                                    type="submit"
                                    fullWidth
                                >
                                    Sign In
                                </Button>

                                <Typography textAlign="center" m="0.25rem">
                                    OR
                                </Typography>

                                <div style={{ textAlign: "center" }}>
                                    <span style={{ fontSize: "small" }}>Don't Have an Account: </span>
                                    <span
                                        style={{
                                            cursor: "pointer",
                                            fontWeight: "bold",
                                            color: "black",
                                            fontSize: "small",
                                            textDecoration: "none",
                                        }}
                                        onClick={toggleLogin}
                                    >
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                                transition: "color 0.3s",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.color = "gray";
                                                e.target.style.textDecoration = "underline";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.color = "black";
                                                e.target.style.textDecoration = "none";
                                            }}
                                        >
                                            Login In
                                        </span>
                                    </span>
                                </div>

                            </form>
                        </>

                    )}
                </Paper>
            </Container>
        </div>
    );
};

/*
<>
    <Typography variant="h5">Sign Up</Typography>
    <form
        style={{
            width: "100%",
            marginTop: "1rem",
            padding: "0.5rem",
        }}
        onSubmit={handleSignUp}
    >
        <Stack position={"relative"} width={"10rem"} margin={"auto"}>
            <Avatar
                sx={{
                    width: "10rem",
                    height: "8rem",
                    objectFit: "contain",
                }}
                src={avatar.preview}
            />

            <IconButton
                sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                    },
                }}
                component="label"
            >
                <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                    />
                </>
            </IconButton>
        </Stack>

        <>
            <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
                sx={{ marginBottom: '0.25rem' }} // Adjust margin bottom for spacing
            />

            <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
                sx={{ marginBottom: '0.25rem' }} // Adjust margin bottom for spacing
            />

            <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
                sx={{ marginBottom: '0.25rem' }} // Adjust margin bottom for spacing
            />

            <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
            />
        </>


        <Button
            sx={{
                marginTop: "0.25rem",
                background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                borderRadius: 3,
                border: 0,
                color: "white",
                height: 48,
                padding: "0 30px",
                "&:hover": {
                    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.5)", // darker shadow
                },
            }}
            type="submit"
            fullWidth
        >
            Sign In
        </Button>

        <Typography textAlign={"center"} m={"0.25rem"}>
            OR
        </Typography>

        <Button
            disabled={isLoading}
            fullWidth
            variant="text"
            sx={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                color: "white",
                fontWeight: "bold",
                padding: "12px 24px",
                "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                },
            }}
            onClick={toggleLogin}
        >
            Log In Instead
        </Button>
    </form>
</>
*/

export default Login;
/**
 * <>
                            <Typography variant="h5">Sign Up</Typography>
                            <form
                                style={{
                                    width: "100%",
                                    marginTop: "1rem",
                                }}
                                onSubmit={handleSignUp}
                            >
                                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                    <Avatar
                                        sx={{
                                            width: "10rem",
                                            height: "10rem",
                                            objectFit: "contain",
                                        }}
                                        src={avatar.preview}
                                    />

                                    <IconButton
                                        sx={{
                                            position: "absolute",
                                            bottom: "0",
                                            right: "0",
                                            color: "white",
                                            bgcolor: "rgba(0,0,0,0.5)",
                                            ":hover": {
                                                bgcolor: "rgba(0,0,0,0.7)",
                                            },
                                        }}
                                        component="label"
                                    >
                                        <>
                                            <CameraAltIcon />
                                            <VisuallyHiddenInput
                                                type="file"
                                                onChange={avatar.changeHandler}
                                            />
                                        </>
                                    </IconButton>
                                </Stack>

                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />

                                <TextField
                                    required
                                    fullWidth
                                    label="Bio"
                                    margin="normal"
                                    variant="outlined"
                                    value={bio.value}
                                    onChange={bio.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Username"
                                    margin="normal"
                                    variant="outlined"
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />

                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    margin="normal"
                                    variant="outlined"
                                />

                                <Button
                                    sx={{
                                        marginTop: "1rem",
                                    }}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    disabled={isLoading}
                                >
                                    Sign Up
                                </Button>

                                <Typography textAlign={"center"} m={"1rem"}>
                                    OR
                                </Typography>

                                <Button
                                    disabled={isLoading}
                                    fullWidth
                                    variant="text"
                                    onClick={toggleLogin}
                                >
                                    Login Instead
                                </Button>
                            </form>
                        </>
 */
