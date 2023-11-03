interface TechLogoProps {
  link: string,
  path: string,
  altName: string,
}

function TechLogo({ link, path, altName } : TechLogoProps) {
  return (
    <a href={link} target="_blank">
      <img src={path} className="logo" alt={altName} />
    </a>);
}

export default TechLogo;
