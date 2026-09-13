import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { ProductItem } from ".";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export const TopBar = styled.View`
  background-color: #fff;
  padding-left: 12px;
`;

export const BackButton = styled.TouchableOpacity``;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  color: #000;
  padding-left: 18px;
`;

export const CartList = styled(FlatList<ProductItem>)`
  background-color: #fff;
`;

export const CartItem = styled.View`
  border-radius: 10px;
  margin-left: 8px;
  margin-right: 12px;
  margin-top: 20px;
  background-color: #fff;
  flex-direction: row;
`;

export const ItemImage = styled.Image`
  width: 130px;
  height: 130px;
  margin: 5px;
`;

export const ItemInfo = styled.View`
  padding: 6px;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  color: black;
  font-weight: bold;
`;

export const ItemPrice = styled.Text`
  font-size: 18px;
  color: green;
  font-weight: bold;
  margin-top: 4px;
`;

export const QuantityStepper = styled.View`
  position: absolute;
  right: 8px;
  bottom: 8px;

  flex-direction: row;
  align-items: center;

  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;

  height: 40px;
`;

export const QuantityButton = styled.TouchableOpacity`
  width: 35px;

  align-items: center;
  justify-content: center;
`;

export const QuantityText = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const CartSummary = styled.View`
  background-color: #fff;
  padding: 16px;
`;

export const SummaryContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SummaryLabel = styled.Text`
  font-size: 24px;
  color: #000;
`;

export const SummaryValue = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: black;
  height: 60px;
  border-radius: 10px;
  margin: 20px;
  align-items: center;
  justify-content: center;
`;

export const CheckoutText = styled.Text`
  color: white;
  font-size: 24px;
`;
