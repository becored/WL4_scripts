function layer0IceTileGen()
{
    var load_layer = 1;
    var write_layer = 0;
    var start_range_tileid = 96;
    var end_range_tileid = 303;
    var dif_value = 208;
    var exc_value = 192;

    var exc_map = {
        488:504,
        489:505,
        490:508,
        496:506,
        497:507
    };

    var width = WL4EditorInterface.GetCurRoomLayerWidth(1);
    var height = WL4EditorInterface.GetCurRoomLayerHeight(1);

    var cur_tile;
    var add_value;

    for (y = 0; y < parseInt(height); y++) {
        for (x = 0; x < parseInt(width); x++) {
            cur_tile = WL4EditorInterface.GetCurRoomTile16(load_layer, x, y);
            if (start_range_tileid <= cur_tile && cur_tile <= end_range_tileid) {
                add_value = cur_tile + dif_value;
                if (cur_tile >= exc_value) {
                    add_value -= 8;
                }
                WL4EditorInterface.SetCurRoomTile16(write_layer, add_value, x, y);
            }
            for (var key in exc_map) {
                if (cur_tile == key) {
                    add_value = exc_map[key];
                    WL4EditorInterface.SetCurRoomTile16(write_layer, add_value, x, y);
                }
            }
        }
    }
    WL4EditorInterface.UpdateRoomGFXFull();
    WL4EditorInterface.log("Finish generation !");
}

layer0IceTileGen();
