import "./index.css";
import React from "react";
import Dashboard from "../Dashboard";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { HiViewList } from "react-icons/hi";
import { AiTwotoneFolderOpen } from "react-icons/ai";

ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const data = {
    labels: ["7589", "ArtWork", "Brief", "Image", "Others", "Source File"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 150, 4, 2, 4, 1],
        backgroundColor: [
          "rgba(41, 7, 25, 0.89)",
          "rgba(251, 178, 8, 0.7)",
          "rgba(243, 174, 81, 0.53)",
          "rgba(201, 12, 38, 0.71)",
          "rgba(18, 101, 246, 0.77)",
          "rgba(242, 4, 215, 0.94)",
        ],
        borderColor: [
          "rgba(41, 7, 25, 0.89)",
          "rgba(251, 178, 8, 0.7)",
          "rgba(243, 174, 81, 0.53)",
          "rgba(201, 12, 38, 0.71)",
          "rgba(18, 101, 246, 0.77)",
          "rgba(242, 4, 215, 0.94)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data1 = {
    labels: ["Project Initiation Process", "ArtWork Approval Process", ],
    datasets: [
      {
        label: "# of Votes",
        data: [100, 100],
        backgroundColor: [
          "rgba(51, 46, 49, 0.8)",
          "rgba(180, 201, 42, 0.64)",
          
        ],
        borderColor: [
          "rgba(51, 46, 49, 0.8)",
          "rgba(180, 201, 42, 0.64)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="home-container1">
      <Dashboard />
      <div className="full-dashboard-container1">
        <div className="top-dashboard-container1">
          <div className="dashboard-heading-container1">
            <h1>Dashboard</h1>

            <div className="db-top-icons-container1">
              <h1 className="icon-container4">?</h1>
              <h1 className="icon-container5">VN</h1>
            </div>
          </div>
        </div>
        <div className="bottom-report-container">
          <div className="total-files-container">
            <div className="file-item-container">
              <div>
                <AiTwotoneFolderOpen size={55} style={{ color: "white" }} />
              </div>
              <div className="file-numbers-container">
                <p className="files-heading">Files in Library</p>
                <p className="files-number">412</p>
              </div>
            </div>
            <div className="file-item-container1">
              <div>
                <AiTwotoneFolderOpen size={55} style={{ color: "white" }} />
              </div>
              <div className="file-numbers-container">
                <p className="files-heading">First time Right</p>
                <p className="files-number">25</p>
              </div>
            </div>
          </div>
          <div className="pie-charts-container">
            <div className="pie-item-container">
              <div className="pie-heading-container">
                <h1 className="pie-heading">FileTypes Reports</h1>
                <HiViewList />
              </div>
              <div className="pie">
                <Pie data={data} />
              </div>
            </div>
            <div className="pie-item-container">
              <div className="pie-heading-container">
                <h1 className="pie-heading">All Workflows Initiated Reports</h1>
                <HiViewList />
              </div>
              <div className="pie">
                <Pie data={data1} />
              </div>
            </div>
            <div className="pie-item-container">
              <div className="pie-heading-container">
                <h1 className="pie-heading">FileTypes Reports</h1>
                <HiViewList />
              </div>
              <div className="pie">
                <Pie data={data} />
              </div>
            </div>
            <div className="pie-item-container">
              <div className="pie-heading-container">
                <h1 className="pie-heading">All Workflows Initiated Reports</h1>
                <HiViewList />
              </div>
              <div className="pie">
                <Pie data={data1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
