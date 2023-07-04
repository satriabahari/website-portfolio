import { forwardRef } from "react";

export const FirstLayout = forwardRef(({ children, navbar, classname }, ref) => {
  return (
    <div className={`container px-16 grid ${classname}`} ref={ref}>
      {navbar}
      {children}
    </div>
  );
});
