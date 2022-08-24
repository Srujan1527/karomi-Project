import "./index.css";
import Dashboard from "../Dashboard";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import upload from "../Home/images/uploadsimage.png";
import koromi1 from "../Home/images/koromi1.png";
import koromi2 from "../Home/images/karomi2.png";
import koromi3 from "../Home/images/karomi3.png";
import koromi4 from "../Home/images/karomi4.png";
import { HiViewList } from "react-icons/hi";
const Search = () => (
  <div className="searchs-container">
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
      <div className="bottom-search-container">
        <div className="filters-container">
          <div className="search-input-container1">
            <AiOutlineSearch size={20} />
            <input
              type="text"
              placeholder="Type your search here..."
              className="search1"
            />
          </div>
          <div className="each-filter-container">
            <div className="filter-header-container">
              <h1 className="filter-header">Category</h1>
              <AiFillCaretDown style={{ color: "#72706c" }} />
            </div>
            <div className="radio-container">
              <div className="item-radio">
                <input type="checkbox" id="fabric" />
                <label for="fabric" className="label">
                  {" "}
                  Fabric Care (12)
                </label>
              </div>
              <div className="item-radio">
                <input type="checkbox" id="test" />
                <label for="test" className="label">
                  {" "}
                  Test Category (1)
                </label>
              </div>
            </div>
          </div>
          <div className="each-filter-container">
            <div className="filter-header-container">
              <h1 className="filter-header">Brand</h1>
              <AiFillCaretDown style={{ color: "#72706c" }} />
            </div>
            <div className="radio-container">
              <div className="item-radio">
                <input type="checkbox" id="fabric" />
                <label for="fabric" className="label">
                  {" "}
                  Tide (7)
                </label>
              </div>
              <div className="item-radio">
                <input type="checkbox" id="test" />
                <label for="test" className="label">
                  {" "}
                  Pantene (6)
                </label>
              </div>
            </div>
          </div>
          <div className="each-filter-container">
            <div className="filter-header-container">
              <h1 className="filter-header">Product</h1>
              <AiFillCaretDown style={{ color: "#72706c" }} />
            </div>
            <div className="more-tags-container">
              <h1 className="filter-header1">+More tags</h1>
            </div>
            <div className="radio-container">
              <div className="item-radio">
                <input type="checkbox" id="fabric" />
                <label for="fabric" className="label">
                  {" "}
                  Test (8)
                </label>
              </div>
              <div className="item-radio">
                <input type="checkbox" id="test" />
                <label for="test" className="label">
                  {" "}
                  hh(3)
                </label>
              </div>
            </div>
          </div>
          <div className="each-filter-container">
            <div className="filter-header-container">
              <h1 className="filter-header">SKU Name</h1>
              <AiFillCaretDown style={{ color: "#72706c" }} />
            </div>
          </div>
          <div className="each-filter-container">
            <div className="filter-header-container">
              <h1 className="filter-header">Component Type</h1>
              <AiFillCaretDown style={{ color: "#72706c" }} />
            </div>
          </div>
          <div className="each-filter-container">
            <div className="filter-header-container">
              <h1 className="filter-header">Pack Size</h1>
              <AiFillCaretDown style={{ color: "#72706c" }} />
            </div>
          </div>
        </div>
        <div className="uploads-container">
          <div className="each-upload-container">
            <img src={upload} alt="upload" />
            <div className="upload-head-container">
              <h1 className="upload-head">Upload Files</h1>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi1} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Front Label</h1>
                <p className="upload-head2">ggg</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi2} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Front Label</h1>
                <p className="upload-head2">ggg</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi2} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Back Label</h1>
                <p className="upload-head2">56P-1C</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi3} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Back Label </h1>
                <p className="upload-head2">hh</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi2} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Box</h1>
                <p className="upload-head2">test</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi2} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Box</h1>
                <p className="upload-head2">30P-1C</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi4} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head"> </h1>
                <p className="upload-head2"> </p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi2} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Front Label</h1>
                <p className="upload-head2">27P-1C</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi1} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Front Label</h1>
                <p className="upload-head2">ggg</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi1} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Front Label</h1>
                <p className="upload-head2">ggg</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
          <div className="each-upload-container">
            <img src={koromi1} alt="upload" />
            <div className="bottom-upload-container">
              <div className="upload-test">
                <h1 className="upload-header">V1</h1>
              </div>

              <div className="uploads-detail-container">
                <h1 className="upload-head">Front Label</h1>
                <p className="upload-head2">ggg</p>
              </div>
              <div>
                <HiViewList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
