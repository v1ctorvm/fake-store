import styled from "styled-components/native";

interface ContainerProps {
  active?: boolean;
}

export const Container = styled.Pressable<ContainerProps>`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${({ active }) => (active ? "#14161a" : "#d7d9dd")};
  background-color: ${({ active }) => (active ? "#14161a" : "#fff")};
`;

export const Label = styled.Text<ContainerProps>`
  font-size: 14px;
  color: ${({ active }) => (active ? "#fff" : "#5b6069")};
`;
