import type { Project } from "../types/crm"
import { ProjectItem } from "./ProjectItem";

interface Props {
  projects: Project[];
}

export const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <ul className="space-y-3 mb-6">
      {projects.length === 0 ? (
        <p className="italic text-gray-500">Brak projektów dla tego klienta.</p>
        ) : (
          projects.map(project => (
            <ProjectItem key={project.id} project={project}/>
          ))
        )}
    </ul>
  )
}
