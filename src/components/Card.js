import close from "../images/close-icon.png";
export default function Card({
  title,
  description,
  skills,
  projects,
  onClose,
}) {
  return (
    <div className="cards">
      <div className="overlay"></div>
      <div className="cards-container">
        <button className="close-icon" onClick={onClose}>
          <img src={close}></img>
        </button>
        <h1 className="card-title">{title}</h1>
        {description && <p className="card-paragraph">{description}</p>}
        {skills && (
          <ul>
            {skills.map((skill) => {
              return <li>{skill}</li>;
            })}
          </ul>
        )}
        {projects && (
          <ul>
            {projects.map((projects) => {
              return (
                <li>
                  <a
                    href={projects.url}
                    target="_blank"
                    style={{
                      TextDecoderation: "none",
                      color: "#923333",
                      fontSize: "20px",
                    }}
                  >
                    {projects.name}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
