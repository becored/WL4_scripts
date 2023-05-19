function ImportLayerDataAllRooms()
{
    var output_dir = "./#Layers/";

    for (current_layer = 0; current_layer < 3; current_layer ++) {
        for (current_room_id = 0; current_room_id < WL4EditorInterface.GetRoomNum(); current_room_id ++) {
            WL4EditorInterface.SetCurrentRoomId(current_room_id);
            WL4EditorInterface._ImportLayerData(output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin", current_layer);
            WL4EditorInterface.log("File imported:" + output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin");
        }
    }
}

ImportLayerDataAllRooms();
