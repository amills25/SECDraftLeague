export const generateRows = ({
  rosterData,
  columns,
  currentRoster,
  component,
}) => {
  const memberRosterData = rosterData.find((r) => r.user_id === currentRoster);
  const athleteIDs = [
    ...new Set(memberRosterData.weeks.map((item) => item.athlete_id)),
  ];
  console.log({
    memberRosterData,
    athleteIDs,
    columns,
  });
  let rows = [];
  for (let week = 0; week < 10; week++) {
    for (let i = 0; i < athleteIDs.length; i++) {
      let obj = {
        active: component,
      };
      let total = 0;

      for (const col of columns) {
        obj[col.name] = memberRosterData;

        if (col.name === "name") {
            obj.name = 
        }
        if (col.name === "team") {
            obj.team = 
        }
        let weekNum = parseInt(col.name.split('week')[1])
      }
      obj.total = total;

      rows.push(obj);
    }
  }
  return rows;
};
