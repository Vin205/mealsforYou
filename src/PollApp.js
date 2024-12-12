import React, { useState } from 'react';

const PollApp= ({ userRole }) => {
  const [poll, setPoll] = useState({
    question: '',
    options: [],
    votes: []
  });
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (!poll.question || poll.options.length < 2) {
      alert('Please provide a question and at least two options.');
      return;
    }

    const newPoll = {
      question: poll.question,
      options: poll.options,
      votes: poll.options.map(() => 0)
    };

    setPoll(newPoll);
  };

  const handleVote = () => {
    if (selectedOption === null) {
      alert('Please select an option to vote.');
      return;
    }

    const updatedPoll = { ...poll };
    updatedPoll.votes[selectedOption]++;
    setPoll(updatedPoll);
    setSelectedOption(null);
  };

  return (
    <div>
      {userRole === 'creator' && (
        <div>
          <h2>Create a Poll</h2>
          <input
            type="text"
            value={poll.question}
            onChange={(e) => setPoll({ ...poll, question: e.target.value })}
            placeholder="Enter your question"
          />
          {poll.options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...poll.options];
                  newOptions[index] = e.target.value;
                  setPoll({ ...poll, options: newOptions });
                }}
                placeholder={`Option ${index + 1}`}
              />
            </div>
          ))}
          <button onClick={() => setPoll({ ...poll, options: [...poll.options, ''] })}>
            Add Option
          </button>
          <button onClick={handleSubmit}>Create Poll</button>
        </div>
      )}

      {userRole === 'voter' && (
        <div>
          {poll.question && (
            <div>
              <h2>{poll.question}</h2>
              {poll.options.map((option, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      name="pollOption"
                      value={index}
                      onChange={() => setSelectedOption(index)}
                    />
                    {option}
                  </label>
                </div>
              ))}
              <button onClick={handleVote}>Vote</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PollApp;


