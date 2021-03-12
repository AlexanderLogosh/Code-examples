import React from "react";
import "./style.less";
import DeveloperStatus from "../../../../../../Components/TableComponents/DeveloperStatus/DeveloperStatus";
import ProjectLine from "../ProjectLine";
import WorkedRate from "../WorkedRate";
import {Avatar, Popover} from "antd";
import {UserOutlined} from "@ant-design/icons";
import DeveloperPopUp from "../../../../../../Components/DeveloperPopUp";

const moment = require('moment');
moment.locale('ru');

type TableOverlayType = {
  columns: Array<any>,
  developers: Array<any>
}

const TableOverlay: React.FC<TableOverlayType> = ({columns, developers}) => {
  const cellSize = 90;
  const cellCount = columns.length;
  const overlayWidth = cellSize * cellCount + cellSize + 215;
  const lineWidth = cellSize * cellCount;
  const cellsArray: any[] = [];

  for ( let c = 1; c <= cellCount; c++) {
    cellsArray.push(<div
      className="empty-cell"
      style={{width: cellSize}}
      key={c.toString()}>
      Empty Cell
    </div>);
  }

  return (
    <tbody
      className={"table-overlay"}
      style={{width: overlayWidth}}>

      {developers.map((developer, index) => (
        <tr
          key={index.toString()}
          className={"developer-row"}
          style={{height: developer.projects.length * 30}}>

          <td className="developer-row__user">
            <Popover
              className="developer-row__user-popper"
              placement="right"
              content={<DeveloperPopUp user={developer}/>}
              trigger="click">
              <Avatar icon={<UserOutlined />} />
              <div className="developer-row__user-info">
                <p className="developer-row__user-name">
                  {developer.name}
                </p>
                <span className="developer-row__user-skill">
                  (
                  {developer.skillLevel}
                  )
                </span>
              </div>
            </Popover>

          </td>

          <td
            className="projects-wrapper"
            style={{width: lineWidth}}>

            {cellsArray}

            <WorkedRate
              columns={columns}
              developer={developer}
              cellSize={cellSize}
            />

            {developer.projects.map((project, index) => (

              <ProjectLine
                project={project}
                projectIndex={index}
                columns={columns}
                developer={developer}
                cellSize={cellSize}
                key={index.toString()}
              />
            ))}

          </td>
          <td className={"developer-row__status"}>
            <DeveloperStatus status={developer.status}/>
          </td>
        </tr>
      )
      )}

    </tbody>
  );
};

export default TableOverlay;