import PanePanel from './PanePanel';

const Pane = (props) => {
  return (
    <div className={`pane row-${props.row} col-${props.col}`}>
      <PanePanel side="front" />
      <PanePanel side="back" />
    </div>
  );
};

export default Pane;
