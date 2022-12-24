import PanePanel from './PanePanel';

const Pane = ({ row, col, img }) => {
  return (
    <div className={`pane row-${row} col-${col}`}>
      <PanePanel side="front" img={img} />
      <PanePanel side="back" img={img} />
    </div>
  );
};

export default Pane;
