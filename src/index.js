const { CogsConnection } = COGS;

const cogsConnection = new CogsConnection();

function cueUpNextMinute() {
  const date = new Date();
  const now = date.getTime();

  const nextMinute = date;
  nextMinute.setMilliseconds(0);
  nextMinute.setSeconds(0);
  nextMinute.setMinutes(nextMinute.getMinutes() + 1);

  const eventValue = `${nextMinute
    .getHours()
    .toString()
    .padStart(2, "0")}:${nextMinute.getMinutes().toString().padStart(2, "0")}`;

  const nextMinuteTimeoutMs = nextMinute.getTime() - now;
  console.log(`Scheduling ${eventValue} in ${nextMinuteTimeoutMs / 1000}s`);

  setTimeout(() => {
    cogsConnection.sendEvent("Clock Strikes", eventValue);
    cueUpNextMinute();
  }, nextMinuteTimeoutMs);
}

cueUpNextMinute();
