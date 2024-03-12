type TButtonMock = {
  onClick: () => void
};

export const ButtonMock = ({ onClick }: TButtonMock) => 
  <button onClick={onClick}
  className={`border border-white p-3`}>
    Click
  </button>