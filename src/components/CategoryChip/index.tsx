import { Container, Label } from "./styles";

interface CategoryChipProps {
  name: string;
  active?: boolean;
  onPress?: () => void;
}

export function CategoryChip({ name, active, onPress }: CategoryChipProps) {
  return (
    <Container active={active} onPress={onPress}>
      <Label active={active}>{name}</Label>
    </Container>
  );
}
