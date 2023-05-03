import {
  Box,
  chakra,
  Container,
  Grid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaBriefcase, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      position={"absolute"}
      bottom={"0"}
      width={"100vw"}
      maxHeight={"150px"}
      bgColor={"white"}
    >
      <Container
        as={Stack}
        maxW={"95vw"}
        py={2.5}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
      >
        <Grid
          templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 2fr)" }}
          fontSize={"11pt"}
          gap={1}
          alignSelf={"right"}
        >
          <Text justifySelf={"right"} pt={1.5} mr={1}>
            Made by Thomas FitzGerald. Find me here:
          </Text>
          <Stack
            direction={"row"}
            spacing={3}
            justify={{ base: "center", md: "inherit" }}
          >
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/tomr_fitz"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Github"}
              href={"https://github.com/tomrfitz/reddit-clone"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton label={"Portfolio"} href={"https://tomrfitz.com"}>
              <FaBriefcase />
            </SocialButton>
          </Stack>
          <Text justifySelf={"right"} pt={1.5} mr={1}>
            Tutorial by Shadhee Merhi. Find it here:
          </Text>
          <Stack
            direction={"row"}
            spacing={3}
            justify={{ base: "center", md: "inherit" }}
          >
            <SocialButton
              label={"YouTube"}
              href={
                "https://youtube.com/playlist?list=PLu3PzwcGv6t7Xygj1GLM5DMKihUG2a92Y"
              }
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Github"}
              href={"https://github.com/shadeemerhi/reddit-clone-yt"}
            >
              <FaGithub />
            </SocialButton>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
