import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import TextInputs from "./PostForm/TextInputs";
import TabItem from "./TabItem";

type NewPostFormProps = {};

const formTabs: tabItem[] = [
  {
    key: "post",
    title: "Post",
    icon: IoDocumentText,
  },
  {
    key: "images",
    title: "Images & Video",
    icon: IoImageOutline,
  },
];

export type tabItem = {
  key: string;
  title: string;
  icon: typeof Icon.arguments;
};

const NewPostForm: React.FC<NewPostFormProps> = () => {
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [textInputs, setTextInputs] = useState({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreatePost = async () => {};

  const onSelectImage = () => {};

  const onTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;
    setTextInputs({
      ...textInputs,
      [name]: value,
    });
  };

  return (
    <>
      <Flex direction={"column"} borderRadius={4} mt={2} bg="white">
        <Flex width="100%">
          {formTabs.map((item) => (
            <TabItem
              item={item}
              key={item.key}
              selected={item.title === selectedTab}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </Flex>
        <Flex p={4}>
          {selectedTab === "Post" && (
            <TextInputs
              textInputs={textInputs}
              handleCreatePost={handleCreatePost}
              onChange={onTextChange}
              loading={loading}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
};
export default NewPostForm;
