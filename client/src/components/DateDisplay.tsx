interface DateDisplayProps {
  date: Date;
}

const DateDisplay = ({ date }: DateDisplayProps) => {
  return (
    <p>
      {new Date(date).getUTCMonth() + 1}/{new Date(date).getUTCDate()}/
      {new Date(date).getUTCFullYear()}
    </p>
  );
};

export default DateDisplay;
