import { firestore, storage } from "@/src/firebase/clientApp";
import { Flex, Icon } from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import ImageUpload from "./PostForm/ImageUpload";
import TextInputs from "./PostForm/TextInputs";
import TabItem from "./TabItem";

type NewPostFormProps = {
  user: User;
};

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

const NewPostForm: React.FC<NewPostFormProps> = ({ user }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [textInputs, setTextInputs] = useState({
    title: "",
    body: "",
  });
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleCreatePost = async () => {
    const { communityId } = router.query;
    const displayName = user.displayName
      ? user.displayName
      : user.email!.split("@")[0];
    const newPost = {
      communityId: communityId as string,
      creatorId: user.uid,
      creatorDisplayName: displayName as string,
      title: textInputs.title,
      body: textInputs.body,
      nummberOfComments: 0,
      voteStatus: 0,
      createdAt: serverTimestamp() as Timestamp,
    };
    setLoading(true);
    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);

      if (selectedFile) {
        const imageRef = ref(storage, `posts/${postDocRef.id}`);
        await uploadString(imageRef, selectedFile, "data_url");
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(postDocRef, {
          imageURL: downloadURL,
        });
      }
    } catch (error: any) {
      setError(true);
    }
    setLoading(false);
  };

  const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target?.result) {
        setSelectedFile(readerEvent.target.result as string);
      }
    };
  };

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
          {selectedTab === "Images & Video" && (
            <ImageUpload
              selectedFile={selectedFile}
              onSelectImage={onSelectImage}
              setSelectedTab={setSelectedTab}
              setSelectedFile={setSelectedFile}
            />
          )}
        </Flex>
        {error && (
          <Flex
            p={4}
            bg="red.500"
            color="white"
            borderRadius={4}
            justifyContent="center"
          >
            Something went wrong. Please try again.
          </Flex>
        )}
      </Flex>
    </>
  );
};
export default NewPostForm;
