import { HStack, Text } from "@chakra-ui/react";

const Slide = ({ img, name }) => {
  return (
    <HStack alignContent="center" justifyContent="center" mx="4">
      <Text style={{ width: "319px" }}>
        <img src={img} alt={name} style={{ borderRadius: 16 }} />
      </Text>
    </HStack>
  );
};

export default Slide;
