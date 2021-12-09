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
    // to do: initialize from state saved in db
    obj["toggled"] = athleteData[i].athlete.active;
    // to do: initialize from state saved in db, need to have a week_id for all points
    obj["wk_id"] = athleteData[i].week_number;
    console.log(athleteData[i]);

    // console.log({ athleteData });
    for (let n = 1; n <= 10; n++) {
      obj[`week${n}`] = athleteData[n - 1]?.points;
    }

    obj.total = athleteData.reduce((a, c) => ({
      points: a.points + c.points,
    })).points;

    rows.push(obj);
  }
  //   console.log({ rows });
  return rows;
};
