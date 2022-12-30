import Pane from './Pane';

const PanesContainer = ({ paneImg, animating, side }) => {
  return (
    <div className={`panes-container ${animating ? '' : side ? 'paused front-side' : 'paused back-side' }`}>
      <Pane row="5" col="A" img={paneImg} />
      <Pane row="4" col="B" img={paneImg} />
      <Pane row="6" col="B" img={paneImg} />
      <Pane row="3" col="C" img={paneImg} />
      <Pane row="5" col="C" img={paneImg} />
      <Pane row="7" col="C" img={paneImg} />
      <Pane row="2" col="D" img={paneImg} />
      <Pane row="4" col="D" img={paneImg} />
      <Pane row="6" col="D" img={paneImg} />
      <Pane row="8" col="D" img={paneImg} />
      <Pane row="1" col="E" img={paneImg} />
      <Pane row="3" col="E" img={paneImg} />
      <Pane row="5" col="E" img={paneImg} />
      <Pane row="7" col="E" img={paneImg} />
      <Pane row="9" col="E" img={paneImg} />
      <Pane row="2" col="F" img={paneImg} />
      <Pane row="4" col="F" img={paneImg} />
      <Pane row="6" col="F" img={paneImg} />
      <Pane row="8" col="F" img={paneImg} />
      <Pane row="3" col="G" img={paneImg} />
      <Pane row="5" col="G" img={paneImg} />
      <Pane row="7" col="G" img={paneImg} />
      <Pane row="2" col="H" img={paneImg} />
      <Pane row="4" col="H" img={paneImg} />
      <Pane row="6" col="H" img={paneImg} />
      <Pane row="8" col="H" img={paneImg} />
      <Pane row="1" col="I" img={paneImg} />
      <Pane row="3" col="I" img={paneImg} />
      <Pane row="5" col="I" img={paneImg} />
      <Pane row="7" col="I" img={paneImg} />
      <Pane row="9" col="I" img={paneImg} />
      <Pane row="2" col="J" img={paneImg} />
      <Pane row="4" col="J" img={paneImg} />
      <Pane row="6" col="J" img={paneImg} />
      <Pane row="8" col="J" img={paneImg} />
      <Pane row="3" col="K" img={paneImg} />
      <Pane row="5" col="K" img={paneImg} />
      <Pane row="7" col="K" img={paneImg} />
      <Pane row="4" col="L" img={paneImg} />
      <Pane row="6" col="L" img={paneImg} />
      <Pane row="5" col="M" img={paneImg} />
    </div>
  );
};

export default PanesContainer;
