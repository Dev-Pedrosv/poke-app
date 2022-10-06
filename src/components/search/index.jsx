import { Input } from "./style";

export const Search = ({ onChange }) => {
  return (
    <Input
      placeholder="🔍 Procurar"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
