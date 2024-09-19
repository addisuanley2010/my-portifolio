import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";

const SkillManagement = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state: RootState) => state.skill);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);

  const deleteSkill = (id: string) => {
    dispatch({ type: "DELETE_SKILL", id });
  };

  const editSkill = (skill: any) => {
    setEditingSkill(skill);
    setShowSkillForm(true);
  };

  return (
    <div
      className="min-h-screen bg-slate-800  justify-center items-center"
      id="skill"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-white">Skills</h1>
          <button
            onClick={() => setShowSkillForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Create Skill
          </button>
        </div>
        {showSkillForm ? (
          <SkillRegistration
            editData={editingSkill ?? undefined}
            onClose={() => {
              setShowSkillForm(false);
              setEditingSkill(null);
            }}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills?.skillData.length > 0 ? (
              skills?.skillData.map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-gray-600 rounded-lg p-6 relative overflow-hidden text-white"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    {skill.skill_name}
                  </h2>
                  <div className="flex justify-between items-center">
                    <div className="w-full bg-white rounded-full h-2.5 mr-4">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${skill.skill_percent}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold">
                      {skill.skill_percent}%
                    </span>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <button
                      onClick={() => editSkill(skill)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded transition duration-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSkill(skill._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-2xl font-semibold text-center col-span-2">
                No Skills Found
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillManagement;

interface SkillRegistrationProps {
  editData?: {
    _id: string;
    skill_name: string;
    skill_percent: number;
  };
  onClose?: () => void;
}

export const SkillRegistration: React.FC<SkillRegistrationProps> = ({
  editData,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    skill_name: "",
    skill_percent: 0,
  });

  const skill = useSelector((state: RootState) => state.skill);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      setFormData({
        skill_name: editData.skill_name,
        skill_percent: editData.skill_percent,
      });
    }
  }, [editData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myFormData = { ...formData };

    if (editData) {
      await dispatch({
        type: "UPDATE_SKILL",
        payload: { ...editData, ...myFormData },
      });
    } else {
      await dispatch({ type: "ADD_SKILL", payload: myFormData });
    }

    if (onClose) onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "skill_percent" ? Number(value) : value,
    }));
  };

  return (
    <div className="bg-gray-700 py-5 px-6 shadow-lg sm:rounded-xl sm:px-12 rounded-lg text-white">
      <button
        className=" text-red-500 hover:text-red-700 transition-colors duration-300 "
        onClick={onClose}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-3xl font-bold text-center mb-8">
        {editData ? "Update Skill" : "Add New Skill"}
      </h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="skill_name"
            className="block text-sm font-medium leading-6 text-gray-700"
          >
            Skill Name
          </label>
          <div className="mt-2">
            <input
              id="skill_name"
              name="skill_name"
              type="text"
              required
              className="mt-1 block w-full border bg-gray-600 py-3 px-4 rounded-lg"
              value={formData.skill_name}
              onChange={handleChange}
              placeholder="Enter skill name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="skill_percent"
            className="block text-sm font-medium text-gray-700"
          >
            Skill Proficiency
          </label>
          <div className="mt-2">
            <input
              id="skill_percent"
              name="skill_percent"
              type="range"
              required
              min={0}
              max={100}
              className="mt-1 block w-full accent-indigo-600"
              value={formData.skill_percent}
              onChange={handleChange}
            />
            <div className="text-center mt-2">{formData.skill_percent}%</div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center mb-20 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {skill.loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
            {skill.loading
              ? "Processing..."
              : editData
              ? "Update Skill"
              : "Add Skill"}
          </button>
        </div>
      </form>
    </div>
  );
};
