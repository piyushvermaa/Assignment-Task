import React, { useState } from 'react';
import FrameComponent from '../components/frame-component';
import Background from '../components/background';
import CompetitionTypes from '../components/competition-types';
import FilterPanel from '../components/FilterPanel';
import EventsList from '../components/EventsList';
import events from '../components/events';

const App = () => {
  const [filters, setFilters] = useState({ category: '', teamSize: null, eligibility: '', searchTerm: '' });

  const handleSearch = (event) => {
    const value = event.target.value;
    setFilters(prevFilters => ({
      ...prevFilters,
      searchTerm: value,
    }));
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearchTerm = event.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesCategory = filters.category ? event.tagList.includes(filters.category) : true;
    const matchesTeamSize = filters.teamSize ? event.teamSize === filters.teamSize : true;
    const matchesEligibility = filters.eligibility ? event.targetAudience === filters.eligibility : true;
    return matchesSearchTerm && matchesCategory && matchesTeamSize && matchesEligibility;
  });

  return (
    <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gradient-to-br from-white to-[#fff] box-border overflow-y-auto flex flex-col items-start justify-start leading-normal tracking-normal border-[1px] border-solid border-wwwproelevatein-black">
      <FrameComponent />
      <main className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[2.5rem] box-border relative gap-[2.5rem] min-h-[75rem] max-w-full mq825:gap-[1.25rem]">
        <CompetitionTypes />
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-[1.25rem] box-border max-w-full text-center text-[1rem] text-wwwproelevatein-blue-charcoal font-inter">
          <div className="w-[78.125rem] flex flex-row items-start justify-start gap-[1.5rem] max-w-[78.125rem] mq1275:max-w-full">
            <div className="w-[24rem] flex flex-col items-start justify-start gap-[1.5rem] max-w-full">
              <FilterPanel filters={filters} setFilters={setFilters} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-left text-[1.125rem]">
              <div className="relative leading-[1.75rem] font-medium">
                All Events ({filteredEvents.length})
              </div>
              <div className="w-full flex items-center mb-4">
                <input
                  type="text"
                  value={filters.searchTerm}
                  onChange={handleSearch}
                  placeholder="Search events..."
                  className="w-full p-2 border border-gray-300 rounded-md transition-colors duration-300 focus:border-blue-500 focus:outline-none hover:border-blue-500"
                />
              </div>
              <EventsList filteredEvents={filteredEvents} />
            </div>
          </div>
        </section>
      </main>
      <Background />
    </div>
  );
};

export default App;
