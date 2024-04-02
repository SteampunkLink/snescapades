interface PodcastDisplayProps {
  source: string;
}

const PodcastDisplay = ({ source }: PodcastDisplayProps) => {
  return (
    <>
      <iframe src={source}></iframe>
    </>
  );
};

export default PodcastDisplay;
