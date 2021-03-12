import React, {useState} from "react";
import {useUsersWithProjects} from "../../../../hooks/useUsersWithProjects";
import useDebounce from "../../../../hooks/useDebounce";
import useWorkingMonth from "../../../../hooks/useWorkingMonth";
import DeveloperStatus from "../../../../Components/TableComponents/DeveloperStatus/DeveloperStatus";
import DateInTableHead from "../../../../Components/TableComponents/DateInTableHead/DateInTableHead";
import BorderedCell from "../../../../Components/TableComponents/BorderedCell/BorderedCell";

const useProjectsScheduler = () => {
  const {developers, searchDevelopers} = useUsersWithProjects();
  const [developerNameFilter, setDeveloperNameFilter] = useState("");

  const filterUsersByName = useDebounce((nameFilter: string) => {
    searchDevelopers(developerNameFilter);
  }, 300);

  React.useEffect(() => {
    filterUsersByName(developerNameFilter);
  }, [developerNameFilter]);

  const {currentWorkingMonth, month, changeMonth, resetMonth} = useWorkingMonth();

  const columns: any = [
    {
      title: "",
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 215,
      className: "scheduler__grey-column"
    },
    {
      title: "Статус",
      width: 90,
      dataIndex: 'status',
      key: 'status',
      fixed: 'right',
      render: (status: string) => (
        <DeveloperStatus status={status}/>
      )
    }
  ];

  const dateColumns = currentWorkingMonth.map(date => (
    {
      title: () => {
        return (
          <DateInTableHead
            day={date.day}
            date={date.date}
            month={date.month}
          />
        );
      },
      dataIndex: date.date,
      key: date.date,
      width: 90,
      render: () => (
        <BorderedCell/>
      )
    }
  ));

  columns.splice(1, 0, ...dateColumns);

  return {developers, columns,currentWorkingMonth, setDeveloperNameFilter, month, changeMonth, resetMonth};
};

export default useProjectsScheduler;