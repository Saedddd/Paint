import { IIcon } from "./types";

const Save = ({ width = "25" }: IIcon) => {
  return (
    <svg width={width} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.4156 5.66562L19.3344 0.584375C19.1 0.35 18.8125 0.178125 18.5 0.0843749V0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V7.07812C25 6.54688 24.7906 6.04062 24.4156 5.66562ZM8.5 2.25H16.5V5.5H8.5V2.25ZM22.75 22.75H2.25V2.25H6.5V6.5C6.5 7.05312 6.94688 7.5 7.5 7.5H17.5C18.0531 7.5 18.5 7.05312 18.5 6.5V2.93125L22.75 7.18125V22.75ZM12.5 10.3125C10.0156 10.3125 8 12.3281 8 14.8125C8 17.2969 10.0156 19.3125 12.5 19.3125C14.9844 19.3125 17 17.2969 17 14.8125C17 12.3281 14.9844 10.3125 12.5 10.3125ZM12.5 17.3125C11.1187 17.3125 10 16.1938 10 14.8125C10 13.4312 11.1187 12.3125 12.5 12.3125C13.8813 12.3125 15 13.4312 15 14.8125C15 16.1938 13.8813 17.3125 12.5 17.3125Z"
        fill="black"
      />
    </svg>
  );
};

export default Save;
