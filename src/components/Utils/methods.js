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
  const match = url?.match(regex);
  return match ? match[1].split(/[&?]/)[0] : null;
};

export const formatYAxis = (tick) => {
  if (tick >= 1000000) return `${tick / 1000000}M`;
  if (tick >= 1000) return `${tick / 1000}k`;
  return tick;
};

export const formatTooltip = (value, data, chartLabel) => {
  const maxValue = Math.max(...data.map((d) => d.value || 0));
  const percent = maxValue ? ((value / maxValue) * 100).toFixed(1) : 0;
  return [`${percent}%`, chartLabel];
};
