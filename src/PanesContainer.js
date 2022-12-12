import classes from './PanesContainer.module.css';
import Pane from './Pane';

const PanesContainer = (props) => {
  return (
    <div className="panes-container">
      <div className="col col-A">
        <div className="col-axis">
          <Pane paneId="5A" />
        </div>
      </div>
      <div className="col col-B">
        <div className="col-axis">
          <Pane paneId="4B" />
          <Pane paneId="6B" />
        </div>
      </div>
      <div className="col col-C">
        <div className="col-axis">
          <Pane paneId="3C" />
          <Pane paneId="5C" />
          <Pane paneId="7C" />
        </div>
      </div>
      <div className="col col-D">
        <div className="col-axis">
          <Pane paneId="2D" />
          <Pane paneId="4D" />
          <Pane paneId="6D" />
          <Pane paneId="8D" />
        </div>
      </div>
      <div className="col col-E">
        <div className="col-axis">
          <Pane paneId="1E" />
          <Pane paneId="3E" />
          <Pane paneId="5E" />
          <Pane paneId="7E" />
          <Pane paneId="9E" />
        </div>
      </div>
      <div className="col col-F">
        <div className="col-axis">
          <Pane paneId="2F" />
          <Pane paneId="4F" />
          <Pane paneId="6F" />
          <Pane paneId="8F" />
        </div>
      </div>
      <div className="col col-G">
        <div className="col-axis">
          <Pane paneId="3G" />
          <Pane paneId="5G" />
          <Pane paneId="7G" />
        </div>
      </div>
      <div className="col col-H">
        <div className="col-axis">
          <Pane paneId="2H" />
          <Pane paneId="4H" />
          <Pane paneId="6H" />
          <Pane paneId="8H" />
        </div>
      </div>
      <div className="col col-I">
        <div className="col-axis">
          <Pane paneId="1I" />
          <Pane paneId="3I" />
          <Pane paneId="5I" />
          <Pane paneId="7I" />
          <Pane paneId="9I" />
        </div>
      </div>
      <div className="col col-J">
        <div className="col-axis">
          <Pane paneId="2J" />
          <Pane paneId="4J" />
          <Pane paneId="6J" />
          <Pane paneId="8J" />
        </div>
      </div>
      <div className="col col-K">
        <div className="col-axis">
          <Pane paneId="3K" />
          <Pane paneId="5K" />
          <Pane paneId="7K" />
        </div>
      </div>
      <div className="col col-L">
        <div className="col-axis">
          <Pane paneId="4L" />
          <Pane paneId="6L" />
        </div>
      </div>
      <div className="col col-M">
        <div className="col-axis">
          <Pane paneId="5M" />
        </div>
      </div>
    </div>
  );
};

export default PanesContainer;
