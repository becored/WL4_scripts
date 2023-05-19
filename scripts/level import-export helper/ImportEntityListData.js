function ExportEntityListData()
{
    var output_dir = "./#Entities/";
    var difNames = ["Hard", "Normal", "S-Hard"];

    var read_id = WL4EditorInterface.prompt("Input the Entity list Id you want to load data: 0(Hard) 1(Normal) 2(S-Hard)", "0");
    var write_id = WL4EditorInterface.prompt("Input the Entity list Id you want to replace data: 0(Hard) 1(Normal) 2(S-Hard):", "0");
    WL4EditorInterface.SetEntityListData(WL4EditorInterface.ReadTxtFile(output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + difNames[read_id] + ".bin"), write_id);
    WL4EditorInterface.log("File imported: " + output_dir + "Room" + ("00" + WL4EditorInterface.GetCurRoomId()).slice(-2) + "_" + difNames[read_id] + ".bin");
}

ExportEntityListData();
