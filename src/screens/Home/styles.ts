import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Product } from ".";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  padding: 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;

export const ScreenTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #110202;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  background-color: #f5f5f5;
  border-width: 1px;
  border-color: #e0e0e0;
  border-radius: 8px;
  padding: 8px;
`;

export const CategoryList = styled(FlatList)<string[]>``;

export const CategoryChip = styled.View`
  margin-top: 10px;
  border-radius: 999px;
  background-color: #fdfdfd;
  padding: 8px;
  margin-right: 8px;
  border-width: 1px;
  border-color: #00000076;
`;

export const CategoryText = styled.Text`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
`;

export const ProductGrid = styled(FlatList as new () => FlatList<Product>)`
  flex: 1;
  padding: 16px;
`;

export const ProductCard = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 16px;
  margin-right: 8px;
  elevation: 2;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  border-radius: 12px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 130px;
  border-radius: 12px;
`;

export const ProductInfo = styled.View`
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  min-height: 36px;
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: #136016;
  margin-top: 4px;
`;

export const ProductRating = styled.Text`
  font-size: 14px;
  color: #000;
  margin-top: 4px;
`;

export const BottomBar = styled.View`
  background-color: #fff;
  height: 60px;
  border-top-width: 1px;
  border-top-color: #e0e0e0;
  flex-direction: row;
`;

export const BottomBarButton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
