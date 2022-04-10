import { useEffect, useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { COLUMNS } from "./Columns";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPES, fetchOrders } from "../../store/actions/orders";
import MOCK_DATA from "../MOCK_DATA.json";
import "./Columns.css";
import GlobalFilter from "../FilterInput";
import OrderDetails from "../OrderDetails";
import Button from "../ui/Button";

const Table = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const deleteOrder = (e) => {
    dispatch(ACTION_TYPES.REMOVE_ORDER);
  };

  const getOrders = () => {
    dispatch(fetchOrders());
  };

  useEffect(() => {
    getOrders();
  }, []);
  console.log(orders);
  let data = [];
  if (orders) {
    data = orders;
  }
  const columns = useMemo(() => COLUMNS, []);
  data = useMemo(() => orders, []);

  const tableHooks = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        Header: "Delete",
        id: "delete",
        accessor: (str) => "delete",

        Cell: (tableProps) => (
          <span
            style={{
              cursor: "pointer",
              color: "blue",
              textDecoration: "underline",
            }}
            onClick={deleteOrder}
          >
            Delete
          </span>
        ),
      },
    ]);
  };
  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination,
    tableHooks
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    prepareRow,
    setPageSize,
    state,
    setGlobalFilter,
  } = tableInstance;
  const openDetails = (details) => {
    setSelectedRow(details);
    setShowDetails(true);
  };

  const { pageSize, globalFilter } = state;

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <div className="container">
        <div className="search_bar">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className="table">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps)}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "<"
                            : ">"
                          : ""}{" "}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    onClick={() => openDetails(row.original)}
                  >
                    {row.cells.map((cell, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>

            <Button handleClick={previousPage} disabled={!canPreviousPage}>
              Previous
            </Button>
            <Button handleClick={nextPage} disabled={!canNextPage}>
              Next
            </Button>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25].map((pageSize) => (
                <option value={pageSize} key={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </table>

          {showDetails && (
            <OrderDetails onClose={closeDetails} onShow={selectedRow} />
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
