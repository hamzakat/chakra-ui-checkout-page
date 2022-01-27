import { Box, Button, Container, Flex, Stack, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import Cart from "../sections/cart";
import Details from "../sections/details";
import Head from "next/head";



const indexPage = () => {
  const {toggleColorMode} = useColorMode();
  const cartBg = useColorModeValue('gray.100', 'whiteAlpha.50');
  const cartSecondTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <>
    <Head>
      <title>Order</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxW="container.xl" p={0}>
      <Stack alignItems="center" justifyContent="space-around" py={1}>
        <Button onClick={toggleColorMode}>🌓 Mode</Button>
      </Stack>
      <Flex h="100vh" py={10}>
        <Details />
        <Cart cartBg={cartBg} cartSecondTextColor={cartSecondTextColor}/>
      </Flex>
    </Container>
    </>
  );
}

export default indexPage