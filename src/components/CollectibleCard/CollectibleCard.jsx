import './CollectibleCard.css';

function CollectibleCard({ collectible }) {
  return (
    <article className="collectible-card">
      <div className="collectible-card__image">
        {collectible.imageUrl ? (
          <img
            className="collectible-card__photo"
            src={collectible.imageUrl}
            alt={collectible.imageAlt}
          />
        ) : (
          <div
            className="collectible-card__placeholder"
            style={{ '--collectible-accent': collectible.accentColor }}
            role="img"
            aria-label={collectible.imageLabel}
          >
            <div className="collectible-card__brick collectible-card__brick_top" />
            <div className="collectible-card__brick collectible-card__brick_middle" />
            <div className="collectible-card__brick collectible-card__brick_bottom" />
          </div>
        )}
      </div>
      <div className="collectible-card__content">
        <h3 className="collectible-card__title">{collectible.name}</h3>
        <dl className="collectible-card__details">
          {collectible.setNumber && (
            <div className="collectible-card__detail">
              <dt className="collectible-card__term">Set</dt>
              <dd className="collectible-card__value">{collectible.setNumber}</dd>
            </div>
          )}
          <div className="collectible-card__detail">
            <dt className="collectible-card__term">Year</dt>
            <dd className="collectible-card__value">{collectible.year}</dd>
          </div>
          {collectible.pieceCount && (
            <div className="collectible-card__detail">
              <dt className="collectible-card__term">Pieces</dt>
              <dd className="collectible-card__value">{collectible.pieceCount}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}

export default CollectibleCard;
