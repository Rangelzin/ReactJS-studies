import { Student } from "@/types/Student";

type Props = {
  students: Student[];
};

export const StudentsTable = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-600 overflow-hidden rounded-md">
      <thead>
        <tr className="text-left bg-gray-800 border-b border-gray-600">
          <th className="p-3">Name</th>
          <th className="p-3">Status</th>
          <th className="p-3">Grade 1</th>
          <th className="p-3">Grade 2</th>
          <th className="p-3">Final Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((students) => (
          <tr key={students.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
            <td className="p-3 flex items-center">
              <img src={students.avatar} alt={students.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-bold">{students.name}</div>
                <div>{students.email}</div>
              </div>
            </td>
            <td>
              {students.active && <div className="px-2 py-1 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">Active</div>}
              {!students.active && <div className="px-2 py-1 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">Inactive</div>}
            </td>
            <td>{(students.grade1.toFixed(1))}</td>
            <td>{(students.grade2.toFixed(1))}</td>
            <td className="font-bold">
              {students.active
                ? ((students.grade1 + students.grade2) / 2).toFixed(1)
                : "--"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
