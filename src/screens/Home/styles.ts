import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import type { Product } from ".";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #f4f5f7;
`;

export const Header = styled.View`
  background-color: #fff;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const ScreenTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #14161a;
  margin-left: 20px;
`;

export const SearchInput = styled.TextInput`
  height: 46px;
  border: 1px solid #d7d9dd;
  border-radius: 12px;
  background-color: #fbfbfc;
  padding: 0 16px;
  margin: 16px 20px 0 20px;
  font-size: 15px;
`;

export const CategoryList = styled(FlatList<string>)`
  margin-top: 14px;
  flex-grow: 0;
`;

export const ProductGrid = styled(FlatList<Product>)`
  flex: 1;
`;

export const EmptyText = styled.Text`
  text-align: center;
  margin-top: 40px;
  font-size: 15px;
  color: #7a8089;
`;
