import { authModalState } from "@/src/atoms/authModalAtom";
import React from "react";
import { useRecoilState } from "recoil";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  return <></>;
};
export default AuthModal;
