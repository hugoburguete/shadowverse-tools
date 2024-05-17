const Loading = () => {
  return (
    <span className="inline-block w-10 h-10 animate-spin">
      <svg className="block" viewBox="22 22 44 44">
        <circle
          className="animate-stretch-compress"
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          stroke="#FFF"
          strokeDasharray={'80px, 200px'}
          strokeWidth={3.6}
          strokeDashoffset={0}
        ></circle>
      </svg>
    </span>
  );
};

export default Loading;
