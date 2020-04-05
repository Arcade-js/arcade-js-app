import React from "react";

const _2048 = (props) => {
  return (
    <div className="game-container">
      <table id="game-map">
        {props.map.map((row, i) => (
          <tr key={`row-${i}`}>
            {row.map((cell, i) => (
              <td key={`col-${i}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default _2048;
