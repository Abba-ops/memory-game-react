export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img
          alt="cover"
          className="back"
          onClick={handleClick}
          src="/images/cover.png"
        />
      </div>
    </div>
  );
}
