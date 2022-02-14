import React from "react";
import styled from "styled-components";

const UserListContainer = styled.ul`
  max-width: 390px;
  margin: 0 auto;
  padding: 24px 16px;
`;

const UserListWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const UserImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #dbdbdb;
  font-size: 10px;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfoWrapper = styled.div`
  margin-left: 12px;
  height: 100%;
  align-self: flex-start;
`;

const UserName = styled.strong`
  display: block;
  margin: 5px 0 6px;
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
`;

const UserId = styled.strong`
  color: #767676;
  font-size: 12px;
  line-height: 15px;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;

export function SearchUserList({ children }) {
  return <UserListContainer>{children}</UserListContainer>;
}

export function SearchUserItem({ username, userid, img }) {
  return (
    <UserListWrapper>
      <UserImgWrapper>
        <img src={img} alt="프로필 사진" />
      </UserImgWrapper>
      <UserInfoWrapper>
        <UserName>
          <strong>{username}</strong>
        </UserName>
        <UserId>
          <strong>{userid}</strong>
        </UserId>
      </UserInfoWrapper>
    </UserListWrapper>
  );
}
