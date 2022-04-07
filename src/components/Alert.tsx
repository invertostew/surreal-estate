import React from "react";

interface AlertProps {
  message: string;
  success?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  message,
  success,
}): JSX.Element | null => {
  if (!message) return null;

  return (
    <section className={`alert alert--${success ? "success" : "error"}`}>
      {message}
    </section>
  );
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
