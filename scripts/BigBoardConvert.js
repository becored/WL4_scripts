function bigBoardConvert()
{
    var width = interface.GetCurRoomLayerWidth(0);
    var height = interface.GetCurRoomLayerHeight(0);
    var result = "";
    var conv_map = {
        280:0,
        281:1,
        282:2,
        283:3,
        284:4,
        285:5,
        286:6,
        287:7,
    };

    for (y = 0; y < parseInt(height); y++) {
        for (x = 0; x < parseInt(width); x++) {
            var cur_tile = interface.GetCurRoomTile16(0, x, y);
            for (var key in conv_map) {
                if (cur_tile == key) {
                    result = result + ("00" + conv_map[key]).slice(-2) + " ";
                }
            }
        }
    }
    interface.log(result);
}

bigBoardConvert();
