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
                  <td>AUB/ARK</td>
                  <td>FL/TN</td>
                  <td>KY/SC</td>
                  <td>SC/TN</td>
                  <td>OM/SC</td>
                  <td>TAM/VDY</td>
                  <td>ARK/TAM</td>
                  <td>KY/MSU</td>
                  <td>OM/GA</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>MSU/SC</td>
                  <td>MO/AL</td>
                  <td>MO/TAM</td>
                  <td>MSU/OM</td>
                  <td>KY/VDY</td>
                  <td>LSU/FL</td>
                  <td>TN/MO</td>
                  <td>GA/LSU</td>
                  <td>AL/FL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>KY/FL</td>
                  <td>GA/SC</td>
                  <td>LSU/GA</td>
                  <td>AL/GA</td>
                  <td>LSU/TN</td>
                  <td>OM/KY</td>
                  <td>FL/AL</td>
                  <td>VDY/ARK</td>
                  <td>AUB/MO</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>GA/MO</td>
                  <td>TAM/ARK</td>
                  <td>AUB/AL</td>
                  <td>FL/KY</td>
                  <td>AL/AUB</td>
                  <td>SC/AUB</td>
                  <td>GA/VDY</td>
                  <td>MO/FL</td>
                  <td>LSU/ARK</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>AL/VDY</td>
                  <td>MSU/KY</td>
                  <td>MSU/FL</td>
                  <td>ARK/MO</td>
                  <td>TAM/MO</td>
                  <td>TN/ARK</td>
                  <td>KY/LSU</td>
                  <td>AUB/TN</td>
                  <td>TN/SC</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>OM/TN</td>
                  <td>OM/LSU</td>
                  <td>ARK/OM</td>
                  <td>VDY/AUB</td>
                  <td>GA/MSU</td>
                  <td>TAM/AL</td>
                  <td>OM/MSU</td>
                  <td>SC/TAM</td>
                  <td>MSU/TAM</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>LSU/TN</td>
                  <td>AUB/VDY</td>
                  <td>GA/FL</td>
                  <td>ARK/LSU</td>
                  <td>AL/LSU</td>
                  <td>FL/GA</td>
                  <td>MO/ARK</td>
                  <td>AL/OM</td>
                  <td>VDY/KY</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>SC/AL</td>
                  <td>AL/TN</td>
                  <td>MO/SC</td>
                  <td>SC/GA</td>
                  <td>VDY/SC</td>
                  <td>ARK/MSU</td>
                  <td>VDY/FL</td>
                  <td>LSU/VDY</td>
                  <td>ARK/AL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>MO/KY</td>
                  <td>FL/MO</td>
                  <td>AUB/MSU</td>
                  <td>MO/VDY</td>
                  <td>AUB/FL</td>
                  <td>LSU/SC</td>
                  <td>SC/OM</td>
                  <td>ARK/KY</td>
                  <td>TAM/OM</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>VDY/LSU</td>
                  <td>TAM/LSU</td>
                  <td>TN/VDY</td>
                  <td>FL/TAM</td>
                  <td>GA/ARK</td>
                  <td>KY/AUB</td>
                  <td>AL/KY</td>
                  <td>FL/SC</td>
                  <td>SC/MSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>TAM/AUB</td>
                  <td>SC/ARK</td>
                  <td>KY/ARK</td>
                  <td>AUB/OM</td>
                  <td>TN/TAM</td>
                  <td>VDY/TN</td>
                  <td>AUB/GA</td>
                  <td>MSU/AUB</td>
                  <td>KY/TN</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>TN/MSU</td>
                  <td>VDY/MSU</td>
                  <td>LSU/AL</td>
                  <td>MSU/AL</td>
                  <td>MSU/MO</td>
                  <td>MO/OM</td>
                  <td>TAM/TN</td>
                  <td>TAM/GAL</td>
                  <td>FL/VDY</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>ARK/GA</td>
                  <td>GA/KY</td>
                  <td>OM/TAM</td>
                  <td>TN/KY</td>
                  <td> </td>
                  <td> </td>
                  <td>MSU/LSU</td>
                  <td>TN/AL</td>
                  <td>GA/AUB</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>FL/OM</td>
                  <td>OM/AUB</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>OM/MO</td>
                  <td>MO/LSU</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>TN/GA</td>
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
                  <td>VDY/OM</td>
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
                  <td>KY/TAM</td>
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
                  <td>SC/MO</td>
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
                  <td>ARK/FL</td>
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
                  <td>LSU/AUB</td>
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
                  <td>AL/MSU</td>
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
