import { MouseEventHandler } from "react";

const Button = ({
  className,
  label,
  onClick,
}: {
  className: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
