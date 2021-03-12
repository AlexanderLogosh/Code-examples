import React from "react";
import "./style.less";
import { book } from "../../../../../../routes/book";
import { NavLink } from "react-router-dom";
const moment = require('moment');
moment.locale('ru');

type ProjectLineType = {
  project: any,
  projectIndex: number,
  columns: any,
  developer: any,
  cellSize: number
}

const ProjectLine: React.FC<ProjectLineType> = ({
  project,
  projectIndex,
  columns,
  developer,
  cellSize
}) => {
  let offsetLeft = 0;
  let projectLength = 0;
  let startMonth: string = "";
  let finishMonth: string = "";
  const paymentDay = {
    dayIs: false,
    offsetLeft: 0
  };

  columns.map((column) => {
    if (column.moment.isBetween(project.start_at, project.finish_at)) {
      if (column.moment.format("YYYY-MM-DD") === project.payment_date) {
        paymentDay.dayIs = true;
        paymentDay.offsetLeft = projectLength;
      }
      projectLength = projectLength + cellSize;
    } else if (column.moment.isBefore(project.start_at, "day")) {
      offsetLeft = offsetLeft + cellSize;
    }

    if (column.moment.format("YYYY-MM-DD") === project.start_at){
      startMonth = "start";
    }

    if (column.moment.format("YYYY-MM-DD") === project.finish_at){
      finishMonth = "finish";
    }
  });

  let projectType: string = "";
  switch (project.project_type_id) {
  case 1:
    projectType = "$$";
    break;
  case 2:
    projectType = "FF";
    break;
  case 3:
    projectType = "ED";
    break;
  case 4:
    projectType = "BE";
    break;
  case 5:
    projectType = "00";
    break;
  }

  return (
    <>
      {(projectLength > 0) &&
        <NavLink
          to={`${book.project}/${project.id}`}
          className={`project-line ${startMonth} ${finishMonth}`}
          style={{top: (30 * projectIndex),left: offsetLeft, width: projectLength, background: project.color}}>
          <div
            className={"project-line__info"}
            style={{background: project.color}}>
            <span className={"project-line__type"}>
              {projectType}
            </span>
            {project.name}
          </div>

          {paymentDay.dayIs &&
            <div
              className={"project-line__payment-day"}
              style={{left: paymentDay.offsetLeft}}>
              Payment Day
            </div>
          }
        </NavLink>
      }
    </>
  );
};

export default ProjectLine;