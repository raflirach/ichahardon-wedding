import { useCountdown } from "@/hooks/useCountdown";
import { ShowCounter } from "./showCounter";

export const CountdownTimer = ({ targetDate, m }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ShowCounter days={0} hours={0} minutes={0} seconds={0} m={m} />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        m={m}
      />
    );
  }
};
