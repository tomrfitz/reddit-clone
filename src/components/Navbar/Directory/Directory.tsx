import { communityState } from "@/src/atoms/communitiesAtom";
import useDirectory from "@/src/hooks/useDirectory";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Communities from "./Communities";

const UserMenu: React.FC = () => {
  const { directoryState, toggleMenuOpen } = useDirectory();
  const mySnippets = useRecoilValue(communityState).mySnippets;

  return (
    <Menu isOpen={directoryState.isOpen}>
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
        onClick={() => toggleMenuOpen()}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{
            base: "auto",
            lg: "200px",
          }}
        >
          <Flex alignItems="center">
            <>
              {directoryState.selectedMenuItem.imageURL ? (
                <Image
                  borderRadius="full"
                  boxSize="24px"
                  src={directoryState.selectedMenuItem.imageURL}
                  mr={2}
                  alt="community icon"
                />
              ) : (
                <Icon
                  fontSize={24}
                  mr={{ base: 1, md: 2 }}
                  color={directoryState.selectedMenuItem.iconColor}
                  as={directoryState.selectedMenuItem.icon}
                />
              )}
              <Box
                display={{ base: "none", lg: "flex" }}
                flexDirection="column"
                fontSize="10pt"
              >
                <Text fontWeight={600}>
                  {directoryState.selectedMenuItem.displayText}
                </Text>
              </Box>
            </>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
