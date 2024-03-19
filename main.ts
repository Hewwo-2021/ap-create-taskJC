namespace SpriteKind {
    export const Shop = SpriteKind.create()
}
function shopify_with_items_in (myImage: Image, myImage2: Image, myImage3: Image, myImage4: Image, myImage5: Image) {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -1 * spritestats[2]
    }
})
function spawning () {
    mySprite = sprites.create(img`
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
    mySprite.z = 1
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 53))
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, spritestats[0], 0)
    mySprite.ay = 100
}
let mySprite: Sprite = null
let spritestats: number[] = []
let Shop = sprites.create(img`
    ................................
    ..........22222222222...........
    .........2666666666662..........
    ........266666666666662.........
    .......26666666666666662........
    ......2666...........6662.......
    .....2666.............6662......
    ....2666f.............f6662.....
    ...2666.f.............f.6662....
    ..2666..bbbbbbbbbbbbbbb..6662...
    .2666...bfffbfbfbfffbff...6662..
    ..bbb...bfbbbfbfbfbfbff....6662.
    ..bbb...bfffbfffbfbfbff....bbb..
    ..bbb...bbbfbfbfbfbfbfb....bbb..
    ..bbb...bfffbfbfbfffbfb....bbb..
    ..bbb......................bbb..
    ..bbb......................bbb..
    ..bbb......................bbb..
    ..bbb......................bbb..
    ..bbb......................bbb..
    ..bbb.3.3..............dd..bbb..
    ..bbb.333...ff........ddd..bbb..
    ..bbb.333...fffff....ddd...bbb..
    ..bbb..3....fffff....ed....bbb..
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
    `, SpriteKind.Shop)
tiles.setCurrentTilemap(tilemap`level0`)
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    22222222222222222dddd222222222222222222222222222222222222dddd222222222222222222222222222222222222dddd222222222222222222222222222222222222dddd2222222222222222222
    22222222222ddddddddddd22222222222222222222222222222ddddddddddd22222222222222222222222222222ddddddddddd22222222222222222222222222222ddddddddddd222222222222222222
    22222222dddddddddddddd22222222222222222222222222dddddddddddddd22222222222222222222222222dddddddddddddd22222222222222222222222222dddddddddddddd222222222222222222
    222222dddddddddddddddd222222222222222222222222dddddddddddddddd222222222222222222222222dddddddddddddddd222222222222222222222222dddddddddddddddd222222222222222222
    22222ddddddddddddddddd22222222222222222222222ddddddddddddddddd22222222222222222222222ddddddddddddddddd22222222222222222222222ddddddddddddddddd222222222222222222
    22222ddddddddddddddddd22222222222222222222222ddddddddddddddddd22222222222222222222222ddddddddddddddddd22222222222222222222222ddddddddddddddddd222222222222222222
    2222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd22222222222222222
    2222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd222222222222222222222ddddddddddddddddddd22222222222222222
    222dddddddddddddddddddd222222ddd22222222222dddddddddddddddddddd222222ddd22222222222dddddddddddddddddddd222222ddd22222222222dddddddddddddddddddd222222ddd22222222
    d22dddddddddddddddddddd22222ddddd2222222222dddddddddddddddddddd22222ddddd2222222222dddddddddddddddddddd22222ddddd2222222222dddddddddddddddddddd22222ddddd222222d
    d2ddddddddddddddddddddd22222ddddd222222222ddddddddddddddddddddd22222ddddd222222222ddddddddddddddddddddd22222ddddd222222222ddddddddddddddddddddd22222ddddd222222d
    d2ddddddddddddddddddddd22222ddddd222222222ddddddddddddddddddddd22222ddddd222222222ddddddddddddddddddddd22222ddddd222222222ddddddddddddddddddddd22222ddddd222222d
    d2ddddddddddddddddddddd22222dddddd22222222ddddddddddddddddddddd22222dddddd22222222ddddddddddddddddddddd22222dddddd22222222ddddddddddddddddddddd22222dddddd22222d
    ddddddddddddddddddddddd22222dddddd2222222dddddddddddddddddddddd22222dddddd2222222dddddddddddddddddddddd22222dddddd2222222dddddddddddddddddddddd22222dddddd22222d
    ddddddddddddddddddddddd22222dddddd2222222dddddddddddddddddddddd22222dddddd2222222dddddddddddddddddddddd22222dddddd2222222dddddddddddddddddddddd22222dddddd22222d
    ddddddddddddddddddddddd2222ddddddd2222222dddddddddddddddddddddd2222ddddddd2222222dddddddddddddddddddddd2222ddddddd2222222dddddddddddddddddddddd2222ddddddd222222
    cddddddddddddddeddddddd2222ddddddd2222dddddddddddddddddeddddddd2222ddddddd2222dddddddddddddddddeddddddd2222ddddddd2222dddddddddddddddddeddddddd2222ddddddd2222dd
    cdddddddddddddeeddddddd2222ddddddd22ddddddddddddddddddeeddddddd2222ddddddd22ddddddddddddddddddeeddddddd2222ddddddd22ddddddddddddddddddeeddddddd2222ddddddd22dddd
    cdddddddddddddeeddddddd2222dddddddd2ddddddddddddddddddeeddddddd2222dddddddd2ddddddddddddddddddeeddddddd2222dddddddd2ddddddddddddddddddeeddddddd2222dddddddd2dddd
    ccdddddddddddeeeedddddd2222ddddddddddddddddddddddddddeeeedddddd2222ddddddddddddddddddddddddddeeeedddddd2222ddddddddddddddddddddddddddeeeedddddd2222dddddddddcccc
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
// Arrays start at 0
// item 0- speed
// item 1- attack
// item 2- jump
// item 3- health
// item 4-dash recoil
// 5 items total
spritestats = [
50,
0,
85,
1,
0.5
]
tiles.placeOnTile(Shop, tiles.getTileLocation(5, 52))
Shop.ay = 1000
Shop.z = 0
spawning()
