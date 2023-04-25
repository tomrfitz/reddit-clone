import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  console.log("Navbar");
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" alt="redditFace" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="redditText"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/* <Directory />
          <SearchInput />
          <RightContext/> */}
    </Flex>
  );
};
export default Navbar;
