import "./index.css";
import Dashboard from "../Dashboard";
import logo from "../Home/images/logo.png";

import { AiOutlineSearch } from "react-icons/ai";
import { FaListAlt, FaBorderAll } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";

const Home = () => (
  <div className="home-container">
    <Dashboard />
    <div className="full-dashboard-container">
      <div className="top-dashboard-container">
        <div className="dashboard-heading-container">
          <h1>Dashboard</h1>

          <div className="db-top-icons-container">
            <h1 className="icon-container1">?</h1>
            <h1 className="icon-container2">VN</h1>
          </div>
        </div>
      </div>
      <div className="db-inbox-container">
        <div className="items-container">
          <div className="inbox-heading-container">
            <h1 className="inbox-heading">My Inbox</h1>
          </div>
          <div className="inbox-item-container">
            <p className="item-header">Artwork Approval Process</p>
            <div className="count-container">
              <div className="number-container">
                <p className="number">17</p>
              </div>
              <div className="on-time-container">
                <div className="on-time-item-container">
                  <p className="item-heading">On Time</p>
                  <p className="item-count1">0</p>
                </div>
                <div className="on-time-item-container">
                  <p className="item-heading">Delayed</p>
                  <p className="item-count2">17</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inbox-item-container">
            <p className="item-header">Project Initiation Process</p>
            <div className="count-container">
              <div className="number-container">
                <p className="number">3</p>
              </div>
              <div className="on-time-container">
                <div className="on-time-item-container">
                  <p className="item-heading">On Time</p>
                  <p className="item-count1">1</p>
                </div>
                <div className="on-time-item-container">
                  <p className="item-heading">Delayed</p>
                  <p className="item-count2">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-container">
          <div className="inbox-heading-container">
            <h1 className="inbox-heading">Initiated Projects</h1>
          </div>
          <div className="inbox-item-container">
            <p className="item-header">Artwork Approval Process</p>
            <div className="count-container">
              <div className="number-container">
                <p className="number">38</p>
              </div>
              <div className="on-time-container">
                <div className="on-time-item-container">
                  <p className="item-heading">On Time</p>
                  <p className="item-count1">8</p>
                </div>
                <div className="on-time-item-container">
                  <p className="item-heading">Delayed</p>
                  <p className="item-count2">30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inbox-item-container">
            <p className="item-header">Project Initiation Process</p>
            <div className="count-container">
              <div className="number-container">
                <p className="number">31</p>
              </div>
              <div className="on-time-container">
                <div className="on-time-item-container">
                  <p className="item-heading">On Time</p>
                  <p className="item-count1">26</p>
                </div>
                <div className="on-time-item-container">
                  <p className="item-heading">Delayed</p>
                  <p className="item-count2">5</p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="items-container">
          <div className="inbox-heading-container">
            <h1 className="inbox-heading">All Projects</h1>
          </div>
          <div className="inbox-item-container">
            <p className="item-header">Project Initiation Process</p>
            <div className="count-container">
              <div className="number-container">
                <p className="number">38</p>
              </div>
              <div className="on-time-container">
                <div className="on-time-item-container">
                  <p className="item-heading">On Time</p>
                  <p className="item-count1">28</p>
                </div>
                <div className="on-time-item-container">
                  <p className="item-heading">Delayed</p>
                  <p className="item-count2">10</p>
                </div>
              </div>
            </div>
          </div>
          <div className="inbox-item-container">
            <p className="item-header">Artwork Approval Process</p>
            <div className="count-container">
              <div className="number-container">
                <p className="number">38</p>
              </div>
              <div className="on-time-container">
                <div className="on-time-item-container">
                  <p className="item-heading">On Time</p>
                  <p className="item-count1">8</p>
                </div>
                <div className="on-time-item-container">
                  <p className="item-heading">Delayed</p>
                  <p className="item-count2">30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-inbox-container">
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
        <div className="list-container">
          <div className="list-item-container">
            <div className="image-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div class="next-list-container">
              <div className="category-container">
                <div className="category-item-container">
                  <h1 className="category-heading">Category</h1>
                  <p className="category-paragraph">Demo</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Brand</h1>
                  <p className="category-paragraph">jstrickland</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Product Name</h1>
                  <p className="category-paragraph">jstrickland2</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Pack Size</h1>
                  <p className="category-paragraph">200ml</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Component Type</h1>
                  <p className="category-paragraph">Label Back</p>
                </div>
                <div>
                  <HiViewList size={25} style={{ marginTop: "5px" }} />
                </div>
              </div>
              <hr className="line" />
              <div className="progress-list-container">
                <div className="in-progress">
                  <h1 className="progress-heading">In Progress</h1>
                </div>
                <h1 className="progress-heading1">Task due 37+ day(s) ago</h1>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <div className="image-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div class="next-list-container">
              <div className="category-container">
                <div className="category-item-container">
                  <h1 className="category-heading">Category</h1>
                  <p className="category-paragraph">Demo</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Brand</h1>
                  <p className="category-paragraph">jstrickland</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Product Name</h1>
                  <p className="category-paragraph">jstrickland2</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Pack Size</h1>
                  <p className="category-paragraph">200ml</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Component Type</h1>
                  <p className="category-paragraph">Label Back</p>
                </div>
                <div>
                  <HiViewList size={25} style={{ marginTop: "5px" }} />
                </div>
              </div>
              <hr className="line" />
              <div className="progress-list-container">
                <div className="in-progress">
                  <h1 className="progress-heading">In Progress</h1>
                </div>
                <h1 className="progress-heading1">Task due 37+ day(s) ago</h1>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <div className="image-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div class="next-list-container">
              <div className="category-container">
                <div className="category-item-container">
                  <h1 className="category-heading">Category</h1>
                  <p className="category-paragraph">Demo</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Brand</h1>
                  <p className="category-paragraph">jstrickland</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Product Name</h1>
                  <p className="category-paragraph">jstrickland2</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Pack Size</h1>
                  <p className="category-paragraph">200ml</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Component Type</h1>
                  <p className="category-paragraph">Label Back</p>
                </div>
                <div>
                  <HiViewList size={25} style={{ marginTop: "5px" }} />
                </div>
              </div>
              <hr className="line" />
              <div className="progress-list-container">
                <div className="in-progress">
                  <h1 className="progress-heading">In Progress</h1>
                </div>
                <h1 className="progress-heading1">Task due 37+ day(s) ago</h1>
              </div>
            </div>
          </div>
          <div className="list-item-container">
            <div className="image-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div class="next-list-container">
              <div className="category-container">
                <div className="category-item-container">
                  <h1 className="category-heading">Category</h1>
                  <p className="category-paragraph">Demo</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Brand</h1>
                  <p className="category-paragraph">jstrickland</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Product Name</h1>
                  <p className="category-paragraph">jstrickland2</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Pack Size</h1>
                  <p className="category-paragraph">200ml</p>
                </div>
                <div className="category-item-container">
                  <h1 className="category-heading">Component Type</h1>
                  <p className="category-paragraph">Label Back</p>
                </div>
                <div>
                  <HiViewList size={25} style={{ marginTop: "5px" }} />
                </div>
              </div>
              <hr className="line" />
              <div className="progress-list-container">
                <div className="in-progress">
                  <h1 className="progress-heading">In Progress</h1>
                </div>
                <h1 className="progress-heading1">Task due 37+ day(s) ago</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
