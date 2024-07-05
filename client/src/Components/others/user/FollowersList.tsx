import React from "react";
import { ApiMethods } from "../../../enum/ApiMethods";
import { getDataFromApi } from "../../../api/CustomApiCall";
import { UserType } from "../../../type/userType";
import UserListCard from "./UserListCard";

interface IFollowerList {
  userId: string;
}

const FollowersList: React.FC<IFollowerList> = (props) => {
  const [Loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [followers, setFollowers] = React.useState<UserType[] | null>(null);

  const getFollowersList = async (searchKeyWord: string) => {
    setLoading(true);
    const data = await getDataFromApi(
      "/api/v1/getFollowers",
      ApiMethods.POST,
      {
        keyword: searchKeyWord,
        page: currentPage,
      },
      { userId: props.userId }
    );
    if (data.success && data.data) {
      setFollowers(data.data.followers);
      setTotalPage(data.data.followersCount / data.data.resultPerPage);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (props.userId && props.userId !== "") getFollowersList("");
  }, [props.userId]);

  return (
    <React.Fragment>
      <UserListCard users={followers} setUsers={setFollowers} />
    </React.Fragment>
  );
};

export default FollowersList;
