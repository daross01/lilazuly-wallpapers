type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
      {children}
    </div>
  );
}