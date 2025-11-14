import type { Project } from "../types/crm"

interface Props {
  project: Project
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  return (
    <li key={project.id} className="p-3 border rounded-md flex justify-between items-center bg-gray-50">
      <div>
        <p className="font-medium">{project.name}</p>
          <span className="text-xs text-gray-500">
            Status: <span className={`font-semibold ${project.status === 'done' ? 'text-green-600' : 'text-yellow-600'}`}>{project.status}</span>
        </span>
      </div>
      <span className="font-bold text-lg text-indigo-600">
        {project.value.toFixed(2)} PLN
      </span>
    </li>
  )
}
