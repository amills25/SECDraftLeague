import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

export default function Schedule() {
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center slogan">SCHEDULE</h1>
          <hr></hr>
          <Col className="myBorder bdr bg-white">
            <Table responsive>
              <thead>
                <tr>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <th key={index}>Week {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Sorted by row, not by week/column */}
                <tr>
                  <td>KY/MO</td>
                  <td>FL/LSU</td>
                  <td>AL/VDY</td>
                  <td>MO/OM</td>
                  <td>KY/OM</td>
                  <td>OM/GA</td>
                  <td>MO/AUB</td>
                  <td>GA/ARK</td>
                  <td>FL/GA</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>FL/AUB</td>
                  <td>SC/KY</td>
                  <td>GA/KY</td>
                  <td>KY/VDY</td>
                  <td>VDY/AL</td>
                  <td>ARK/KY</td>
                  <td>LSU/GA</td>
                  <td>MSU/MO</td>
                  <td>TAM/OM</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>ARK/LSU</td>
                  <td>AUB/OM</td>
                  <td>OM/SC</td>
                  <td>LSU/ARK</td>
                  <td>MSU/SC</td>
                  <td>SC/MO</td>
                  <td>VDY/SC</td>
                  <td>TN/TAM</td>
                  <td>SC/MSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>TN/OM</td>
                  <td>VDY/TN</td>
                  <td>TN/MSU</td>
                  <td>GA/TN</td>
                  <td>TAM/ARK</td>
                  <td>AUB/TAM</td>
                  <td>AL/TN</td>
                  <td>KY/FL</td>
                  <td>ARK/TN</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>AL/MSU</td>
                  <td>AL/ARK</td>
                  <td>ARK/MO</td>
                  <td>SC/FL</td>
                  <td>GA/AUB</td>
                  <td>TN/VDY</td>
                  <td>KY/MSU</td>
                  <td>VDY/LSU</td>
                  <td>AUB/AL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>AUB/SC</td>
                  <td>GA/MSU</td>
                  <td>KY/TAM</td>
                  <td>ARK/OM</td>
                  <td>ARK/GA</td>
                  <td>AL/OM</td>
                  <td>MSU/AL</td>
                  <td>OM/AUB</td>
                  <td>LSU/ARK</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>TAM/GA</td>
                  <td>LSU/FL</td>
                  <td>GA/AUB</td>
                  <td>TAM/LSU</td>
                  <td>FL/MO</td>
                  <td>TN/MSU</td>
                  <td>VDY/AUB</td>
                  <td>LSU/KY</td>
                  <td>AUB/MSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>KY/LSU</td>
                  <td>TN/KY</td>
                  <td>KY/AUB</td>
                  <td>GA/VDY</td>
                  <td>TN/SC</td>
                  <td>ARK/AL</td>
                  <td>AUB/FL</td>
                  <td>FL/GA</td>
                  <td>ARK/TN</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>VDY/ARK</td>
                  <td>VDY/GA</td>
                  <td>VDY/FL</td>
                  <td>SC/TAM</td>
                  <td>AUB/GA</td>
                  <td>SC/GA</td>
                  <td>TN/ARK</td>
                  <td>AUB/TN</td>
                  <td>KY/FL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>OM/TN</td>
                  <td>ARK/LSU</td>
                  <td>GA/SC</td>
                  <td> </td>
                  <td>OM/FL</td>
                  <td>TAM/AUB</td>
                  <td>AL/KY</td>
                  <td>KY/ARK</td>
                  <td>AL/LSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>AL/FL</td>
                  <td>FL/SC</td>
                  <td>OM/MSU</td>
                  <td> </td>
                  <td>MO/TAM</td>
                  <td>FL/KY</td>
                  <td>OM/GA</td>
                  <td>VDY/MSU</td>
                  <td>SC/AUB</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>MSU/OM</td>
                  <td>TAM/MO</td>
                  <td>LSU/TN</td>
                  <td> </td>
                  <td>LSU/YDV</td>
                  <td>VDY/TN</td>
                  <td>LSU/SC</td>
                  <td>TAM/OM</td>
                  <td>GA/OM</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>SC/VDY</td>
                  <td>AL/MSU</td>
                  <td>MO/AL</td>
                  <td> </td>
                  <td>KY/AL</td>
                  <td>MSU/LSU</td>
                  <td>TAM/VDY</td>
                  <td>SC/AL</td>
                  <td>VDY/OM</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>ARK/TAM</td>
                  <td>AUB/OM</td>
                  <td>TAM/ARK</td>
                  <td> </td>
                  <td>MSU/ARK</td>
                  <td>OM/MO</td>
                  <td>MO/MSU</td>
                  <td>MO/LSU</td>
                  <td>MSU/TAM</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>AL/MO</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>TN/LSU</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>GA/KY</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>FL/AUB</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
                <tr>
                  <td>MSU/MO</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <br></br>
    </>
  );
}
