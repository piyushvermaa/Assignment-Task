import React, { useState } from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    // Toggle the filter on/off
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: prevFilters[key] === value ? '' : value,
    }));
  };

  // Define filter options
  const categories = ['Hackathons', 'Competitions', 'Software Engineering Drives'];
  const teamSizes = [1, 2, 3];
  const eligibility = ['Professionals', 'Students', 'Startups'];
  const technologyStack = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Swift'];
  const eventType = ['Online', 'Offline', 'Hybrid'];
  const difficultyLevel = ['Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="filter-panel bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Events</h2>
      <FilterSection
        title="Categories"
        options={categories}
        activeOption={filters.category}
        onSelect={(category) => handleFilterChange('category', category)}
      />
      <FilterSection
        title="Team Size"
        options={teamSizes}
        activeOption={filters.teamSize}
        onSelect={(teamSize) => handleFilterChange('teamSize', teamSize)}
      />
      <FilterSection
        title="Eligibility"
        options={eligibility}
        activeOption={filters.eligibility}
        onSelect={(eligibility) => handleFilterChange('eligibility', eligibility)}
      />
      <FilterSection
        title="Technology Stack"
        options={technologyStack}
        activeOption={filters.technologyStack}
        onSelect={(techStack) => handleFilterChange('technologyStack', techStack)}
      />
      <FilterSection
        title="Event Type"
        options={eventType}
        activeOption={filters.eventType}
        onSelect={(eventType) => handleFilterChange('eventType', eventType)}
      />
      <FilterSection
        title="Difficulty Level"
        options={difficultyLevel}
        activeOption={filters.difficultyLevel}
        onSelect={(difficultyLevel) => handleFilterChange('difficultyLevel', difficultyLevel)}
      />
    </div>
  );
};

const FilterSection = ({ title, options, activeOption, onSelect }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {options.map(option => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:border-blue-500 transition-colors duration-300 transform hover:scale-105 ${option === activeOption ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-200'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
