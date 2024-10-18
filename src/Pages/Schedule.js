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
                  {Array.from({ length: 11 }).map((_, index) => (
                    <th key={index}>Week {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Sorted by row, not by week/column */}
                <tr>
                  <td>OK/AL</td>
                  <td>AUB/TX</td>
                  <td>OM/AL</td>
                  <td>MSU/TN</td>
                  <td>KY/TN</td>
                  <td>OK/AUB</td>
                  <td>LSU/ARK</td>
                  <td>ARK/AUB</td>
                  <td>SC/MO</td>
                  <td>FL/AL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>MO/AUB</td>
                  <td>OM/ARK</td>
                  <td>MSU/AUB</td>
                  <td>VDY/AL</td>
                  <td>SC/GA</td>
                  <td>VDY/FL</td>
                  <td>TN/KY</td>
                  <td>OK/FL</td>
                  <td>MSU/AL</td>
                  <td>LSU/KY</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>FL/KY</td>
                  <td>TN/FL</td>
                  <td>MO/FL</td>
                  <td>GA/ARK</td>
                  <td>AUB/LSU</td>
                  <td>LSU/GA</td>
                  <td>FL/MSU</td>
                  <td>VDY/KY</td>
                  <td>TX/ARK</td>
                  <td>TN/MO</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>VDY/LSU</td>
                  <td>KY/GA</td>
                  <td>TAM/KY</td>
                  <td>TAM/OM</td>
                  <td>TX/OM</td>
                  <td>KY/OM</td>
                  <td>OK/OM</td>
                  <td>SC/LSU</td>
                  <td>OM/AUB</td>
                  <td>TX/MSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>GA/OM</td>
                  <td>LSU/MO</td>
                  <td>ARK/LSU</td>
                  <td>FL/SC</td>
                  <td>AL/MSU</td>
                  <td>MO/TN</td>
                  <td>OM/SC</td>
                  <td>TAM/MSU</td>
                  <td>FL/GA</td>
                  <td>GA/SC</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>SC/MSU</td>
                  <td>AL/SC</td>
                  <td>GA/TN</td>
                  <td>MO/TX</td>
                  <td>OK/TAM</td>
                  <td>ARK/TX</td>
                  <td>GA/TAM</td>
                  <td>AL/MO</td>
                  <td>TN/LSU</td>
                  <td>AUB/TAM</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>ARK/TN</td>
                  <td>MSU/VDY</td>
                  <td>SC/VDY</td>
                  <td>LSU/AL</td>
                  <td>GA/AL</td>
                  <td>AL/ARK</td>
                  <td>AUB/VDY</td>
                  <td>KY/AL</td>
                  <td>VDY/TAM</td>
                  <td>ARK/VDY</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td>TX/TAM</td>
                  <td>TAM/OK</td>
                  <td>TX/OK</td>
                  <td>OK/ARK</td>
                  <td>ARK/KY</td>
                  <td>FL/AUB</td>
                  <td>AL/TX</td>
                  <td>MO/ARK</td>
                  <td>KY/OK</td>
                  <td>MO/OK</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>FL/ARK</td>
                  <td>TX/FL</td>
                  <td>TN/AUB</td>
                  <td>TX/LSU</td>
                  <td>MSU/GA</td>
                  <td>AUB/AL</td>
                  <td>GA/AUB</td>
                  <td>TAM/FL</td>
                  <td>MSU/ARK</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>OK/GA</td>
                  <td>AUB/GA</td>
                  <td>GA/FL</td>
                  <td>AUB/OM</td>
                  <td>SC/KY</td>
                  <td>SC/FL</td>
                  <td>FL/LSU</td>
                  <td>AUB/KY</td>
                  <td>AL/AUB</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>LSU/OM</td>
                  <td>AL/KY</td>
                  <td>OM/MO</td>
                  <td>MO/MSU</td>
                  <td>OM/LSU</td>
                  <td>MO/GA</td>
                  <td>TX/SC</td>
                  <td>OK/OM</td>
                  <td>OM/FL</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>KY/MSU</td>
                  <td>OM/MSU</td>
                  <td>MSU/SC</td>
                  <td>TAM/SC</td>
                  <td>TAM/MO</td>
                  <td>MSU/OM</td>
                  <td>TN/TAM</td>
                  <td>LSU/MSU</td>
                  <td>VDY/GA</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>VDY/MO</td>
                  <td>ARK/MO</td>
                  <td>KY/VDY</td>
                  <td>FL/TN</td>
                  <td>TX/VDY</td>
                  <td>VDY/TN</td>
                  <td>OM/VDY</td>
                  <td>ARK/SC</td>
                  <td>TAM/LSU</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>AUB/SC</td>
                  <td>LSU/TAM</td>
                  <td>TX/TAM</td>
                  <td>VDY/OK</td>
                  <td>TN/OK</td>
                  <td>ARK/TAM</td>
                  <td>MSU/OK</td>
                  <td>AL/TN</td>
                  <td>KY/MO</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>AL/TAM</td>
                  <td>TN/VDY</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>KY/TX</td>
                  <td> </td>
                  <td>MO/VDY</td>
                  <td>SC/OK</td>
                  <td>SEC Tournament</td>
                </tr>
                <tr>
                  <td> </td>
                  <td>TN/TX</td>
                  <td>SC/OK</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>LSU/OK</td>
                  <td> </td>
                  <td>GA/TX</td>
                  <td> </td>
                  <td>SEC Tournament</td>
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
