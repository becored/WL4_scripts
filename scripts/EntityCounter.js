function EntityCounter()
{
    var entitylist_id = interface.prompt("Input the Entity List ID (difficulty): 0(Hard) 1(Normal) 2(S-Hard)", "0");
    if (parseInt(entitylist_id) < 0 || parseInt(entitylist_id) > 2) {
        interface.log("Illegal Entity list ID!");
        return;
    }
    var entity_id = interface.prompt("Input the Entity Local ID (int)", "0");
    var difficultyNames = ["Hard", "Normal", "S-Hard"];
    var counter = 0;
    var total = 0;

    interface.log("Difficulty: " + difficultyNames[entitylist_id]);
    interface.log("Entity Local ID (int): " + entity_id);
    for (current_room_id = 0; current_room_id < 16; current_room_id ++) {
        interface.SetCurrentRoomId(current_room_id);
        var entities_str = interface.GetEntityListData(entitylist_id);
        var entitess_hex = entities_str.split(" ");
        for (i = 2; i < entitess_hex.length; i = i + 3) {
            var entity_int = parseInt(entitess_hex[i], 16);
            if (entity_int == entity_id) {
                counter ++;
                total ++;
            }
        }
        interface.log("Room " + ("00" + current_room_id).slice(-2) + ": " + counter);
        counter = 0;
    }
    interface.log("Total : " + total);
}

EntityCounter();
