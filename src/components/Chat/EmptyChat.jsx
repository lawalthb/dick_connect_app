import Image from 'next/image';

const EmptyChat = ({
  image,
  title = 'No Conversations Yet',
  description = 'Start a new chat or invite others to join the conversation.',
  width = '220',
  height = '140',
}) => {
  return (
    <div
      div
      className="flex flex-col items-center justify-center text-center gap-y-5"
    >
      <Image width={width} height={height} src={image} alt={title} />
      <div>
        <h3 className="font-bold text-[#141414]">{title}</h3>
        <p className="font-normal text-[#727272] max-w-[290px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EmptyChat;
