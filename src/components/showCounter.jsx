import DateTimeDisplay from "./dateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds, m }) => {
  return (
    <div className="flex gap-2">
      <DateTimeDisplay value={days} type={"Hari"} m={m} i={1} />
      <DateTimeDisplay value={hours} type={"Jam"} m={m} i={2} />
      <DateTimeDisplay value={minutes} type={"Menit"} m={m} i={3} />
      <DateTimeDisplay value={seconds} type={"Detik"} m={m} i={4} />
    </div>
  );
};
