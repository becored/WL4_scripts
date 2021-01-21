function ImportEntityListData()
{
    var output_dir = "./entities/";
    var difNames = ["Hard", "Normal", "S-Hard"];

    var write_id = interface.prompt("Input the Entity list Id you want to save data: 0(Hard) 1(Normal) 2(S-Hard)", "0");
    interface.WriteTxtFile(output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + difNames[write_id] + ".bin", interface.GetEntityListData(write_id));
    interface.log("File exported:" + output_dir + "Room" + ("00" + interface.GetCurRoomId()).slice(-2) + "_" + difNames[write_id] + ".bin");
}

ImportEntityListData();
