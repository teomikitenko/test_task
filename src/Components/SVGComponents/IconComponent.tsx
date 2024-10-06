const SortIconDown = ({fill}: {fill: string}) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 5.5L-8.3523e-07 0.500001L10 0.5L5 5.5Z" fill={fill} />
    </svg>
  );
};
const SortIconUp = ({fill}: {fill: string}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 5.75L16.5 13.25L1.5 13.25L9 5.75Z" fill={fill} />
    </svg>
  );
};

export {SortIconDown,SortIconUp};
