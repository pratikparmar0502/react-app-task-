const Api = (props) => {
  let imageUrl = props.imageUrl;
  let cardName = props.cardName;
  let dead = props.dead;
  let last = props.last;
  let location = props.location;
  let first = props.first;
  let seen = props.seen;

  return (
    <>
      <section className="parent">
        <div className="child_1">
          <div>
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className="child_2">
          <div>
            <h2 className="num-1">{cardName}</h2>
            <p className="num-4">{dead}</p>
            <p className="num-3">{last}</p>
            <p className="num-2">{location}</p>
            <p className="num-3">{first}</p>
            <p className="num-2">{seen}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Api;
