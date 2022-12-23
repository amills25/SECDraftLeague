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
                  <td>TN/OM</td> 
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
                  <td>KY/MO</td>
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
                  <td>ARK/LSU</td>
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
                  <td>SC/VDY</td>
                  <td>MSU/GA</td>
                  <td>FL/TAM</td>
                  <td>MSU/AL</td>
                  <td>LSU/MO</td>
                  <td>FL/AL</td>
                  <td>ARK/TAM</td>
                  <td>OM/AUB</td>
                  <td>VDY/KY</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>MSU/TN</td>
                  <td>MO/TAM</td>
                  <td>AUB/LSU</td>
                  <td>TAM/AUB</td>
                  <td>TN/FL</td>
                  <td>LSU/MSU</td>
                  <td>OM/FL</td>
                  <td>AL/SC</td>
                  <td>MO/LSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>LSU/KY</td>
                  <td>LSU/AL</td>
                  <td>OM/ARK</td>
                  <td>SC/GA</td>
                  <td>FL/KY</td>
                  <td>VDY/FL</td>
                  <td>TN/KY</td>
                  <td>AUB/KY</td>
                  <td>AL/TAM</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>OM/AL</td>
                  <td>TAM/SC</td>
                  <td>VDY/GA</td>
                  <td>VDY/TAM</td>
                  <td>AL/LSU</td>
                  <td>SC/OM</td>
                  <td>FL/ARK</td>
                  <td>MO/GA</td>
                  <td>KY/ARK</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>AUB/GA</td>
                  <td>ARK/VDY</td>
                  <td>TAM/KY</td>
                  <td> </td>
                  <td>MO/MSU</td>
                  <td>MO/TN</td>
                  <td>GA/AL</td>
                  <td>TAM/MSU</td>
                  <td>MSU/VDY</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>MO/ARK</td>
                  <td>MSU/AUB</td>
                  <td>TN/LSU</td>
                  <td> </td>
                  <td>ARK/SC</td>
                  <td>MSU/ARK</td>
                  <td>SC/LSU</td>
                  <td>FL/VDY</td>
                  <td>TN/AUB</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>TAM/FL</td>
                  <td>MO/FL</td>
                  <td>FL/MSU</td>
                  <td> </td>
                  <td>AUB/TN</td>
                  <td>AL/AUB</td>
                  <td>MSU/OM</td>
                  <td>ARK/AL</td>
                  <td>LSU/FL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>VDY/MO</td>
                  <td>GA/OM</td>
                  <td>AL/MO</td>
                  <td> </td>
                  <td>GA/TAM</td>
                  <td>KY/GA</td>
                  <td>TAM/MO</td>
                  <td>LSU/OM</td>
                  <td>OM/MO</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>LSU/TAM</td>
                  <td>KY/TN</td>
                  <td>AUB/SC</td>
                  <td> </td>
                  <td>OM/VDY</td>
                  <td>TAM/LSU</td>
                  <td>AUB/VDY</td>
                  <td>SC/TN</td>
                  <td>GA/SC</td>
                  <td> </td>
                </tr>
                <tr>
                  <td>KY/AL</td>
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
                  <td>TN/SC</td>
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
                  <td>GA/FL</td>
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
                  <td>ARK/AUB</td>
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
                  <td>OM/MSU</td>
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
