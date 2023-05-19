function ImportEntityListDataAllRooms()
{
    var output_dir = "./#Entities/";
    var difNames = ["Hard", "Normal", "S-Hard"];

    for (current_difficulty = 0; current_difficulty < 3; current_difficulty ++) {
        for (current_room_id = 0; current_room_id < WL4EditorInterface.GetRoomNum(); current_room_id ++) {
            WL4EditorInterface.SetCurrentRoomId(current_room_id);
            WL4EditorInterface.SetEntityListData(WL4EditorInterface.ReadTxtFile(output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + difNames[current_difficulty] + ".bin"), current_difficulty);
            WL4EditorInterface.log("File imported: " + output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + difNames[current_difficulty] + ".bin");
        }
    }
}

ImportEntityListDataAllRooms();
