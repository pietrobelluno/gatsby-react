import React from "react";
import Profile from "../Profile";
import * as S from "./styled";
import SocialLinks from "../SocialLinks";
import MenuLinks from "../MenuLinks";

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile></Profile>
      <SocialLinks></SocialLinks>
      <MenuLinks></MenuLinks>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
