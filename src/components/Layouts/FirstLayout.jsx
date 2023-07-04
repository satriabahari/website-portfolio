import { forwardRef } from "react";

export const FirstLayout = forwardRef(
  ({ children, navbar, classname }, ref) => {
    return (
      <div className={`container grid px-4 lg:px-16 ${classname}`} ref={ref}>
        {navbar}
        {children}
      </div>
    );
  }
);
