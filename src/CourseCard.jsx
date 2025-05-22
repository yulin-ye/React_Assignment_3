import { useState } from 'react';
import './CourseCard.css';

const CourseCard = ({ data, difficulty }) => {
  const {
    imageUrl,
    name,
    price,
    language,
    duration,
    location,
    isNew,
    isCompleted,
  } = data;
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const handleSubmit = () => {
    setIsReviewSubmitted(true);
  };
  const [isReviewButtonShown, setIsReviewButtonShown] = useState(true);
  const handleLeaveReview = () => {
    setIsReviewButtonShown(!isReviewButtonShown);
  };

  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="coursecard">
      <img src={imageUrl} alt='background image'/>
      <div className="coursecard__overlay">
        <header>
          <h2 className="title">{name}</h2>
          {isNew ? <img className="badge" src="../images/badge.png" /> : ''}
        </header>
        <main>
          <p>{`Price: ${price}`}</p>
          <p>{`Language: ${language}`}</p>
          <p>{`Duration: ${duration}`}</p>
          <p>{`Location: ${location}`}</p>
        </main>
        <footer>
          <div className='button-container'>
            <button>{isCompleted ? 'Revisit' : 'Start Course'}</button>
          </div>
          <div className="button-container">
            {isReviewSubmitted ? (
              <p className="reminder">Review Submitted</p>
            ) : isReviewButtonShown ? (
              <div>
                <button onClick={handleLeaveReview}>Leave a review</button>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder="Please input your review here"
                />
                <button onClick={handleSubmit}>Submit</button>
              </div>
            )}
            <div>
              <button onClick={handleCount}>
                {difficulty === 'Beginner'
                  ? 'Start Learning Now!'
                  : 'Enroll Now!'}
              </button>
              <p className="enrollment-count">{`Enrolled: ${count} times`}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CourseCard;
