import "./LoadingAnimation.module.css";

const LoadingAnimation = () => {
  return (
    <div className="w-fit flex gap-1 items-center justify-center rounded-bl-none rounded-br-lg rounded-tl-lg rounded-tr-lg bg-slate-100 p-3">
      <span className="sr-only">Loading</span>
      <div className="h-2 w-2 animate-bounce rounded-full bg-brand-blue [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-brand-blue [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-brand-blue"></div>
    </div>
  );
};

export default LoadingAnimation;
