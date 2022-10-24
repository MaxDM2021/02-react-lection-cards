import { StyleButton } from "./Button.styled";


export const Button = ({ icon: Icon = null, type = "button", disabled = false, children }) => {
  return (
    <StyleButton type={type} disabled={disabled}>
        {/* Если Icon не null то рендерится иконка */}
      {Icon && <Icon size="16"/>}
      {children}{" "}
    </StyleButton>
  );
};
