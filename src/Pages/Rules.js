import React from "react";
import { Container, Row, Col, Navbar, Image } from "react-bootstrap";

export default function Rules() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">2021-2022 RULES AND REGULATIONS</h1>
            <hr></hr>
            <p>
              This letter is to inform you of details for the upcoming 2021-2022
              season player draft. This is the THIRTY NINTH year we have been
              conducting this draft. For those of us that have been around from
              the beginning, did we really think we would last this long? This
              is either a lot of fun or we lead very boring lives. We will
              conduct a poll on that issue on draft day. We should have six
              participants this year. If you intend to participate in the league
              this year, please e-mail or call the commissioner as soon as you
              read this letter and confirm your attendance at the draft.
            </p>
            <p>
              Elsewhere on this website you will find your copy of the schedule
              of games for the upcoming season. Due to the constant addition and
              subtraction of players from team rosters due to COVID-19, flunking
              out, and NCAA investigations, no rosters will be provided by the
              commissioner. It is impossible to know who will be eligible, so no
              attempt will be made to guess at various players eligibility as
              this may prejudice your draft choices. There are numerous
              publications and websites available that list rosters, so it will
              be up to each league participant to compile their own list of
              players.
            </p>
            <p>
              If there is no conflict with Sunday, November 7, 2021 the draft
              will be held on this date at the hour of 7:00 pm ET. The league
              will be conducting the draft electronically through group text
              messages or email. There will be nine rounds of drafting with each
              participant being given one minute to make their selections each
              round. The draft order of the ninth round will be the same order
              as the first round. As you can see you should be prepared to pick
              quickly. If you have not made your pick within the time limit it
              will count as a pass. A lottery will be held to determine the
              order of draft. See the home page for draft order. Any player that
              is hurt or becomes academically ineligible is lost and cannot be
              replaced on the roster except in accordance with the rules herein
              stated.
            </p>
            <p>
              Here is a quick review of the rules of the league. Each week of
              the season you must pick a lineup of 5 players, they stay in the
              lineup all week even if injured. The object is to pick the five
              highest point scorers. Their totals will be gathered from the box
              scores each week and tabulated with certain bonus points awarded
              for reaching certain levels in individual games. (Scoring, 5 for
              20, 10 for 25, 15 for 30, 20 for 35, 25 for 40, 30 for 45, and 35
              for 50 or above). If a player in your lineup does not play you get
              0 points, too bad. There will be nine weeks of regular season
              action and the final week will be comprised of tournament action.
              At the end of the ten weeks the draft participant with the most
              total points wins. If you do not submit a lineup for the week,
              your previous lineup remains in place. Lineups must be submitted
              before the first game of the week or it will not be counted as
              made timely.
            </p>
            <p>
              This year there will be two mid-week substitutions allowed. All
              substitutions must be received by the commissioner before noon on
              the day of the games affected. The two mid-week substitutions
              changes must be used in weeks one through nine, they will not be
              allowed in the tourney week. .
            </p>
            <p>
              Scoring only but a new rule to allow teams to exchange a player
              for any undrafted player at the end of weeks 3, and 6. This
              supplemental draft will go in reverse order of the standings at
              weeks 3, and 6. Only one supplemental pick per team in each of the
              two rounds(weeks 3, and 6).
            </p>
            <p>
              No cash fee for participating in the league will be collected
              prior to the lottery for draft position. This year's fees have all
              been paid by the Commissioner prior to the draft. All rules
              interpretations are made solely by the Commissioner and are
              considered final. You will be notified of any material changes to
              the above.
            </p>
            <br></br>
            <h6>GOOD LUCK,</h6>
            <h6>THE COMMISIONER</h6>
          </Col>
        </Row>
      </Container>
      <Navbar sticky="bottom">
        <Container className="text-center">
          <Row className="row-1">
            <Col>
              <Image
                src="./img/AMBlackXLTransBG.jpg"
                alt="Andrew Mills Logo"
                width="30"
                height="24"
              />
              Developed by Andrew Mills, 2021.
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}
