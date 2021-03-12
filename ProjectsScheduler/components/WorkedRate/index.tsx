import React from "react";
import "./style.less";
import {ClockCircleFilled} from "@ant-design/icons";

type WorkedRateType = {
  columns: any,
  developer: any,
  cellSize: number
}

const WorkedRate: React.FC<WorkedRateType> = ({columns, developer, cellSize}) => {
  const weeklyStatistics: any = [];

  columns.map((column,index) => {
    if (column.moment.format("d") === "6") {
      weeklyStatistics.push({
        left: index * cellSize
      });
    }
  });

  return (
    <>
      {weeklyStatistics.map((part,index) => (
        <div
          key={index.toString()}
          className={"worked-rate"}
          style={{left: part.left, width: cellSize * 2}}>
          <span>
            Норма +
          </span>
          <div className={"worked-rate__count"}>
            <ClockCircleFilled/>
            35 часов
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkedRate;