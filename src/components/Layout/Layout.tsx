import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex flexDirection={"column"} minHeight={"100vh"} minWidth={"100%"}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Flex>
  );
};
export default Layout;
