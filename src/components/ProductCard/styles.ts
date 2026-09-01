import styled from "styled-components/native";

export const Container = styled.Pressable`
  flex: 1;
  background-color: #fff;
  border-radius: 12px;
  padding: 10px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 12px;
  background-color: #f1f2f4;
`;

export const ProductInfo = styled.View`
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: #4a4f57;
  min-height: 36px;
`;

export const ProductPrice = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #14161a;
  margin-top: 8px;
`;

export const ProductRating = styled.Text`
  font-size: 13px;
  color: #7a8089;
  margin-top: 4px;
`;
