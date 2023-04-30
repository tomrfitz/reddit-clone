import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
  };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = ({
  textInputs,
  onChange,
  handleCreatePost,
  loading,
}) => {
  return (
    <>
      <Stack spacing={3} width="100%">
        <Input
          name="title"
          value={textInputs.title}
          onChange={onChange}
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
          value={textInputs.body}
          onChange={onChange}
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
            disabled={!textInputs.title}
            onClick={handleCreatePost}
            isLoading={loading}
          >
            Post
          </Button>
        </Flex>
      </Stack>
    </>
  );
};
export default TextInputs;
