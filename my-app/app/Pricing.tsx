import React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import CheckMarkIcon from "./CheckMarkIcon";
export default function Pricing() {
  return (
    <>
      <Box
        maxWidth={"800px"}
        m={{ base: "20px", lg: "auto" }}
        //  ml={{base:"10px", lg:"auto"}}
        //  mr={{base:"10px", lg:"auto"}}
        mt={"-100px"}
        bg={"white"}
        borderRadius={"15px"}
        overflow="clip"
        boxShadow={
          "box-shadow: 0px 10px 10px -5px #0000000A; box-shadow: 0px 20px 25px -5px #0000001A;"
        }
      >
        <Flex direction={{ base: "column", md: "column", lg: "row" }}>
          <Box bg="#cbbBee" p={"50px"} textAlign={"center"}>
            <Text fontSize={"20px"} fontWeight="bold">
              Premium PRO
            </Text>
            <Heading>$329</Heading>
            <Text>billed just once</Text>
            <Button mt={"15px"} color={"white"} bg="#805AD5">
              Get Started
            </Button>
          </Box>
          {/* Righ Box */}
          <Box>
            <Text pt={"50px"} pl={"25px "}>
              Access these features when you get this pricing package for your
              business.
            </Text>

            <HStack pt={"15px"} mb={"15px"} pl={"20px"}>
              <Icon as={CheckMarkIcon} />
              <Text pl={"10px"}>International calling and messaging API</Text>
            </HStack>

            <HStack mb={"15px"} pl={"20px"}>
              <Icon as={CheckMarkIcon} />
              <Text pl={"10px"}>Addtional phone numbers</Text>
            </HStack>
            <HStack mb={"15px"} pl={"20px"}>
              <Icon as={CheckMarkIcon} />
              <Text pl={"10px"}>Automated messages via Zapier</Text>
            </HStack>
            <HStack pl={"20px"}>
              <Icon as={CheckMarkIcon} />
              <Text pl={"10px"}>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
