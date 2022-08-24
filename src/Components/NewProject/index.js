import "./index.css";
import logo from "../Home/images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaListAlt, FaBorderAll } from "react-icons/fa";
import { HiViewList } from "react-icons/hi";

import Dashboard from "../Dashboard";
const NewProject = () => (
  <div className="project-container">
    <Dashboard />
    <div className="full-dashboard-container">
      <div className="top-dashboard-container">
        <div className="dashboard-heading-container">
          <h1>My Projects</h1>
          <div className="db-top-icons-container">
            <h1 className="icon-container1">?</h1>
            <h1 className="icon-container2">VN</h1>
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
        <div className="bottom-container">
          <div className="list-container1">
            <div className="list-item-container1">
              <div className="image-container1">
                <img src={logo} alt="logo" className="logo1" />
              </div>
              <div class="next-list-container1">
                <div className="category-container1">
                  <div className="category-item-container1">
                    <h1 className="category-heading1">Request Number</h1>
                    <p className="category-paragraph1">81P-1C</p>
                  </div>
                  <div className="category-item-container1">
                    <h1 className="category-heading1">Initiated By</h1>
                    <p className="category-paragraph1">Designer</p>
                  </div>
                </div>
                <hr className="line" />
                <h1 className="status">
                  <span className="span">Status : </span>Artwork Approved and
                  Released
                </h1>
              </div>
            </div>

            <div className="list-item-container1">
              <div className="image-container1">
                <img src={logo} alt="logo" className="logo1" />
              </div>
              <div class="next-list-container1">
                <div className="category-container1">
                  <div className="category-item-container1">
                    <h1 className="category-heading1">Request Number</h1>
                    <p className="category-paragraph1">62P-1C</p>
                  </div>
                  <div className="category-item-container1">
                    <h1 className="category-heading1">Initiated By</h1>
                    <p className="category-paragraph1">Designer</p>
                  </div>
                </div>
                <hr className="line" />
                <h1 className="status">
                  <span className="span">Status : </span>Artwork Approved and
                  Released
                </h1>
              </div>
            </div>
            <div className="list-item-container1">
              <div className="image-container1">
                <img src={logo} alt="logo" className="logo1" />
              </div>
              <div class="next-list-container1">
                <div className="category-container1">
                  <div className="category-item-container1">
                    <h1 className="category-heading1">Request Number</h1>
                    <p className="category-paragraph1">56P-1C</p>
                  </div>
                  <div className="category-item-container1">
                    <h1 className="category-heading1">Initiated By</h1>
                    <p className="category-paragraph1">Approver</p>
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
          <div className="new-project-container">
            <div className="project-header-container">
              <div className="icon-header-container">
                <FaListAlt style={{ color: "#ee05fa" }} size={45} />
              </div>

              <div className="instruction-info-container">
                <h1 className="info-header">New Project</h1>
                <div className="files-container">
                  <p className="files-paragraph1">Info</p>
                  <p className="files-paragraph">Files</p>
                  <p className="files-paragraph">Stakeholders</p>
                </div>
              </div>
            </div>

            <div className="instruction-container">
              <div className="instructions-heading">
                <h1 className="instructions">Instructions</h1>
              </div>
              <div className="selection-container">
                <fieldset className="field-set">
                  <legend>Please follow the below instructions</legend>
                  <p className="fieldset-paragraph">
                    1 - To start your Project Workflow,please fill in the fields
                    within the Request Info Tab.
                  </p>
                  <p className="fieldset-paragraph">
                    2 - Select the required Workflow Template.
                  </p>
                  <p className="fieldset-paragraph">
                    3 - Click on Files Tab to upload any file required by
                    selecting the file typw then click Add Files button to
                    upload your file.
                  </p>
                  <p className="fieldset-paragraph">
                    4 - Click on the Sstakeholders Tab to check if all the
                    required activities and stakeholders are..
                  </p>
                </fieldset>
                <div className="options-container">
                  <fieldset className="field-set1">
                    <legend className="legend1">Initiated By</legend>
                    <p className="fieldset-paragraph">Approver</p>
                  </fieldset>
                  <fieldset className="field-set1">
                    <legend className="legend1">Initiated By</legend>
                    <p className="fieldset-paragraph">Approver</p>
                  </fieldset>
                  <select className="select">
                    <option value="Category" checked>
                      Category
                    </option>
                    <option value="Approver">Approver</option>
                  </select>
                </div>
                <div className="options-container">
                  <select className="select">
                    <option value="Category" checked>
                      Category
                    </option>
                    <option value="Approver">Approver</option>
                  </select>
                  <select className="select">
                    <option value="Category" checked>
                      Brand
                    </option>
                    <option value="Approver">Approver</option>
                  </select>
                  <div>
                    <input
                      type="text"
                      className="select1"
                      placeholder="Product"
                    />
                  </div>
                </div>
                <div className="options-container">
                  <div>
                    <input type="text" className="select1" placeholder="SKU" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="select1"
                      placeholder="Pack Size"
                    />
                  </div>
                  <input
                    type="date"
                    className="select1"
                    placeholder="Due Date"
                  />
                </div>
                <div className="options-container">
                  <div>
                    <input
                      type="text"
                      className="select1"
                      placeholder="Reason for Request"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewProject;
