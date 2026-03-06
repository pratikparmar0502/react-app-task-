import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./ContextApi";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user ? `Hi ${user.email}` : "Coder"}
            </Typography>

            {user ? (
              <>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ bgcolor: "white", color: "blue", m: 1 }}
                  onClick={() => setUser(null)}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "white", color: "blue", m: 1 }}
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "white", color: "blue", m: 1 }}
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
