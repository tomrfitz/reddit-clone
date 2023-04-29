import { Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const CommunityNotFound: React.FC = () => {
  return (
    <>
      <Flex direction="column" align="center" justify="center" h="75vh">
        <Text fontSize="14pt" color="gray.500" pt={1}>
          Sorry, that community does not currently exist.
        </Text>
        <Link href="/">
          <Button mt={4} variant={"solid"}>
            <Text pt={0.5}>GO HOME</Text>
          </Button>
        </Link>
      </Flex>
    </>
  );
};
export default CommunityNotFound;
