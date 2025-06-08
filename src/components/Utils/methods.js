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

// Utility to extract YouTube video ID
export const getYouTubeVideoId = (url) => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^\s&?]+)/;
  const match = url.match(regex);
  return match ? match[1].split(/[&?]/)[0] : null;
};
