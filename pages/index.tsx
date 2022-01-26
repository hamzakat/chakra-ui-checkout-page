import { Container, Flex, VStack } from "@chakra-ui/react"
import Cart from "../sections/cart";
import Details from "../sections/details";
import Head from "next/head";

const indexPage = () => {
  return (
    <>
    <Head>
      <title>Order</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart/>
      </Flex>
    </Container>
    </>
  );
}

export default indexPage