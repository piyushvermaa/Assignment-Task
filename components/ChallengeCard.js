import React from 'react';

const ChallengeCard = ({
  onClick,
  status,
  statusHref,
  prize,
  prizeHref,
  logoSrc,
  title,
  titleHref,
  targetAudience,
  organization,
  mode,
  tagList,
}) => {
  let radioColor = ''; // Initialize radio color

  // Determine the color of the radio button based on the event status
  switch (status) {
    case 'Live':
      radioColor = 'green';
      break;
    case 'Upcoming':
      radioColor = 'yellow';
      break;
    case 'Expired':
      radioColor = 'red';
      break;
    default:
      radioColor = 'transparent';
  }

  return (
    <div className="rounded-xl bg-gradient-to-br from-[#fceedfa1] to-white flex flex-col items-start justify-start p-[1.5rem] box-border gap-[0.75rem] w-[55rem] cursor-pointer m-3 shadow-lg transition-transform transform hover:scale-105">
      <div className="flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] gap-[0rem_0.375rem]">
        <div className="flex flex-row items-start justify-start gap-[0.25rem]">
          <input
            className={`cursor-pointer m-0 h-4 w-4 rounded-full relative min-h-4 ${radioColor === 'transparent' ? 'bg-gray-300' : `bg-${radioColor}-500`}`}
            type="radio"
            disabled // Disable the input so the user cannot interact with it
          />
          <a
            className="relative leading-[1.25rem] capitalize text-black [text-decoration:none]"
            href={statusHref}
            target="_blank"
          >
            {status}
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <div className="w-[0.063rem] h-[0.75rem] relative bg-gray-200" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.25rem] text-black">
          <img
            className="h-[1.25rem] w-[1.25rem] relative min-h-[1.25rem] rounded-full"
            alt=""
            src={logoSrc}
          />
          <a
            className="relative leading-[1.25rem] capitalize text-black inline-block [text-decoration:none] min-w-[3.938rem]"
            href={prizeHref}
            target="_blank"
          >
            {prize}
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.5rem]">
        <a href={titleHref} target="_blank" className="text-lg font-bold text-black transition-colors hover:text-blue-600">
          {title}
        </a>
        <div className="text-black">{targetAudience}</div>
        <div className="text-black">{organization}</div>
        <div className="text-black">{mode}</div>
        <div className="text-black">Hashtags: {tagList.join(', ')}</div>
      </div>
      <div className="self-stretch h-[0.063rem] relative bg-gray-300" />
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0rem_0.5rem]">
        <button className="rounded-full bg-[#EA6904] text-white py-1 px-3 transition-colors hover:bg-blue-600">Register</button>
      </div>
    </div>
  );
};

export default ChallengeCard;
