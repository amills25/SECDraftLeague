import React from "react";
import { Table, Navbar, Image, Container, Row, Col } from "react-bootstrap";

export default function Schedule() {
  return (
    <>
    <Container>
        <Row>
          <h1 className="text-center">SCHEDULE</h1>
          <hr></hr>
            <Col>
                <Table responsive>
                    <thead>
                    <tr>
                        {Array.from({ length: 10 }).map((_, index) => (
                        <th key={index}>Week {index + 1}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>FL/OM</td>
                        <td>SC/TN</td>
                        <td>SC/ARK</td>
                        <td>AL/GA</td>
                        <td>TAM/TN</td>
                        <td>LSU/TAM</td>
                        <td>SC/OM</td>
                        <td>TN/MO</td>
                        <td>TB/GA</td>
                        <td>SEC Tournament</td>
                    </tr>
                    <tr>
                        <td>LSU/AUB</td>
                        <td>KY/VDY</td>
                        <td>MO/OM</td>
                        <td>AUB/MO</td>
                        <td>SC/MSU</td>
                        <td>KY/SC</td>
                        <td>FL/TAM</td>
                        <td>GA/TAM</td>
                        <td>MO/SC</td>
                        <td>SEC Tournament</td>
                    </tr>
                    <tr>
                        <td>MO/KY</td>
                        <td>OM/TAM</td>
                        <td>TN/VDY</td>
                        <td>MSU/KY</td>
                        <td>OM/LSU</td>
                        <td>AUB/ARK</td>
                        <td>KY/TN</td>
                        <td>ARK/FL</td>
                        <td>OM/KY</td>
                        <td>SEC Tournament</td>
                    </tr>
                    <tr>
                        <td>ARK/MSU</td>
                        <td>AUB/AL</td>
                        <td>MSU/FL</td>
                        <td>FL/TN</td>
                        <td>AL/AUB</td>
                        <td>MO/VDY</td>
                        <td>ARK/MO</td>
                        <td>AL/VDY</td>
                        <td>GA/FL</td>
                        <td>SEC Tournament</td>
                    </tr>
                    <tr>
                        <td>TN/AL</td>
                        <td>MO/ARK</td>
                        <td>LSU/AL</td>
                        <td>VDY/SC</td>
                        <td>VDY/KY</td>
                        <td>GA/FL</td>
                        <td>GA/LSU</td>
                        <td>MSU/SC</td>
                        <td>TAM/AL</td>
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
                        <td>MSU/OM</td>
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
