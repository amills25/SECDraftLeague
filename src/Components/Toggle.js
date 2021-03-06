import React from "react";
import { useParams } from "react-router-dom";

export default function Toggle(props) {
  const { id = 1 } = useParams();

  let d = new Date();
  let day = d.getDay();
  const isEditableDay = day === 0 || day === 1 || day === 2;

  const isCommish =
    Object.keys(props.userData).length > 0 &&
    props.userData.user_memberships?.[0]?.membership_id === 1;

  const isCurrentMember =
    props.userData.user_memberships?.[0]?.id === parseInt(id);

  return (
    <>
      <button
        type="button"
        onClick={() => props.saveToggleState(props.athleteID)}
        className="btn"
        disabled={!(isCommish || (isCurrentMember && isEditableDay))}
      >
        {!props.toggleState ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-check-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        )}
      </button>
    </>
  );
}
