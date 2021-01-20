function layerTileConbert()
{
    var target_layerid = interface.prompt("Input Layer Id", "0");
    var target_tileid = interface.prompt("Input Tile16 Id (Before)", "0");
    var write_tileid = interface.prompt("Input Tile16 Id (After)", "0");

    var width = interface.GetCurRoomLayerWidth(0);
    var height = interface.GetCurRoomLayerHeight(0);

    var cur_tile;

    for (y = 0; y < parseInt(height); y++) {
        for (x = 0; x < parseInt(width); x++) {
            cur_tile = interface.GetCurRoomTile16(target_layerid, x, y);
            if (cur_tile == target_tileid) {
                interface.SetCurRoomTile16(target_layerid, write_tileid, x, y);
            }
        }
    }
    interface.UpdateRoomGFXFull();
    interface.log("Finish Conversion!");
}

layerTileConbert();
