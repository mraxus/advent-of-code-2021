const { spawn } = require('child_process');
const {
  createDayFile,
  getAocPackageDays,
  getProblemInput,
  getProblemDetails,
  updateAocPackage,
} = require('..');

async function main(day) {
  const input = await getProblemInput(day);
  const { author, name, stars } = await getProblemDetails(day).catch((x) => console.error(x));
  const days = getAocPackageDays();

  let dayPack = days.find((d) => d.day === +day);
  if (!dayPack) {
    dayPack = { day: +day, name };
    days.push(dayPack);
  }
  days.sort((a, b) => a.day - b.day);

  try {
    const newFile = createDayFile(day, input);
    spawn('open', [newFile], { detached: true });
  } catch (ex) {
    console.error(ex.message);
    return;
  }

  updateAocPackage(author, days, stars);
}

main(...process.argv.slice(2)).then(() => {});
