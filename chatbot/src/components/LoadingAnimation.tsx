import "./LoadingAnimation.css";

const LoadingAnimation = () => {
  return (
    <div className="m-2 flex w-20  items-center justify-center space-x-2 rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-lg bg-slate-100 p-4">
      <div className="dot animate-bounce"></div>
      <div className="animate-bounce200 dot"></div>
      <div className="animate-bounce400 dot"></div>
    </div>
  );
};

export default LoadingAnimation;
