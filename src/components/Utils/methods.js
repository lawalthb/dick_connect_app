export const getFormFieldError = (errors, name) => {
  // Handle nested paths like "question.0.type"
  if (!name || !errors) return undefined;

  // Split the path into parts
  const parts = name?.split('.');

  // Navigate through the errors object
  let current = errors;
  for (const part of parts) {
    if (!current?.[part]) return undefined;
    current = current?.[part];
  }

  return current?.message;
};
