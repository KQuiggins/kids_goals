import { useState } from 'react';
import './StarChart.css'; // Make sure to create this CSS file

// The Star component will take a prop to determine if it is filled or not


type StarProps = {
  filled: boolean;
};

const Star = ({ filled }: StarProps ) => (
  <div className={`star ${filled ? 'filled' : 'empty'}`}></div>
);

// The StarChart component manages the state of all stars

type StarChartProps = {
  totalStars: number;
};

const StarChart = ({ totalStars }: StarChartProps) => {
  const [earnedStars, setEarnedStars] = useState(0);

  const earnStar = () => {
    if (earnedStars < totalStars) {
      setEarnedStars(earnedStars + 1);
    }
  };

  return (
    <div className="star-chart">
      <button onClick={earnStar}>Earn Star</button>
      {[...Array(totalStars)].map((_, i) => (
        <Star key={i} filled={i < earnedStars} />
      ))}
    </div>
  );
};

export default StarChart;
