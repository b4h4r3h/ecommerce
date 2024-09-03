import { Button } from "antd";
import React, { ReactNode } from "react";

const Result: React.FC<{
  icon: ReactNode;
  status: string;
  description: string;
  hasButton?: boolean;
  buttonText?: string;
}> = ({ icon, status, description, hasButton, buttonText }) => {
  return (
    // <div className="flex flex-col gap-2 items-center">
    <div className={`flex flex-col gap-2 items-center rounded-xl py-4 ${
      status === "error" ? "bg-error-light shadow-errorBoxShadow border-2 border-error-main" : "bg-success-light"
    }`}>
      {icon}
      <div className="flex flex-col gap-1 items-center">
        <span className="text-base font-bold text-text-dark">
        {status}
        </span>
        <span className="text-text-grade3">
        {description}
        </span>
      </div>
      {hasButton && (
        <Button type="primary">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Result;
