import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

let data = [
  {
    id: 0,
    day: { num: 1, date: 1, month: 2, name: "středa" },
    alcohol: 1,
    meditation: 1,
    sport: 1,
    habit1: 0,
    habit2: 2,
    habit3: 1,
  },
  {
    id: 1,
    day: { num: 2, date: 2, month: 2, name: "čtvrtek" },
    alcohol: 2,
    meditation: 2,
    sport: 1,
    habit1: 3,
    habit2: 1,
    habit3: 3,
  },
  {
    id: 2,
    day: { num: 3, date: 3, month: 2, name: "pátek" },
    alcohol: 0,
    meditation: 0,
    sport: 0,
    habit1: 0,
    habit2: 0,
    habit3: 0,
  },
  {
    id: 3,
    day: { num: 4, date: 4, month: 2, name: "sobota" },
    alcohol: 0,
    meditation: 0,
    sport: 0,
    habit1: 0,
    habit2: 0,
    habit3: 0,
  },
  {
    id: 4,
    day: { num: 5, date: 5, month: 2, name: "neděle" },
    alcohol: 0,
    meditation: 0,
    sport: 0,
    habit1: 0,
    habit2: 0,
    habit3: 0,
  },
];

let extraHabits = [
  {
    active: true,
    name: "🇫🇮 Finština",
    weekStarted: 1,
  },
  {
    active: true,
    name: "🎹 Piano",
    weekStarted: 2,
  },
  {
    active: true,
    name: "📚 Četba",
    weekStarted: 3,
  },
];

// export default Table;

const TableWrapper = styled.div`
  /* width: 1000px; */
  /* margin: auto; */
  /* @media only screen and (max-width: 700px) { */
  /* width: 1200px; */
  /* background-color: green; */
  /* } */
  /* overflow: scroll; */
`;

const Table = styled.table`
  /* width: 100%; */

  /* border-collapse: collapse; */
  border-collapse: separate;
  /* border-spacing: 50px 10px; */

  /* border: none; */
  border: 3px solid black;
  border-spacing: 10px 5px;

  /* TEMPORARY  */
  margin-top: 100px;
  margin-bottom: 100px;
  overflow: scroll;
`;

const THead = styled.thead`
  /* background-color: #f2f2f2; */
  /* height: 70px; */
  /* width: 100px; */
`;

const THday = styled.th`
  height: 50px;
  width: 100px; /* Why does it look like this ?? */
  /* border: none; */
  border: 1px solid black;
  /* padding: 8px; */
  text-align: center;

  &:hover {
    cursor: default;
  }
`;

const TH = styled.th`
  height: 50px;
  width: 100px;
  /* border: none; */
  border: 1px solid black;
  /* padding: 8px; */
  text-align: center;

  &:hover {
    cursor: default;
  }
`;

const THextra = TH;
// THextra = styled.div`
//   background-color: green ;
// `

const TR = styled.tr`
  /* width: 100px */
  /* height: 50px; */
  /* &:nth-child(even) { */
  /* background-color: #f2f2f2; */
  /* } */

  /* border: 10px solid black; */
`;

const TD = styled.td`
  /* border: none; */
  /* border: 1px solid black; */
  padding: 0;
  height: 60px;

  /* width: 10px; */
  /* height: 50px; */
  /* padding: 8px; */

  &:hover {
    cursor: pointer;
  }

  text-align: center;

  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */

  button {
    height: 60px;
    width: 60px;
    /* background-color: green; */
    /* border: 1px solid gray; */
    /* border: 1px solid black; */

    &:hover {
      cursor: pointer;
    }
  }
`;

const TDay = styled.td`
  /* border: none; */
  border: 1px solid black;

  /* width: 10px; */
  height: 55px;
  padding: 0px;

  &:hover {
    cursor: default;
  }
`;

// const Button = styled.div`
//   /* width: 100px; */
//   background-color: yellow;
//   /* height: 100px; */
//   /* padding: 0px; */

//   &:hover {
//     background-color: red;
//     cursor: pointer;
//   }
// `;

const DateContainer = styled.div`
  /* border-right: 2px solid gray; */
  /* border-bottom: 1px solid gray; */
  /* :first-child {
    border-left: 1px solid gray;
    // margin-left: 100px;
  } */
  /* padding-left: 20px; */
  // background-color: yellow;
  // font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DayNum = styled.div`
  // background-color: yellow;
  font-size: 30px;
  // font-weight: 500;
`;

const DayDate = styled.div`
  font-size: 16px;
  margin-left: 7px;
`;

const DayName = styled.div``;

// const SecondRow = styled.div`
//     display: flex;
// `

const Date = styled.div`
  text-align: center;
`;

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => {
          if (this.state.value === null || this.state.value === 0) {
            this.setState({ value: 1 });
            this.setState({ bgColor: "green" });
          } else if (this.state.value === 1) {
            this.setState({ value: 2 });
            this.setState({ bgColor: "red" });
          } else if (this.state.value === 2) {
            this.setState({ value: 0 });
            this.setState({ bgColor: null });
          }
          // console.log(this.state.value);
          console.log(this.state);
        }}
        style={{ backgroundColor: this.state.bgColor }}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const DataTable = () => {
  // const data = Array.from({ length: 90 }, (_, i) => i);
  return (
    <>
      <Board></Board>
      <TableWrapper>
        <Table>
          <THead>
            <tr>
              <THday>Den</THday>
              <TH>🚫 alkohol a drogy</TH>
              <TH>🧘‍♂️ meditace</TH>
              <TH>🏃‍♂️ pohyb</TH>
              {extraHabits.map((hab) => (
                <THextra>{hab.name}</THextra>
              ))}
            </tr>
          </THead>
          <tbody>
            {data.map}
            {data.map((row) => (
              /* key={i} */
              <TR>
                <TDay>
                  <DateContainer>
                    <DayNum>{row.day.num}</DayNum>
                    <DayDate>
                      <DayName>{row.day.name}</DayName>
                      <Date>{row.day.date + ". " + row.day.month}</Date>
                    </DayDate>
                  </DateContainer>
                </TDay>
                <TD>
                  {/* <button>{row.alcohol}</button> */}
                  <Square>{/* {console.log(this.state)}> */}</Square>
                </TD>
                <TD>
                  <Square>{/* {console.log(this.state)}> */}</Square>
                </TD>
                <TD>
                  <button>{row.sport}</button>
                </TD>
                <TD>
                  <button>{row.habit1}</button>
                </TD>
                <TD>
                  <button>{row.habit2}</button>
                </TD>
                <TD>
                  <button>{row.habit3}</button>
                </TD>

                {/* <TD></TD>
              <TD></TD>
              <TD></TD>
              <TD></TD>
              <TD></TD> */}

                {/* <TD>{`Row ${i + 1}, Column 2`}</TD>
              <TD>{`Row ${i + 1}, Column 3`}</TD>
              <TD>{`Row ${i + 1}, Column 4`}</TD>
              <TD>{`Row ${i + 1}, Column 5`}</TD>
              <TD>{`Row ${i + 1}, Column 6`}</TD>
              <TD>{`Row ${i + 1}, Column 7`}</TD> */}
              </TR>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
};

export default DataTable;
