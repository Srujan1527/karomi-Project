import "./index.css";
import Dashboard from "../Dashboard";
import logo from "../Home/images/logo.png";

import { AiOutlineSearch } from "react-icons/ai";
import { FaListAlt, FaBorderAll } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";

const AllProjects = () => (
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
      <div className="bottom-inbox-container1">
        <div className="bottom-inbox-header-container">
          <h1 className="inbox-heading">My Inbox (Artwork Approval Process)</h1>
          <div className="search-container">
            <div className="search-input-container">
              <AiOutlineSearch size={20} />
              <input
                type="text"
                placeholder="Filter items..."
                className="search"
              />
            </div>
            <FaListAlt size={25} />
            <FaBorderAll size={25} />
            <HiViewList size={25} />
          </div>
        </div>
      </div>
      <div className="list-container">
        <div className="list-item-container">
          <div className="image-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div class="next-list-container">
            <div className="category-container">
              <div className="category-item-container">
                <h1 className="category-heading">Request Number</h1>
                <p className="category-paragraph">81P-1C</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated By</h1>
                <p className="category-paragraph">Designer</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated Date</h1>
                <p className="category-paragraph">31-Jul-2020</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Product</h1>
                <p className="category-paragraph">ggg</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Component Type</h1>
                <p className="category-paragraph">Front Label</p>
              </div>
              <div>
                <HiViewList size={25} style={{ marginTop: "5px" }} />
              </div>
            </div>
            <hr className="line" />
            <h1 className="status">
              <span className="span">Status : </span>Artwork Approved and
              Released
            </h1>
          </div>
        </div>
        <div className="list-item-container">
          <div className="image-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div class="next-list-container">
            <div className="category-container">
              <div className="category-item-container">
                <h1 className="category-heading">Request Number</h1>
                <p className="category-paragraph">62P-1C</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated By</h1>
                <p className="category-paragraph">Designer</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated Date</h1>
                <p className="category-paragraph">24-Jul-2020</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Product</h1>
                <p className="category-paragraph">ggg</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Component Type</h1>
                <p className="category-paragraph">Front Label</p>
              </div>
              <div>
                <HiViewList size={25} style={{ marginTop: "5px" }} />
              </div>
            </div>
            <hr className="line" />
            <h1 className="status">
              <span className="span">Status : </span>Artwork Approved and
              Released
            </h1>
          </div>
        </div>
        <div className="list-item-container">
          <div className="image-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div class="next-list-container">
            <div className="category-container">
              <div className="category-item-container">
                <h1 className="category-heading">Request Number</h1>
                <p className="category-paragraph">56P-1C</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated By</h1>
                <p className="category-paragraph">Approver</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated Date</h1>
                <p className="category-paragraph">23-Jul-2020</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Product</h1>
                <p className="category-paragraph">hh</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Component Type</h1>
                <p className="category-paragraph">Back Label</p>
              </div>
              <div>
                <HiViewList size={25} style={{ marginTop: "5px" }} />
              </div>
            </div>
            <hr className="line" />
            <h1 className="status">
              <span className="span">Status : </span>Artwork Approved and
              Released
            </h1>
          </div>
        </div>
        <div className="list-item-container">
          <div className="image-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div class="next-list-container">
            <div className="category-container">
              <div className="category-item-container">
                <h1 className="category-heading">Request Number</h1>
                <p className="category-paragraph">30P-1C</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated By</h1>
                <p className="category-paragraph">Approver</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated Date</h1>
                <p className="category-paragraph">20-Jul-2020</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Product</h1>
                <p className="category-paragraph">test</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Component Type</h1>
                <p className="category-paragraph">Box</p>
              </div>
              <div>
                <HiViewList size={25} style={{ marginTop: "5px" }} />
              </div>
            </div>
            <hr className="line" />
            <h1 className="status">
              <span className="span">Status : </span>Artwork Approved and
              Released
            </h1>
          </div>
        </div>
        <div className="list-item-container">
          <div className="image-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div class="next-list-container">
            <div className="category-container">
              <div className="category-item-container">
                <h1 className="category-heading">Request Number</h1>
                <p className="category-paragraph">27P-2C</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated By</h1>
                <p className="category-paragraph">Approver</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Initiated Date</h1>
                <p className="category-paragraph">17-Jul-2020</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Product</h1>
                <p className="category-paragraph">test</p>
              </div>
              <div className="category-item-container">
                <h1 className="category-heading">Component Type</h1>
                <p className="category-paragraph">Front Label</p>
              </div>
              <div>
                <HiViewList size={25} style={{ marginTop: "5px" }} />
              </div>
            </div>
            <hr className="line" />
            <h1 className="status">
              <span className="span">Status : </span>Artwork Approved and
              Released
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AllProjects;
