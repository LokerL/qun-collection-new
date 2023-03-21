import supabase from "./supabase";
export const getRooms = async () => {
  const { data, error } = await supabase
    .from("rooms")
    .select("room_id, avatar, weight");
  if (error) {
    throw new Error(error);
  } else {
    const promises = data.map((room) => getGroupsCountByRoomId(room.room_id));
    const counts = await Promise.all(promises);
    return data
      .map((room, index) => ({
        ...room,
        num: counts[index],
      }))
      .sort((a, b) => a.weight - b.weight);
  }
};
export const getGroupsCountByRoomId = async (roomId) => {
  const { data, error } = await supabase
    .from("groups")
    .select("id")
    .eq("room_id", roomId);
  if (error) {
    throw new Error(error);
  } else {
    return data.length;
  }
};

export const getGroupsByRoomId = async (roomId) => {
  const { data, error } = await supabase
    .from("groups")
    .select("*")
    .eq("room_id", roomId);
  if (error) {
    throw new Error(error);
  } else {
    return data.sort((a, b) => a.weight - b.weight);
  }
};

export const getTags = async () => {
  const { data, error } = await supabase.from("tags").select("*");
  if (error) {
    throw new Error(error);
  } else {
    return data;
  }
};
