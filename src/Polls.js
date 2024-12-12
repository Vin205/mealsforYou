import React, { useState } from 'react';
import CreatePoll from './CreatePoll';
import Poll from './Poll';

const Polls = () => {
  const [polls, setPolls] = useState([]);

  const handleCreatePoll = (pollData) => {
    setPolls([...polls, { ...pollData, id: polls.length + 1 }]);
  };

  return (
    <div>
      <h1>Polls</h1>
      <CreatePoll onCreatePoll={handleCreatePoll} />
      <hr />
      <h2>Existing Polls:</h2>
      {polls.map((poll) => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </div>
  );
};

export default Polls;
