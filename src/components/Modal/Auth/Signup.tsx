import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

const Signup: React.FC = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // firebase logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{
          border: "1px solid",
          borderColor: "blue.500",
          bg: "white",
        }}
        _focus={{
          outline: "none",
          border: "1px solid",
          borderColor: "blue.500",
          bg: "white",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ border: "1px solid", borderColor: "blue.500", bg: "white" }}
        _focus={{
          outline: "none",
          border: "1px solid",
          borderColor: "blue.500",
          bg: "white",
        }}
        bg="gray.50"
      />
      <Input
        required
        name="confirm password"
        placeholder="confirm password"
        type="password"
        mb={2}
        onChange={onChange}
        fontSize={"10pt"}
        _placeholder={{ color: "gray.500" }}
        _hover={{ border: "1px solid", borderColor: "blue.500", bg: "white" }}
        _focus={{
          outline: "none",
          border: "1px solid",
          borderColor: "blue.500",
          bg: "white",
        }}
        bg="gray.50"
      />
      <Button width="100%" height="36px" type="submit" mb={2} mt={2}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already have an account?</Text>
        <Text
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default Signup;
