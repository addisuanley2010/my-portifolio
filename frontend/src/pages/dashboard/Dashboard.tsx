import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const Dashboard = () => {
  const dispatch = useDispatch();


  const skills = useSelector((state: RootState) => state.skill);

  const deleteSkill = (id: string) => {
    dispatch({ type: "DELETE_SKILL", id });
  };

  return (
    <div className="min-h-screen bg-slate-900  py-20 text-white " id="skills">
      <div className="max-w-4xl ">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <div className="grid grid-cols-2 gap-4 ">
          {skills?.skillData.length > 0 ? (
            skills?.skillData.map((skill: any, index: any) => (
              <div key={index} className="mb-4 bg-blue-700">
                <h2 className="text-lg font-semibold">{skill.skill_name}</h2>
                <div>
                  <span className="absolute right-0 text-white mr-2">
                    {skill.skill_percent}%
                  </span>
                  <span className="flex justify-between">
                    <button>Edit</button>{" "}
                    <button
                      onClick={() => {
                        deleteSkill(skill._id);
                      }}
                    >
                      delete
                    </button>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <h2>No Skill Found</h2>
          )}
        </div>
      </div>
      <div className="max-w-4xl ">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-2 gap-4 ">
        <h4>This is Project Section</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
