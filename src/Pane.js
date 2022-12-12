const Pane = (props) => {
  return (
    <div className={`pane pane-${props.paneId}`}>
      <div className="pane-panel"></div>
    </div>
  );
};

export default Pane;
