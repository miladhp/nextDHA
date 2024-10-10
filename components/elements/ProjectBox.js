import Link from "next/link";
import Image from "next/image";

const ProjectBox = ({ project }) => {
  return (
    <>
      {project && (
        <div className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <Link href={`projects/${project.id}`}>
                  <Image
                    src={project?.images[0]}
                    alt={project.title}
                    width={480}
                    height={240}
                  />
                </Link>
              </figure>
            </div>
            <div className="content-box">
              <Link
                href={`projects/${project.id}`}
                className="theme-btn read-more"
              >
                <i className="far fa-arrow-up"></i>
              </Link>
              <h4 className="title">{project.title}</h4>
              <span className="cat">{project.location}</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBox;
