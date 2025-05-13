import Button from "@mui/material/Button";

interface ButtonProps {
  text: string;
  btnAction?: () => void;
}
export default function ButtonComponent({ text, btnAction }: ButtonProps) {
  return (
    <Button onClick={btnAction} variant="contained">
      {text}
    </Button>
  );
}
