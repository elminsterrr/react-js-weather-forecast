import React from 'react';

function ChartWeatherItem(props) {
  const rainIcon = 'https://res.cloudinary.com/dfe57evk4/image/upload/v1495363091/rain_ps0iny.png';
  const month = props.date.monthname.slice(0, 3);
  const day = props.date.day;
  const twoDigitsDay = (day < 10 ? '0' : '') + day;

  return (
    <th>
      {props.date.weekday_short}<br />
      {twoDigitsDay} {month}<br />
      <img src={props.iconLink} alt="Wheather forecast icon" /><br />
      <span className="hot">{props.high}&deg;</span><br />
      <span className="cold">{props.low}&deg;</span><br />
      <img src={rainIcon} alt="Rain icon" /><br />
      <span className="rain-data">{props.rain}</span> <span className="mm">mm</span>
    </th>
  );
}

export default ChartWeatherItem;
