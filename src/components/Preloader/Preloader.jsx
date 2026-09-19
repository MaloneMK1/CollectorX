import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader" role="status" aria-live="polite">
      <span className="preloader__indicator" aria-hidden="true" />
      <span className="preloader__text">Searching LEGO sets...</span>
    </div>
  );
}

export default Preloader;
