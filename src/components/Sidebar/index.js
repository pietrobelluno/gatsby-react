import React from "react";
import Profile from "../Profile";
import * as S from "./styled";
import SocialLinks from "../SocialLinks";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile></Profile>
      <SocialLinks></SocialLinks>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
