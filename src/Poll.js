import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Poll.css';

const Poll = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    question1: null,
    question2: null,
    question3: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to manage the visibility of the pop-up

  const handleSelectOption = (question, option) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [question]: option
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowPopup(true); // Show the pop-up window
  };

  return (
    <div style={{ backgroundImage: 'url("./images/s7.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className='pb-5'></div>
        <div className='pb-5'></div>
        <h2 style={{ color: 'white' }}>Vote on Polls</h2>

        <div className="card">
          <div className="card-body">
          <h5 className="card-title">Breakfast</h5>
            <p>Time: 7am to 8am</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="question1"
                id="option1"
                value="Poha"
                checked={selectedOptions.question1 === 'Poha'}
                onChange={() => handleSelectOption('question1', 'Poha')}
              />
              <label className="form-check-label" htmlFor="option1">
                Poha
              </label>
            </div>
            
            <input
              className="form-check-input"
              type="radio"
              name="question1"
              id="option2"
              value="No"
              checked={selectedOptions.question1 === 'Medu Vada'}
              onChange={() => handleSelectOption('question1', 'Medu Vada')}
            />
            <label className="form-check-label" htmlFor="option2">
              Medu Vada
            </label>
            <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question1"
              id="option3"
              value="Both"
              checked={selectedOptions.question1 === 'Upma'}
              onChange={() => handleSelectOption('question1', 'Upma')}
            />
            <label className="form-check-label" htmlFor="option3">
              Upma
            </label>
          </div>
        </div>
          </div>
         
      
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Lunch</h5>
          <p>Time: 12:15pm to 1pm</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question2"
              id="option4"
              value="Yes"
              checked={selectedOptions.question2 === 'Rajma Chawal'}
              onChange={() => handleSelectOption('question2', 'Rajma Chawal')}
            />
            <label className="form-check-label" htmlFor="option4">
              Rajma Chawal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question2"
              id="option5"
              value="No"
              checked={selectedOptions.question2 === 'No'}
              onChange={() => handleSelectOption('question2', 'No')}
            />
            <label className="form-check-label" htmlFor="option5">
              Khichadi 
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question2"
              id="option6"
              value="Both"
              checked={selectedOptions.question2 === 'Both'}
              onChange={() => handleSelectOption('question2', 'Both')}
            />
            <label className="form-check-label" htmlFor="option6">
              Dal Chawal
            </label>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Dinner</h5>
          <p className="card-text">Time: 8pm to 9pm</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question3"
              id="option7"
              value="Yes"
              checked={selectedOptions.question3 === 'Yes'}
              onChange={() => handleSelectOption('question3', 'Yes')}
            />
            <label className="form-check-label" htmlFor="option7">
              Paneer & Parota
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question3"
              id="option8"
              value="No"
              checked={selectedOptions.question3 === 'No'}
              onChange={() => handleSelectOption('question3', 'No')}
            />
            <label className="form-check-label" htmlFor="option8">
              Rotti & Veg Kuruma
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="question3"
              id="option9"
              value="Both"
              checked={selectedOptions.question3 === 'Both'}
              onChange={() => handleSelectOption('question3', 'Both')}
            />
            <label className="form-check-label" htmlFor="option9">
              Puri & Potato Masala
            </label>
         
            </div>
          </div>
        </div>
        <div >
         

        {/* Your other card components */}

        <div>
          <button type="submit" className="btn btn-primary mt-3" onClick={handleSubmit}>
            Submit
          </button>
          {submitted && <p className="response-recorded"></p>}
        </div>

        {/* Pop-up window */}
        {showPopup && (
          <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Success</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowPopup(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Your response has been recorded.
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <div className='pb-5'></div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <p>&copy; Edu@enyanjyoti. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default Poll;
