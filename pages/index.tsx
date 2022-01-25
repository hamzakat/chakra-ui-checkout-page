import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../sections/cart";
import Details from "../sections/details";

const indexPage = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Cart/>
        
        <Details />
      </Flex>
    </Container>
  );
}

export default indexPage