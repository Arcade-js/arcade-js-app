import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  generateMap,
  checkForEmptyCells,
  getRandomCoord,
  move,
  keyHash,
  checkForPossibleMoves,
} from "./utils";
import _2048 from "./2048";

class _2048Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: generateMap(4),
      previousMove: [],
      status: "playing",
    };
    this.handleMove = this.handleMove.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleMove);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleMove);
  }

  handleMove(evt) {
    let direction = keyHash[evt.keyCode];
    if (direction) {
      const map = move[direction](this.state.map);
      const mapHasEmptyCells = checkForEmptyCells(map);
      if (!mapHasEmptyCells) {
        const mapHasPossibleMoves = checkForPossibleMoves(map);
        if (mapHasPossibleMoves) {
          this.setState({ previousMove: this.state.map, map });
        } else {
          this.setState({ status: "game over" });
        }
      } else {
        const { x, y } = getRandomCoord(map);
        map[x][y] = 2;
        this.setState({ previousMove: this.state.map, map });
      }
    }
  }

  render() {
    if (!this.state.map) return <div>Loading</div>;
    return (
      <div id="2048" className="game">
        <h1>2048</h1>
        {this.state.status === "game over" && (
          <div>
            <p>Game Over</p>
          </div>
        )}
        {this.state.status === "playing" && (
          <_2048 map={this.state.map} previous={this.state.previousMove} />
        )}
        <Link to="/gameroom">Return to the Gameroom</Link>
      </div>
    );
  }
}

export default _2048Container;
