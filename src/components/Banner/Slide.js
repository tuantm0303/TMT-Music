import { HStack, Text } from "@chakra-ui/react";

const Slide = ({ img }) => {
  return (
    <HStack alignContent="center" justifyContent="center" mx="4">
      <Text style={{ width: "319px" }}>
        <img src={img} alt={img} style={{ borderRadius: 16 }} />
      </Text>
    </HStack>
  );
};

export default Slide;
