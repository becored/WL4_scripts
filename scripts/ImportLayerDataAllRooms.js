function ImportLayerDataAllRooms()
{
    var output_dir = "./layers/";

    for (current_layer = 0; current_layer < 3; current_layer ++) {
        for (current_room_id = 0; current_room_id < interface.GetRoomNum(); current_room_id ++) {
            interface.SetCurrentRoomId(current_room_id);
            interface._ImportLayerData(output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin", current_layer);
            interface.log("File imported:" + output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin");
        }
    }
}

ImportLayerDataAllRooms();
