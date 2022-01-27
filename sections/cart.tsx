import { AspectRatio, Button, Checkbox, Divider, FormControl, FormLabel, GridItem, Heading, HStack, Image, Input, Select, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";


const Cart = (props: any) => {
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={props.cartBg}>
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl" >
                    Your cart
                </Heading>
            </VStack>
            <HStack spacing={6} w="full" alignItems="center">
                
                <AspectRatio ratio={1} w={24}>
                    <Image src="/images/mug.jpg" alt="mug" />
                </AspectRatio>
                
                <HStack spacing={0} w="full" justifyContent="space-between" alignItems="center">
                    <VStack w="full" spacing={0} alignItems="flex-start">
                        <Heading size="md" >Mug</Heading>
                        <Text color={props.cartSecondTextColor}>PNYCOMP27541</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">$10.00</Heading>
                </HStack>

            </HStack>

            <VStack w="full" spacing={4} alignItems="stretch">
                <HStack justifyContent="space-between">
                    <Heading size="sm" color={props.cartSecondTextColor} textAlign="start">Subtotal</Heading>
                    <Heading size="sm" textAlign="end">$10.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Heading size="sm" color={props.cartSecondTextColor} textAlign="start">Shipping</Heading>
                    <Heading size="sm" textAlign="end">$10.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Heading size="sm" color={props.cartSecondTextColor} textAlign="start">Taxes (estimated)</Heading>
                    <Heading size="sm" textAlign="end">$10.00</Heading>
                </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
                    <Heading size="sm" color={props.cartSecondTextColor} textAlign="start">Total</Heading>
                    <Heading size="lg" textAlign="end">$10.00</Heading>
            </HStack>
            
        </VStack>
    )
}

export default Cart;