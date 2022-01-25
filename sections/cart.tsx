import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react";


const Cart = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl" >
                    Your details
                </Heading>
                <Text>
                    If you already have an account, click here to log in.
                </Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                {/* First Name */}
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="Ahmad"/>
                    </FormControl>
                </GridItem>

                {/* Last Name */}
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Ahmad"/>
                    </FormControl>
                </GridItem>

                {/* Address */}
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Rahma Street 210"/>
                    </FormControl>
                </GridItem>

                {/* City */}
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="Istanbul"/>
                    </FormControl>
                </GridItem>

                {/* Country */}
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="tr">Turkey</option>
                            <option value="us">United States</option>
                            <option value="de">Germany</option>
                        </Select>
                    </FormControl>
                </GridItem>
                
                {/* Agreement */}
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to the billing address.</Checkbox>
                </GridItem>

                {/* Order btn */}
                <GridItem colSpan={2}>
                    <Button size="lg" color="Blue" w="full">Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default Cart;