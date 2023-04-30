import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {};

const TextInputs: React.FC<TextInputsProps> = () => {
  return (
    <>
      <Stack spacing={3} width="100%">
        <Input
          name="title"
          //   value={}
          //   onChange={}
          placeholder="Title"
          fontSize={"10pt"}
          borderRadius={4}
          _placeholder={{ color: "gray.500" }}
          _focus={{
            outling: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "black",
          }}
        />
        <Textarea
          name="body"
          //   value={}
          //   onChange={}
          placeholder="Text (optional)"
          fontSize={"10pt"}
          height="100px"
          borderRadius={4}
          _placeholder={{ color: "gray.500" }}
          _focus={{
            outling: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "black",
          }}
        />
        <Flex justify="flex-end">
          <Button
            height="34px"
            padding="0px 30px"
            // disabled={}
            onClick={() => {}}
          >
            Post
          </Button>
        </Flex>
      </Stack>
    </>
  );
};
export default TextInputs;
