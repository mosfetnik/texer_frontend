import DashNav from "@/components/dashboard/DashNav";
import React from "react";
import { authOption, CustomSession } from "../api/auth/[...nextauth]/options";

import { getServerSession } from "next-auth";
import CreateChat from "@/components/groupChat/CreateChat";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/groupChat/GroupChatCard";

const Dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOption);
  const group: Array<ChatGroupType | []> = await fetchChatGroups(
    session?.user?.token!
  );
  console.log(group);
  return (
    <div>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image ?? undefined}
      />
      <div className="container mx-auto px-4">
        <div className=" flex justify-end mt-10">
          <CreateChat user={session?.user!} />
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {group.length > 0 &&
            group.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
