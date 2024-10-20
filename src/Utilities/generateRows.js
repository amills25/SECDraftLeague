export const generateRows = ({ rosterData, currentRoster, component }) => {
  const memberRosterData = rosterData.find((r) => r.user_id === currentRoster);
  const athleteIDs = [
    ...new Set(memberRosterData.weeks.map((item) => item.athlete_id)),
  ];
  let rows = [];
  for (let i = 0; i < athleteIDs.length; i++) {
    let athleteID = athleteIDs[i];
    let athleteData = memberRosterData.weeks.filter(
      (w) => w.athlete_id === athleteID
    );

    let obj = {
      id: i,
      active: component(athleteID),
    };

    obj["name"] = athleteData[i].athlete.name;
    obj["team"] = athleteData[i].athlete.team;
    obj["toggled"] = athleteData[i].athlete.active;
    obj["wkData"] = athleteData;

    for (let n = 1; n <= 11; n++) {
      obj[`week${n}`] = athleteData[n - 1]?.points;
    }

    obj.total = athleteData.reduce((a, c) => ({
      points: a.points + c.points,
    })).points;

    rows.push(obj);
  }
  return rows;
};
