import React from 'react';
import ChallengeCard from './ChallengeCard';

const EventsList = ({ filteredEvents }) => {
  return (
    <div className="events-list">
      {filteredEvents.map((event, index) => (
        <ChallengeCard
          key={index}
          onClick={event.onClick}
          status={event.status}
          statusHref={event.statusHref}
          prize={event.prize}
          prizeHref={event.prizeHref}
          logoSrc={event.logoSrc}
          title={event.title}
          titleHref={event.titleHref}
          targetAudience={event.targetAudience}
          organization={event.organization}
          mode={event.mode}
          tagList={event.tagList}
        />
      ))}
    </div>
  );
};

export default EventsList;
