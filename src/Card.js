export default function Card({ title, description, skills, projects }) {
  return (
    <div className="cards-container">
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
  );
}
