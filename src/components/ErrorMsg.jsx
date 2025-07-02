const ErrorMsg = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <p className="text-sm text-center text-red-600 py-5">{errorMessage}</p>
  );
};

export default ErrorMsg;
