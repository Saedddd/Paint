import { IIcon } from "./types";

const Redo = ({ width = "25" }: IIcon) => {
  return (
    <svg width={width} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.8125 25H12.5V21.1538H7.8125C5.22813 21.1538 3.125 18.5654 3.125 15.3846C3.125 12.2038 5.22813 9.61538 7.8125 9.61538H17.1875V15.3846L25 7.69231L17.1875 0V5.76923H7.8125C3.50469 5.76923 0 10.0827 0 15.3846C0 20.6865 3.50469 25 7.8125 25Z"
        fill="black"
      />
    </svg>
  );
};

export default Redo;
