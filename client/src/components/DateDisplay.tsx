interface DateDisplayProps {
  date: Date;
}

const DateDisplay = ({ date }: DateDisplayProps) => {
  return (
    <p>
      {new Date(date).getMonth() + 1}/{new Date(date).getDate()}/
      {new Date(date).getFullYear()}
    </p>
  );
};

export default DateDisplay;
