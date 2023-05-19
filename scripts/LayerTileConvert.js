function layerTileConvert()
{
    var target_layerid = WL4EditorInterface.prompt("Input Layer Id", "0");
    var target_tileid = WL4EditorInterface.prompt("Input Tile16 Id (Before)", "0");
    var write_tileid = WL4EditorInterface.prompt("Input Tile16 Id (After)", "0");

    var width = WL4EditorInterface.GetCurRoomLayerWidth(0);
    var height = WL4EditorInterface.GetCurRoomLayerHeight(0);

    var cur_tile;

    for (y = 0; y < parseInt(height); y++) {
        for (x = 0; x < parseInt(width); x++) {
            cur_tile = WL4EditorInterface.GetCurRoomTile16(target_layerid, x, y);
            if (cur_tile == target_tileid) {
                WL4EditorInterface.SetCurRoomTile16(target_layerid, write_tileid, x, y);
            }
        }
    }
    WL4EditorInterface.UpdateRoomGFXFull();
    WL4EditorInterface.log("Finish Conversion!");
}

layerTileConvert();
