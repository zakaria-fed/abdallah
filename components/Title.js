const Title = ({ text }) => {
  return (
    <h1 className="font-normal text-5xl">
      {text}
      <span className="text-green-400 font-bold">.</span>
    </h1>
  );
};

export default Title;
