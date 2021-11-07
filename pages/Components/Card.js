import { Stack, HStack, VStack, Avatar, Text } from "@chakra-ui/react"
import InputComponent from "./InputComponent"
import MenuIcon from "./MenuIcon"
import ButtonComp from "./ButtonComponent"

export default function Card({ button, name, avatarName, link, time, p1, p2, formText, inputPlaceHolder }) {
    // const { button, name, avatarName, link, time, p1, p2, formText, inputPlaceHolder } = data;
    return (
        <Stack align="center" justify="center" minH="100vh" w="100vw">
            <Stack bg="#272B35" w={["xs", "md", "md", "lg", "2xl"]} borderWidth="1px" borderRadius="2xl" my={["6", "6", "0", "0"]}>
                <VStack p="6" align="start" spacing="6" bg="#272B35" borderRadius="2xl">
                    <HStack w="100%" justify="space-between" align="start">
                        <HStack spacing={["1", "2"]} align="center" fontSize={["xs", "xs", "lg"]}>
                            <ButtonComp text={button} />
                            <Avatar name={avatarName} src={link} />
                            <Text color="white" fontSize={["xs", "sm", "lg"]}>{name}</Text>
                            <Text color="white" fontSize={["xs", "xs", "sm"]} opacity="0.5">{time}</Text>
                        </HStack>
                        <MenuIcon />
                    </HStack>

                    <VStack
                        spacing={4}
                        align="stretch"
                        fontWeight="normal"
                        as="h4"
                        color="#ffffff"
                        opacity="80%"
                        lineHeight="tight"
                        textStyle="mono"
                    >
                        <Text>{p1}</Text>
                        <Text>{p2}</Text>
                    </VStack>
                </VStack>
                <VStack spacing="0" align="start" bg="rgba(95, 116, 149, 0.1)" color="#5F74951A" p="6" borderBottomRadius="2xl">
                    <Text color="white" fontSize={["md", "lg"]} mb="3">{formText}</Text>
                    <InputComponent placeholder={inputPlaceHolder} />
                </VStack>
            </Stack>
        </Stack>
    )
}