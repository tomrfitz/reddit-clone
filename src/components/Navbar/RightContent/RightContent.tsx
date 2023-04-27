import { auth } from "@/src/firebase/clientApp";
import { Button, Flex } from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {user ? (
          <Button
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContent;
