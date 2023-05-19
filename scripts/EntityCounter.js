function EntityCounter()
{
    var entitylist_id = WL4EditorInterface.prompt("Input the Entity List ID (difficulty): 0(Hard) 1(Normal) 2(S-Hard)", "0");
    if (parseInt(entitylist_id) < 0 || parseInt(entitylist_id) > 2) {
        WL4EditorInterface.log("Illegal Entity list ID!");
        return;
    }
    var entity_id = WL4EditorInterface.prompt("Input the Entity Local ID (int)", "0");
    var difficultyNames = ["Hard", "Normal", "S-Hard"];
    var counter = 0;
    var total = 0;

    WL4EditorInterface.log("Difficulty: " + difficultyNames[entitylist_id]);
    WL4EditorInterface.log("Entity Local ID (int): " + entity_id);
    for (current_room_id = 0; current_room_id < WL4EditorInterface.GetRoomNum(); current_room_id ++) {
        WL4EditorInterface.SetCurrentRoomId(current_room_id);
        var entities_str = WL4EditorInterface.GetEntityListData(entitylist_id);
        var entitess_hex = entities_str.split(" ");
        for (i = 2; i < entitess_hex.length; i = i + 3) {
            var entity_int = parseInt(entitess_hex[i], 16);
            if (entity_int == entity_id) {
                counter ++;
                total ++;
            }
        }
        WL4EditorInterface.log("Room " + ("00" + current_room_id).slice(-2) + ": " + counter);
        counter = 0;
    }
    WL4EditorInterface.log("Total : " + total);
}

EntityCounter();
