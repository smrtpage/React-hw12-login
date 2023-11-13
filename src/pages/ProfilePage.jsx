import { Container, Heading } from "@chakra-ui/react";
import { useAuth } from "../hooks/useAuth";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <Heading>Please Login!</Heading>;
  }
  return (
    <Container maxWidth="container.xl" py={5}>
      <Heading size="lg">Username: {user.username}</Heading>
      <Heading size="lg">Password: {user.password}</Heading>
    </Container>
  );
}

export default ProfilePage;
