function ExportEntityListData()
{
    var output_dir = "./entities/";
    var difNames = ["Hard", "Normal", "S-Hard"];

    var write_id = WL4EditorInterface.prompt("Input the Entity list Id you want to save data: 0(Hard) 1(Normal) 2(S-Hard)", "0");
    WL4EditorInterface.WriteTxtFile(output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + difNames[write_id] + ".bin", WL4EditorInterface.GetEntityListData(write_id));
    WL4EditorInterface.log("File exported:" + output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + difNames[write_id] + ".bin");
}

ExportEntityListData();
