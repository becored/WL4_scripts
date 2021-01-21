function ExportEntityListData()
{
    var output_dir = "./entities/";
    var difNames = ["Hard", "Normal", "S-Hard"];

    var read_id = interface.prompt("Input the Entity list Id you want to load data: 0(Hard) 1(Normal) 2(S-Hard)", "0");
    var write_id = interface.prompt("Input the Entity list Id you want to replace data: 0(Hard) 1(Normal) 2(S-Hard):", "0");
    interface.SetEntityListData(interface.ReadTxtFile(output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + difNames[read_id] + ".bin"), write_id);
    interface.log("File imported: " + output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + difNames[read_id] + ".bin");
}

ExportEntityListData();
