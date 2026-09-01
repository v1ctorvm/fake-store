import styled from "styled-components/native";

interface LabelProps {
  active?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #e3e5e8;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const BottomBarButton = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<LabelProps>`
  font-size: 13px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  color: ${({ active }) => (active ? "#14161a" : "#9aa0a8")};
`;
