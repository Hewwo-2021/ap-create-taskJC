let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f 6 6 6 6 f 7 f . . . . 
    . . f f 6 6 6 6 f 7 7 7 f . . . 
    . . f 6 6 6 f f 6 6 6 6 f . . . 
    . . f f f f 6 6 7 7 7 7 6 f . . 
    . . f 6 7 7 7 f f f f 6 7 f . . 
    . f f f f f f f 7 7 7 f f f . . 
    . f f 7 7 7 7 7 f 7 7 7 7 f . . 
    . f 7 7 7 d 7 1 f d d 7 f . . . 
    . . f 7 7 7 7 7 d d d f . . . . 
    . . . . f 6 6 6 6 5 6 f . . . . 
    . . . . f 6 6 d 6 6 6 f . . . . 
    . . . f f f 6 6 f 6 6 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level0`)
scene.setBackgroundImage(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    33333333333333333dddd333333333333333333333333333333333333dddd333333333333333333333333333333333333dddd333333333333333333333333333333333333dddd3333333333333333333
    33333333333ddddddddddd33333333333333333333333333333ddddddddddd33333333333333333333333333333ddddddddddd33333333333333333333333333333ddddddddddd333333333333333333
    33333333dddddddddddddd33333333333333333333333333dddddddddddddd33333333333333333333333333dddddddddddddd33333333333333333333333333dddddddddddddd333333333333333333
    333333dddddddddddddddd333333333333333333333333dddddddddddddddd333333333333333333333333dddddddddddddddd333333333333333333333333dddddddddddddddd333333333333333333
    33333ddddddddddddddddd33333333333333333333333ddddddddddddddddd33333333333333333333333ddddddddddddddddd33333333333333333333333ddddddddddddddddd333333333333333333
    33333ddddddddddddddddd33333333333333333333333ddddddddddddddddd33333333333333333333333ddddddddddddddddd33333333333333333333333ddddddddddddddddd333333333333333333
    3333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd33333333333333333
    3333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd333333333333333333333ddddddddddddddddddd33333333333333333
    333dddddddddddddddddddd333333ddd33333333333dddddddddddddddddddd333333ddd33333333333dddddddddddddddddddd333333ddd33333333333dddddddddddddddddddd333333ddd33333333
    d33dddddddddddddddddddd33333ddddd3333333333dddddddddddddddddddd33333ddddd3333333333dddddddddddddddddddd33333ddddd3333333333dddddddddddddddddddd33333ddddd333333d
    d3ddddddddddddddddddddd33333ddddd333333333ddddddddddddddddddddd33333ddddd333333333ddddddddddddddddddddd33333ddddd333333333ddddddddddddddddddddd33333ddddd333333d
    d3ddddddddddddddddddddd33333ddddd333333333ddddddddddddddddddddd33333ddddd333333333ddddddddddddddddddddd33333ddddd333333333ddddddddddddddddddddd33333ddddd333333d
    d3ddddddddddddddddddddd33333dddddd33333333ddddddddddddddddddddd33333dddddd33333333ddddddddddddddddddddd33333dddddd33333333ddddddddddddddddddddd33333dddddd33333d
    ddddddddddddddddddddddd33333dddddd3333333dddddddddddddddddddddd33333dddddd3333333dddddddddddddddddddddd33333dddddd3333333dddddddddddddddddddddd33333dddddd33333d
    ddddddddddddddddddddddd33333dddddd3333333dddddddddddddddddddddd33333dddddd3333333dddddddddddddddddddddd33333dddddd3333333dddddddddddddddddddddd33333dddddd33333d
    ddddddddddddddddddddddd3333ddddddd3333333dddddddddddddddddddddd3333ddddddd3333333dddddddddddddddddddddd3333ddddddd3333333dddddddddddddddddddddd3333ddddddd333333
    cddddddddddddddeddddddd3333ddddddd3333dddddddddddddddddeddddddd3333ddddddd3333dddddddddddddddddeddddddd3333ddddddd3333dddddddddddddddddeddddddd3333ddddddd3333dd
    cdddddddddddddeeddddddd3333ddddddd33ddddddddddddddddddeeddddddd3333ddddddd33ddddddddddddddddddeeddddddd3333ddddddd33ddddddddddddddddddeeddddddd3333ddddddd33dddd
    cdddddddddddddeeddddddd3333dddddddd3ddddddddddddddddddeeddddddd3333dddddddd3ddddddddddddddddddeeddddddd3333dddddddd3ddddddddddddddddddeeddddddd3333dddddddd3dddd
    ccdddddddddddeeeedddddd3333ddddddddddddddddddddddddddeeeedddddd3333ddddddddddddddddddddddddddeeeedddddd3333ddddddddddddddddddddddddddeeeedddddd3333dddddddddcccc
    ccdddddddddeeeeedddddddddddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddddddddddddeeeeedddddddddddddddddddddddddddddddddddeeeeedddddddddddddddddccccccc
    ccdddddddddddeeedddddddddddddddcccccccdddddddddddddddeeedddddddddddddddcccccccdddddddddddddddeeedddddddddddddddcccccccdddddddddddddddeeedddddddddddddddccccccccc
    cccdddddddddeeeeeddddddddddddcccccccccccddddddddddddeeeeeddddddddddddcccccccccccddddddddddddeeeeeddddddddddddcccccccccccddddddddddddeeeeeddddddddddddccccccccccc
    cccdddddddddeeeeeeedddddddddcccccccccccccdddddddddddeeeeeeedddddddddcccccccccccccdddddddddddeeeeeeedddddddddcccccccccccccdddddddddddeeeeeeedddddddddcccccccccccc
    cccddddddddeeeeeedddddddddcccccccccccccccccddddddddeeeeeedddddddddcccccccccccccccccddddddddeeeeeedddddddddcccccccccccccccccddddddddeeeeeedddddddddcccccccccccccc
    ccccdddddeeeeeeeeedddddddcccccccccccccccccccdddddeeeeeeeeedddddddcccccccccccccccccccdddddeeeeeeeeedddddddcccccccccccccccccccdddddeeeeeeeeedddddddccccccccccccccc
    cccccddddddeeeeeeeedddddcccccccccccccccccccccddddddeeeeeeeedddddcccccccccccccccccccccddddddeeeeeeeedddddcccccccccccccccccccccddddddeeeeeeeedddddcccccccccccccccc
    ccccccddcceeeeeeeddddddcccccccccccccccccccccccddcceeeeeeeddddddcccccccccccccccccccccccddcceeeeeeeddddddcccccccccccccccccccccccddcceeeeeeeddddddccccccccccccccccc
    cccccccccccceeeeeeddddcceccccccccccccccccccccccccccceeeeeeddddcceccccccccccccccccccccccccccceeeeeeddddcceccccccccccccccccccccccccccceeeeeeddddcceccccccccccccccc
    cccccccccceeeeeeeeeddccceccccccccccccccccccccccccceeeeeeeeeddccceccccccccccccccccccccccccceeeeeeeeeddccceccccccccccccccccccccccccceeeeeeeeeddccceccccccccccccccc
    ccccccccceeeeeeeeeeeccceecccccccccccccccccccccccceeeeeeeeeeeccceecccccccccccccccccccccccceeeeeeeeeeeccceecccccccccccccccccccccccceeeeeeeeeeeccceeccccccccccccccc
    ccccccceeeeeeeeeeecccccceeccccccccccccccccccccceeeeeeeeeeecccccceeccccccccccccccccccccceeeeeeeeeeecccccceeccccccccccccccccccccceeeeeeeeeeecccccceecccccccccccccc
    ccccccccceeeeeeeeeccccceecccccccccccccccccccccccceeeeeeeeeccccceecccccccccccccccccccccccceeeeeeeeeccccceecccccccccccccccccccccccceeeeeeeeeccccceeccccccccccccccc
    ccccccccceeeeeeecccccceeeeccccccccccccccccccccccceeeeeeecccccceeeeccccccccccccccccccccccceeeeeeecccccceeeeccccccccccccccccccccccceeeeeeecccccceeeecccccccccccccc
    cccccccceeceeeeeeeecceeeeeeccccccccccccccccccccceeeeeeeeeeecceeeeeeccccccccccccccccccccceeeeeeeeeeecceeeeeeccccccccccccccccccccceeeeeeeeeeecceeeeeeccccccccccccc
    cccccccccceeeeeeeeeeccceeccccccccccceccccccccccccceeeeeeeeeeccceeccccccccccceccccccccccccceeeeeeeeeeccceeccccccccccceccccccccccccceeeeeeeeeeccceeccccccccccceccc
    cccccccceeeeeeeeeeecceeeeeeccccccccceccccccccccceeeeeeeeeeecceeeeeeccccccccceccccccccccceeeeeeeeeeecceeeeeeccccccccceccccccccccceeeeeeeeeeecceeeeeeccccccccceccc
    ccceccceeeeeeeeeeeeceeeeeeeeccccccceeeccccceccceeeeeeeeeeeeceeeeeeeeccccccceeeccccceccceeeeeeeeeeeeceeeeeeeeccccccceeeccccceccceeeeeeeeeeeeceeeeeeeeccccccceeecc
    ccceeccccceeeeeeeeeeeeeeeecccccccccceeccccceeccccceeeeeeeeeeeeeeeecccccccccceeccccceeccccceeeeeeeeeeeeeeeecccccccccceeccccceeccccceeeeeeeeeeeeeeeecccccccccceecc
    cceecccceeeeeeeeeeeeeeeeeeeeccccccceeccccceecccceeeeeeeeeeeeeeeeeeeeccccccceeccccceecccceeeeeeeeeeeeeeeeeeeeccccccceeccccceecccceeeeeeeeeeeeeeeeeeeeccccccceecce
    ccceecceeeeeeeeeeeeeeeeeeeeeeccccceeeeccccceecceeeeeeeeeeeeeeeeeeeeeeccccceeeeccccceecceeeeeeeeeeeeeeeeeeeeeeccccceeeeccccceecceeeeeeeeeeeeeeeeeeeeeeccccceeeece
    eceeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeccceeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeccceeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeeccceeeeeeeeeeeeeeeeeeeeeeeeecccccccceeeee
    eeceeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeccccceeeeeeeeeeeeeeeeeeeeeeeeeeccccceeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeecccceeeeeeeeeeeeeeeeeeeeeeeeeeeccceeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeecccceeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeecccceeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeecccceeeeeeeeeeeeeeeeeeeeeeeeeecccccceeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeeecceeeeeeeeeeeeeeeeeeeeeeeeeeeecceeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeceeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 53))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
