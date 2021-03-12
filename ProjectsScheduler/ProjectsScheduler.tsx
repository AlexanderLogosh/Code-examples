import React from "react";
import {Row, Col, Button, Input, Space, Table} from "antd";
import {FilterFilled, SearchOutlined} from "@ant-design/icons";
import "./style.less";
import useProjectsScheduler from "./ useProjectsScheduler";
import {Link} from "react-router-dom";
import {book} from "../../../../routes/book";

import 'moment/locale/ru';
import DatePickerWithArrows from "../../../../Components/common/DatePickerWithArrows/DatePickerWithArrows";

import TableOverlay from "./components/TableOverlay";

const ProjectsScheduler = () => {
  const {
    developers,
    columns,
    currentWorkingMonth,
    setDeveloperNameFilter,
    month,
    changeMonth,
    resetMonth
  } = useProjectsScheduler();

  return (
    <div className="scheduler">
      <div className="scheduler__header">
        <div className="developers-header">
          <Space
            size={"small"}
            direction={"vertical"}>
            <h2>
              Разработчики
            </h2>
            <Button icon={<FilterFilled />}>
              Фильтр
            </Button>
            <Input
              onChange={ (event) => {
                setDeveloperNameFilter(event.target.value);
              }}
              suffix={<SearchOutlined />}
              placeholder="Поиск"
            />
          </Space>
        </div>
        <div className="projects-header">
          <Row>
            <Col>
              <Space size={"small"}>
                <h2>
                  Проекты
                </h2>
                <Input
                  placeholder="Поиск"
                  suffix={<SearchOutlined />}
                />
                <Button icon={<FilterFilled />}>
                  Фильтр
                </Button>
              </Space>
            </Col>
            <Col style={{marginLeft: "auto"}}>
              <Space size={"small"}>
                <Button type={"primary"}>
                  Добавить проект
                </Button>
                <Link to={book.projectsHistory}>
                  <Button ghost>
                    История проектов
                  </Button>
                </Link>
              </Space>
            </Col>
            <Col
              className="projects-header__bottom"
              span={24}>
              <Button
                ghost
                onClick={resetMonth}>
                Сегодня
              </Button>
              <DatePickerWithArrows
                month={month}
                onChange={changeMonth}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="scheduler__body">
        <Table
          columns={columns}
          rowKey={"id"}
          dataSource={developers}
          scroll={{x: 3000}}
          pagination={false}
          components={{ body: {
            wrapper: () => (
              <TableOverlay
                columns={currentWorkingMonth}
                developers={developers}
              />
            )
          }
          }}
        />
      </div>
    </div>
  );
};

export default ProjectsScheduler;