import { Box, Button, Container, Flex, Stack, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import Cart from "../sections/cart";
import Details from "../sections/details";
import Head from "next/head";

let cartBg: any;
let cartSecondTextColor: any;

export const DarkModeSw = () => {
  
  const {toggleColorMode} = useColorMode();
  cartBg = useColorModeValue('gray.100', 'whiteAlpha.50');
  cartSecondTextColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Stack alignItems="center" justifyContent="space-around" py={1}>
        <Button onClick={toggleColorMode}>🌓 Mode</Button>
    </Stack>
  )
};



const indexPage = () => {

  return (
    <>
    <Head>
      <title>Order</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxW="container.xl" p={0}>
      <DarkModeSw/>
      <Flex h={{base: 'auto', md: '100vh'}} py={[0, 0, 0]} direction={{base: 'column-reverse', md: 'row'}}>
        <Details />
        <Cart cartBg={cartBg} cartSecondTextColor={cartSecondTextColor}/>
      </Flex>
    </Container>
    </>
  );
}

export default indexPage