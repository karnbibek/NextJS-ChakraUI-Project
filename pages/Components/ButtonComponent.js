import { Button } from "@chakra-ui/button";

export default function ButtonComp({ text }) {
    return (
        <Button bg="rgba(190, 68, 68, 1)" color="white" p={["5", "6", "6"]} borderRadius="3xl">
            {text}
        </Button>
    );
}