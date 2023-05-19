function ImportLayerDataAllRooms() {

    var output_dir = "./#Layers/";
    var str;
    var rooms_info = [];

    str = WL4EditorInterface.ReadTxtFile(output_dir + "Rooms_info.txt");
    rooms_info = str.split(',');

    if (WL4EditorInterface.GetRoomNum() != rooms_info[0]) {
        WL4EditorInterface.log("Number of rooms does not match!");
        return;
    }

    for (current_room_id = 0; current_room_id < WL4EditorInterface.GetRoomNum(); current_room_id++) {
        WL4EditorInterface.SetCurrentRoomId(current_room_id);
        WL4EditorInterface.SetRoomSize(rooms_info[1+(current_room_id*2)],rooms_info[1+(current_room_id*2)+1],rooms_info[1+(current_room_id*2)],rooms_info[1+(current_room_id*2)+1]);
        WL4EditorInterface.log("Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + " size changed:" + rooms_info[1+(current_room_id*2)] + "," + rooms_info[1+(current_room_id*2)+1]);
        for (current_layer = 0; current_layer < 3; current_layer++) {
            WL4EditorInterface._ImportLayerData(output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin", current_layer);
            WL4EditorInterface.log("File imported:" + output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin");
        }
    }
}

ImportLayerDataAllRooms();
