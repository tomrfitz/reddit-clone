import { Flex, Icon } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
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

  const handleCreatePost = async () => {};

  const onSelectImage = () => {};

  const onTextChange = () => {};

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
      </Flex>
    </>
  );
};
export default NewPostForm;
