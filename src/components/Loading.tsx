export const Loading = () => {
  return (
    <div className="loading-map">
      <div className="loading-map-content">
        <h3>Espere por favor!</h3>
        <span>Obteniendo localización...</span>
        <div className="spinner-border text-light mt-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};
