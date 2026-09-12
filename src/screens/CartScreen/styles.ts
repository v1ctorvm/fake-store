import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f35050;
`;

export const TopBar = styled.View`
  background-color: #addc9f;
  padding-left: 12px;
`;

export const BackButton = styled.TouchableOpacity``;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  color: #000;
  padding-left: 18px;
`;

export const CartList = styled(FlatList)`
  background-color: green;
`;

export const CartItem = styled.View`
  margin-left: 12px;
  background-color: blue;
  margin-left: 8px;
  flex-direction: row;
`;

export const ItemImage = styled.Image`
  width: 130px;
  height: 130px;
`;

export const ItemTitle = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
`;
