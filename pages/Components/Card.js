import { Stack, Box, Button, Avatar, Flex, Text } from "@chakra-ui/react"
import InputComponent from "./InputComponent"
import MenuIcon from "./MenuIcon"
import ButtonComp from "./ButtonComponent"

export default function Card() {
    return (
        <Stack align="center" justify="center" minH="100vh" w="100vw">
            <Box bg="#272B35" w={["xs", "sm", "md", "lg", "2xl"]} borderWidth="1px" borderRadius="2xl" textStyle="body" my={["6", "6", "0", "0"]}>
                <Box p="6" pb="3" bg="#272B35" borderRadius="2xl">
                    <Flex justify="space-between">
                        <Flex align="center" fontSize={["xs", "xs", "lg"]}>
                            <ButtonComp />
                            <Avatar mr={["1", "2"]} name="Bibek" src="https://bit.ly/dan-abramov" />
                            <Text color="white" mr={["1", "2"]} fontSize={["xs", "xs", "lg"]}>Ralph Edwards</Text>
                            <Text color="white" fontSize={["xs", "xs", "sm"]} opacity="0.5">3h ago</Text>
                        </Flex>
                        <MenuIcon />
                    </Flex>

                    <Box
                        my="6"
                        fontWeight="normal"
                        as="h4"
                        color="#ffffff"
                        opacity="80%"
                        lineHeight="tight"
                        textStyle="mono"
                    >
                        <Text mb="5">Velit ut ultrices quis viverra eu, ultricies nulla at nec. Ut diam venenatis egestas massa vulputate nam. Pretium eros, imperdiet odio sit. Natoque quam mi ut leo. Sed ut sit cursus nunc, sit. Magna neque vel amet sem vulputate lacus ut.</Text>
                        <Text>Diam lacus sed ornare vulputate. Vulputate magna id suspendisse aliquam. Sit fames est proin diam morbi purus non. Purus donec eu arcu euismod. Volutpat facilisi venenatis phasellus maecenas in.</Text>
                    </Box>
                </Box>
                <Box bg="rgba(95, 116, 149, 0.1)" color="#5F74951A" p="4" borderBottomRadius="2xl">
                    <Text color="white" fontSize="lg" mb="3">How can you help with this Request?</Text>
                    <InputComponent />
                </Box>
            </Box>
        </Stack>
    )
}