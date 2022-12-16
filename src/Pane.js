import PanePanel from './PanePanel';

const Pane = (props) => {
  return (
    <div className={`pane pane-${props.paneId}`}>
      <PanePanel side="front" />
      <PanePanel side="back" />
    </div>
  );
};

export default Pane;
