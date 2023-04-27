import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";

const UserMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor={"pointer"}
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        mr={2}
        ml={{
          base: 0,
          md: 2,
        }}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{
            base: "auto",
            lg: "200px",
          }}
        >
          <Flex align="center">
            <Icon
              as={TiHome}
              fontSize={24}
              mr={{ base: 1, md: 2 }}
              color="gray.400"
            />
            <Flex
              display={{
                base: "none",
                lg: "flex",
              }}
            >
              <Text fontSize="10pt">Home</Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>{/* <Communities/> */}Communities</MenuList>
    </Menu>
  );
};
export default UserMenu;