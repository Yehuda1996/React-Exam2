import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const roleIndex = roles.indexOf(role);

  const activityIndex = activities.indexOf(activity);

  const isVerified = activityIndex !== -1 && roleIndex >= activityIndex;

  return isVerified;
};

export default useIsVerified;
