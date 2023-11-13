import { Link } from "react-router-dom";
import { Container, Tab, TabList, Tabs, Stack, Button } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { user, setUser } = useAuth();
  function logout() {
    setUser(null);
  }
  return (
    <Container maxWidth="container.xl" py={3} borderBottomWidth={1}>
      <Stack direction="row" justifyContent="space-between">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>
              <Link to="/">Home</Link>
            </Tab>
            {user && (
              <Tab>
                <Link to="/profile">Profile</Link>
              </Tab>
            )}

            {!user && (
              <Tab>
                <Link to="/login">Login</Link>
              </Tab>
            )}
          </TabList>
        </Tabs>
        {user && (
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Button colorScheme="red" onClick={logout}>
              Log Out
            </Button>
            <span>{user.username}</span>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}

export default Navbar;
