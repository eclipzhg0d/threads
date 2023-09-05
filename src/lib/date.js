import { parseISO, formatDistance, subDays } from "date-fns";

export default function FormatDate({ dateString }) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(
    undefined,
    Intl.DateTimeFormat("en-US")
  );

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time}, ${formattedDate}`;
}
