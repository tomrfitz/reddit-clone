import { Community } from "@/src/atoms/communitiesAtom";
import React from "react";

type AboutProps = {
  communityData: Community;
};

const About: React.FC<AboutProps> = ({ communityData }) => {
  return (
    <>
      <div>about</div>
    </>
  );
};
export default About;
