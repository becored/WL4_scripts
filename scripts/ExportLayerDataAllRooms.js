function ExportLayerDataAllRooms() {

    var output_dir = "./#Layers/";
    var rooms_info = [];

    rooms_info.push(WL4EditorInterface.GetRoomNum());

    for (current_room_id = 0; current_room_id < WL4EditorInterface.GetRoomNum(); current_room_id++) {
        for (current_layer = 0; current_layer < 3; current_layer++) {
            WL4EditorInterface.SetCurrentRoomId(current_room_id);
            WL4EditorInterface._ExportLayerData(output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin", current_layer);
            WL4EditorInterface.log("File exported:" + output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + current_layer + ".bin");
        }
        rooms_info.push(WL4EditorInterface.GetCurRoomLayerWidth(1));
        rooms_info.push(WL4EditorInterface.GetCurRoomLayerHeight(1));
    }
    WL4EditorInterface.WriteTxtFile(output_dir + "Rooms_info.txt", rooms_info);
}
ExportLayerDataAllRooms();
