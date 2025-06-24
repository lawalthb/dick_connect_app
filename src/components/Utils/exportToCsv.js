export const exportToCsv = (filename, columns, data) => {
  const headers = columns.map((col) => `"${col.label}"`).join(',');
  const rows = data.map((row) =>
    columns.map((col) => `"${row[col.key] ?? ''}"`).join(','),
  );

  const csvContent = [headers, ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
