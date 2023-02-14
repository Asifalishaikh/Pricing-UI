import { Box, HStack, Text, Icon, Flex } from "@chakra-ui/react";
import React from "react";
import Icon1 from "./icon1";
import Icon2 from "./icon2";
import Icon3 from "./icon3";

export default function Features() {
  return (
    <>
      <Box maxWidth={"700"} m={"auto"} mt={"25px"} px={"50px"}>
        <Flex direction={{ base: "column", lg: "row" }} >
          <HStack mb={"20px"}>
            <Icon as={Icon1} />
            <Text pl={"10px"}>30 days money back Guarntee</Text>
          </HStack>

          <HStack mb={"20px"}>
            <Icon as={Icon2} />
            <Text pl={"10px"} pr={"10px"}> No setup fees 100% hessel-free</Text>
          </HStack>

          <HStack mb={"20px"}>
            <Icon as={Icon3} />
            <Text pl={"10px"}>No monthly subscription Pay once and for all</Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
