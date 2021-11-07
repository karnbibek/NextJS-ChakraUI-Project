import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"

export default function InputComponent({ placeholder }) {
    return (
        <InputGroup>
            <Input border="none" bg="rgba(95, 116, 149, 0.2)" color="rgba(95, 116, 149, 0.5)" placeholder={placeholder} borderRadius="3xl" />
            <InputRightElement>
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4Z" fill="#5F7495" />
                </svg>
            </InputRightElement>
        </InputGroup>
    );
}