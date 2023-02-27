import { HStack, Text } from "@chakra-ui/react";

const Slide = ({ img, name }) => {
  return (
    <HStack alignContent="center" justifyContent="center" mx="4">
      <Text>
        <img
          src={img}
          alt={name}
          style={{ width: 320, height: 180, borderRadius: 16 }}
        />
      </Text>
    </HStack>
  );
};

export default Slide;
