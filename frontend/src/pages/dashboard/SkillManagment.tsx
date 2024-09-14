import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

const SkillManagment = () => {
  const [formData, setFormData] = useState({
    skill_name: "",
    skill_percent: 0,
  });
  const [show, setshow] = useState(true);
  const skill = useSelector((state: RootState) => state.skill);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myCallBack = () => {
    navigate("/dashboard");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myFormData = { ...formData, myCallBack };
    await dispatch({ type: "ADD_SKILL", myFormData });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 px-20 py-20 " id="skills">
      <div className="max-w-4xl mx-auto ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Skills</h1>{" "}
          <button
            onClick={() => {
              setshow(true);
            }}
          >
            Create Skill
          </button>
        </div>
        <div
          className={`mt-8 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-2xl ${
            show ? "" : "hidden"
          }`}
        >
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 rounded-lg">
            {" "}
            <button
              className="text-red-500 flex-row-reverse"
              onClick={() => {
                setshow(false);
              }}
            >
              X
            </button>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="skill_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  skill Name
                </label>
                <div className="mt-2">
                  <input
                    id="skill_name"
                    name="skill_name"
                    type="skill_name"
                    required
                    autoComplete="skill_name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.skill_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="skill_percent"
                    className="block text-sm font-medium text-gray-700"
                  >
                    skill_percent
                  </label>
                  <input
                    id="skill_percent"
                    name="skill_percent"
                    type="number"
                    required
                    minLength={6}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.skill_percent}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {skill.loading ? "Loading..." : "Add Skill"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillManagment;
