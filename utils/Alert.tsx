// Not in use for now because I'm lazy.

import React from "react";

const Alert = ({
  type,
  icon,
  children,
}: {
  type?: "info" | "success" | "warning" | "error";
  icon?: "info" | "success" | "warning" | "error" | "tip";
  children: any;
}) => {
  return (
    <div className={`!alert !alert-${type}`}>
      <div className="!flex-1">
        {icon === "info" ? (
          <Info />
        ) : icon === "success" ? (
          <Success />
        ) : icon === "warning" ? (
          <Warning />
        ) : icon === "error" ? (
          <Error />
        ) : icon === "tip" ? (
          <Tip />
        ) : (
          <None />
        )}

        <span>{children}</span>
      </div>
    </div>
  );
};

export const Info = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mx-2 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
export const Success = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mx-2 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
export const Warning = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mx-2 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);
export const Error = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mx-2 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    />
  </svg>
);
export const Tip = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 mx-2 stroke-current"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);
export const None = () => <></>;

export default Alert;
