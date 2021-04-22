function ExportEntityListDataAllRooms()
{
    var output_dir = "./entities/";
    var difNames = ["Hard", "Normal", "S-Hard"];

    for (current_difficulty = 0; current_difficulty < 3; current_difficulty ++) {
        for (current_room_id = 0; current_room_id < interface.GetRoomNum(); current_room_id ++) {
            interface.SetCurrentRoomId(current_room_id);
            interface.WriteTxtFile(output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + difNames[current_difficulty] + ".bin", interface.GetEntityListData(current_difficulty));
            interface.log("File exported:" + output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + difNames[current_difficulty] + ".bin");
        }
    }
}

ExportEntityListDataAllRooms();
