import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export const TopBar = styled.View`
  background-color: #fff;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

export const BackButton = styled.TouchableOpacity``;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  color: #000;
  padding-left: 18px;
  padding-bottom: 10px;
`;

export const DetailImage = styled.Image`
  width: 96%;
  height: 333px;
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: rgba(18, 100, 193, 0.87);
`;

export const DetailContent = styled.View`
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #fff;
  padding: 12px 24px;
  padding-bottom: 60px;
`;

export const CategoryLabel = styled.Text`
  font-size: 20px;
  color: rgb(68, 68, 67);
  padding-bottom: 10px;
`;

export const DetailTitle = styled.Text`
  font-size: 32px;
  color: #000;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailPrice = styled.Text`
  font-size: 46px;
  color: #8ee820;
`;

export const RatingText = styled.Text`
  padding-top: 16px;
  font-size: 16px;
  color: rgb(195, 195, 0);
`;

export const DetailDescription = styled.Text`
  margin-top: 8px;
  font-size: 20px;
  color: rgb(68, 68, 67);
`;

export const QuantityText = styled.Text`
  color: #000;
  font-size: 24px;
  position: absolute;
  bottom: 12px;
  left: 24px;
`;

export const QuantityStepper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #000;
  border-radius: 12px;
  position: absolute;
  bottom: 8px;
  right: 24px;
`;

export const StepperButton = styled.TouchableOpacity`
  padding: 10px;
`;

export const StepperText = styled.Text`
  color: #000;
`;

export const QuantityValue = styled.Text`
  color: #000;
`;

export const AddToCartBar = styled.View`
  background-color: #000;
  height: 50px;
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 2px;
  align-items: center;
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const AddToCardText = styled.Text`
  color: #fff;
  font-size: 24px;
`;
