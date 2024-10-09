import Link from "next/link";
import Image from "next/Image";

const ProjectBox = ({ project }) => {
  return (
    <div className="project-block">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <Link href={`projects/${project.id}`}>
              <Image
                src={project.img}
                alt={project.title}
                width={480}
                height={240}
              />
            </Link>
          </figure>
        </div>
        <div className="content-box">
          <Link href={`projects/${project.id}`} className="theme-btn read-more">
            <i className="far fa-arrow-up"></i>
          </Link>
          <h4 className="title">{project.title}</h4>
          <span className="cat">{project.description}</span>
        </div>
        <div className="overlay-1"></div>
      </div>
    </div>
  );
};

export default ProjectBox;
