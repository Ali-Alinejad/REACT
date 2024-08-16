export default function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image}></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
