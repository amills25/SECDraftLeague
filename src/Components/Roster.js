import React from "react";
import { Table } from "react-bootstrap";

export default function Roster() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          {Array.from({ length: 20 }).map((_, index) => (
            <th key={index}>{index + 1}</th>
          ))}
          <th>Points Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
        <tr>
          <td>Player.name</td>
          <td>Player.team</td>
          {Array.from({ length: 20 }).map((_, index) => (
            <td key={index}>0</td>
          ))}
          <th>sum</th>
        </tr>
      </tbody>
    </Table>
  );
}
