namespace SpriteKind {
    export const Shop = SpriteKind.create()
    export const selector = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -1 * spritestats[2]
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shop, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Heal = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . e 1 1 1 1 1 1 1 1 1 . . . 
            . . . e 1 e e e e e e e 1 . . . 
            . . . e 1 . . . . . . e 1 . . . 
            . . . e 1 . . . . . . e 1 . . . 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            e 1 1 1 1 1 1 e 3 3 1 1 1 1 1 1 
            e 1 1 1 1 1 1 e 3 3 1 1 1 1 1 1 
            e 1 1 1 1 e 3 3 3 3 3 3 1 1 1 1 
            e 1 1 1 1 e 3 3 3 3 3 3 1 1 1 1 
            e 1 1 1 1 1 1 e 3 3 1 1 1 1 1 1 
            e 1 1 1 1 1 1 e 3 3 1 1 1 1 1 1 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            e 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            e e e e e e e e e e e e e e e e 
            `, SpriteKind.selector)
        Speed = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . d b b d . . . . . . 
            . . . . . . d . . d . . . . . . 
            . . . . . . d . . d . . . . . . 
            . . . . . . d . . d . . . . . . 
            . . . . . d . . . . d . . . . . 
            . . . . d . . 2 . 2 . d . . . . 
            . . . d 2 . 2 2 . 2 . 2 d . . . 
            . . d 2 2 2 2 2 2 8 2 2 2 d . . 
            . . d 2 2 2 2 2 2 8 8 2 2 d . . 
            . . d 2 2 8 8 8 8 8 8 8 2 d . . 
            . . d 2 2 2 2 2 2 8 8 2 2 d . . 
            . . . d 2 2 2 2 2 8 2 2 d . . . 
            . . . . d 2 2 2 2 2 2 d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.selector)
        Jump = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . a a a a . . . . . . . . . . . 
            . a a a a a . . . . . . . . . . 
            . a a a a a d d . . . . . . . . 
            . 3 a a a a 3 d 3 3 . . . . . . 
            . 3 3 a a 3 3 3 d 3 3 3 3 3 . . 
            . 3 3 3 3 3 3 3 d 3 3 3 3 3 3 . 
            . 3 3 3 3 3 3 3 d 3 3 3 3 3 3 . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . f f f f f f f f f f f f f f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.selector)
        Attak = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 3 b . 
            . . . . . . . . . . . . 3 b b . 
            . . . . . . . . . . . 3 b b . . 
            . . . . . . . . . . 3 b b . . . 
            . . . . . . . . . 3 b b . . . . 
            . . . . . . . . 3 b b . . . . . 
            . . . . . . . 3 b b . . . . . . 
            . . . . . . 3 b b . . . . . . . 
            . . . . . 3 b b . . . . . . . . 
            . . . . 3 b b . . . . . . . . . 
            . . . 3 b b . . . . . . . . . . 
            . . 3 b b . . . . . . . . . . . 
            . 3 b b . . . . . . . . . . . . 
            . b b . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.selector)
        Openshop(Heal, Speed, Jump, Attak)
    }
})
function Openshop (heal: Sprite, run: Sprite, jump: Sprite, attac: Sprite) {
    spritelocationRow = mySprite.tilemapLocation().row
    LocationCol = mySprite.tilemapLocation().column
    mySprite = sprites.create(img`
        . 2 2 2 2 . . . . . 2 2 2 2 2 . 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        . . . . . . 2 . . 2 . . . . . 2 
        . . . . . 2 . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . 2 . . . . . 
        2 . . . . . 2 . . 2 . . . . . . 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        2 . . . . . . . . . . . . . . 2 
        . 2 2 2 2 . . . . . . 2 2 2 2 . 
        `, SpriteKind.selector)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Shop)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scene.setBackgroundImage(img`
        222222fffffffffffffffffffffff22222222222222ffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffff22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222ffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222ffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf22222222222fffffffffff22222222222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222fffffffffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222fffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf22222222222fffffffffffff22ff22222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222ffffffffffff2fff22222222222222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222ffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222fffffffffffff55555555555ff222222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222fffffffffff555555555555555ff2222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222fffffffff5555555555555555555f222222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222ffffffff555555555555555555555f22222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222fffffff55555555555555555555555f2222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222fffff555555555555555555555555555f222222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf22222222222fffff55555555555555555555555555555f22222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf22222222222ffff555555ffffff555555ffffff5555555f2222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf22222222222222f55555ffffffff5555ffffffff555555f2222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222f555555ffffffffffffffffffff5555555f222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf2222222222222f555555fffffffff55fffffffff5555555f222222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f5555555ffffffff5555ffffffff55555555f22222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555ffffff555555ffffff555555555f22222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f22222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f22222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f22222222222222222222222222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f2222222222222222222dddd222222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f2222222222222ddddddddddd22222222222222222222222222222fbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f2222222222dddddddddddddd22222222222222222222222222dddfbbbbbbbbbbbbbbbbbbbf22222222
        222222fbbbbbbbbbbbbbbbbbbbbbf222222222222f55555555555555555555555555555555555f22222222dddddddddddddddd222222222222222222222222dddddfbbbbbbbbbbbbbbbbbbbf22222222
        22222dfbbbbbbbbbbbbbbbbbbbbbf222222222222f5555555fffffffffffffffffff555555555f2222222ddddddddddddddddd22222222222222222222222ddddddfbbbbbbbbbbbbbbbbbbbf22222222
        22222dfbbbbbbbbbbbbbbbbbbbbbf222222222222f555555f1111111111111111111f55555555f2222222ddddddddddddddddd22222222222222222222222ddddddfbbbbbbbbbbbbbbbbbbbf22222222
        2222ddfbbbbbbbbbbbbbbbbbbbbbf222222222222f555555f1111111111111111111f55555555f222222ddddddddddddddddddd222222222222222222222dddddddfbbbbbbbbbbbbbbbbbbbf22222222
        2222ddfbbbbbbbbbbbbbbbbbbbbbf222222222222f555555f1111111111111111111f55555555f222222ddddddddddddddd333d333222222222222222222dddddddfbbbbbbbbbbbbbbbbbbbf22222222
        222dddfbbbbbbbbbbbbbbbbbbbbbfddd2222222222f555555f11111111111111111f55555555f222222ddddddddddddddd3333333332222222222222222ddddddddfbbbbbbbbbbbbbbbbbbbf22222222
        d22dddfbbbbbbbbbbbbbbbbbbbbbfdddd222222222f555555f11111111111111111f55555555f222222ddddddddddddddd3333333332222222222222222ddddddddfbbbbbbbbbbbbbbbbbbbfd222222d
        d2ddddfbbbbbbbbbbbbbbbbbbbbbfdddd222222222df555555f111111111111111f55555555f222222dddddddddddddddd333333333222222222222222dddddddddfbbbbbbbbbbbbbbbbbbbfd222222d
        d2ddddfbbbbbbbbbbbbbbbbbbbbbfdddd222222222df5555555f1111111111111f555555555f222222ddddddddddddddddd3333333222222d222222222dddddddddfbbbbbbbbbbbbbbbbbbbfd222222d
        d2ddddfbbbbbbbbbbbbbbbbbbbbbfddddd22222222ddf5555555ff111111111ff555555555f2222222dddddddddddddddddd33333ddddddddd22222222dddddddddfbbbbbbbbbbbbbbbbbbbfdd22222d
        ddddddfbbbbbbbbbbbbbbbbbbbbbfddddd2222222ddddf55555555fffffffff5555555555f2222222dddddddddddddddddddd333dddddffddd2222222ddddddddddfbbbbbbbbbbbbbbbbbbbfdd22222d
        ddddddfbbbbbbbbbbbbbbbbbbbbbfddddd2222222dddddf5555555555555555555555555fd2222222ddddddddddddddddddddd3dddddf55fdd2222222ddddddddddfbbbbbbbbbbbbbbbbbbbfdd22222d
        ddddddfbbbbbbbbbbbbbbbbbbbbbfddddd2222222ddddddf55555555555555555555555fdd2222222dddddddddddddddffddddddddddf55fdd2222222ddddddddddfbbbbbbbbbbbbbbbbbbbfdd222222
        cdddddfbbbbbbbbbbbbbbbbbbbbbfddddd2222ddddddddddf555555555555555555555fddd2222dddddddddddddddddf55ffdddddffff55fdd2222dddddddddddddfbbbbbbbbbbbbbbbbbbbfdd2222dd
        cdddddfbbbbbbbbbbbbbbbbbbbbbfddddd22dddddddddddddff55555555555555555ffdddd22dddddddddddddddddddf5555fffff555555fddd2dddddddddddddddfbbbbbbbbbbbbbbbbbbbfdd22dddd
        cdddddfbbbbbbbbbbbbbbbbbbbbbfdddddd2dddddddddddddddff5555555555555ffddddddd2ddddddddddddddddddff555555555555555fddd2dddddddddddddddfbbbbbbbbbbbbbbbbbbbfddd2dddd
        ccddddfbbbbbbbbbbbbbbbbbbbbbfddddddddddddddddddddddddfffffffffffff2ddddddddddddddddddddddddfff555555555555555ffddddddddddddddddddddfbbbbbbbbbbbbbbbbbbbfddddcccc
        ccddddfbbbbbbbbbbbbbbbbbbbbbfddddddddddddddddddddddeef7777777777fdddddddddddddddddddddddfff555555f5555555ffffddddddddddddddddddddddfbbbbbbbbbbbbbbbbbbbfdccccccc
        ccddddfbbbbbbbbbbbbbbbbbbbbbfddcccccccdddddddddddddddf7777777777fddddddcccccccdddddddfff55555555fdfffffffdddddddccccccdddddddddddddfbbbbbbbbbbbbbbbbbbbfcccccccc
        cccdddfbbbbbbbbbbbbbbbbbbbbbfcccccccccccddddddddddddef5557777777fddddcccccccccccdffff5555555555ffddddddddddddcccccccccccdddddddddddfbbbbbbbbbbbbbbbbbbbfcccccccc
        cccdddfbbbbbbbbbbbbbbbbbbbbbfccccccccccccdddddddddddef5555555777fdddccccccccccfff5555555555ffffeeeedddddddddcccccccccccccddddddddddfbbbbbbbbbbbbbbbbbbbfcccccccc
        cccdddfbbbbbbbbbbbbbbbbbbbbbfccccccccccccccddddddddeef5555555555fdccccccccccff55555555555ffeeeeeedddddddddcccccccccccccccccddddddddfbbbbbbbbbbbbbbbbbbbfcccccccc
        ffffffffbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbfffffffff
        fbbbbbbffffbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbffbbbbbbbf
        fbbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbf
        fbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf
        fbbbfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdddffdfffdfdfffdffffdddffdddfffddfddffddddffdfffdfdddfffdddffdddfffdddffddddffddddffdddfdfffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdffdfdfffdfdfffdfffdffffdfffdfdffdffdfdfffffdfffdfdffdfdfffffdffdfdfffdfdfffdfdffffdffffdfffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdffdfdfffdfdfffdfffdffffdfffdfdffdffdfdfffffdfffdfdffdfdfffffdffdfdfffdfdfffdfdffffdffffdfffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdddffdfffdffdfdfffffddffdfffdfdffdffdfdddfffdfffdfdddffdfddffdddffdddddfdfffdfddffffddffdfffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdffdfdfffdfffdffffffffdfdfffdfdffdffdfdfffffdfffdfdffffdfffdfdfdffdfffdfdfffdfdfffffffdfdfffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdffdfdfffdfffdffffffffdfdfffdfdffdffdfdfffffdfffdfdffffdfffdfdffdfdfffdfdfffdfdfffffffdfffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffdddfffdddffffdfffffdddfffdddffdffdffdfddddfffdddffdfffffdddffdffdfdfffdfddddffddddfdddffdfffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffff1ff1f111f111f1ff111f1f1ffffffdddfdddffdddfdddfdddfffdffdfdddfffffffffdfdffdffddfddffdddffffffffffffddffdddfdddffddfffdddfdfdffffffffffffffffffdfbf
        fbbbfdffffffff1ff1f1fff1f1f1fff1ff1f1ffffffdfffdffdfdfffdfffdffdffdffdfdffdffffffffdfdffdfdffdffdfdffdffffffffffdffdffdfffdffdffdfdffffdfdffffffffffffffffffdfbf
        fbbbfdffffffff1111f11ff111f1fff1ff111ffffffdddfdddffddffddffdffdffdffdfdddfffffffffdfdffdfdffdffdfdddfffffffffffddddffdfffdffddddfdffffddfffffffffffffffffffdfbf
        fbbbfdffffffff1ff1f1fff1f1f1fff1ff1f1ffffffffdfdffffdfffdfffdffdffdffdfdffffffffdffdfdffdfdffdffdfdfffffffffffffdffdffdfffdffdffdfdffffdfdffffffffffffffffffdfbf
        fbbbfdffffffff1ff1f111f1f1f111f1ff1f1ffffffdddfdffffdddfdddfdddffffddffdfffffffffddfffddffdffdffdfdfffffffffffffdffdffdfffdffdffdffdddfdfdffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfbf
        fbbbfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfbf
        fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level6`)
    grid.place(heal, tiles.getTileLocation(1, 6))
    grid.place(run, tiles.getTileLocation(3, 6))
    grid.place(jump, tiles.getTileLocation(5, 6))
    grid.place(attac, tiles.getTileLocation(7, 6))
    grid.place(mySprite, tiles.getTileLocation(5, 6))
    controller.moveSprite(mySprite)
}
function spawn_in_column_row (tilemap_col: number, row: number) {
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
    tiles.placeOnTile(mySprite, tiles.getTileLocation(tilemap_col, row))
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, spritestats[0], 0)
    mySprite.ay = 100
}
let LocationCol = 0
let spritelocationRow = 0
let Attak: Sprite = null
let Jump: Sprite = null
let Speed: Sprite = null
let Heal: Sprite = null
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
// 4 items total
spritestats = [
50,
0,
85,
1
]
tiles.placeOnTile(Shop, tiles.getTileLocation(5, 52))
Shop.ay = 1000
Shop.z = 0
spawn_in_column_row(1, 53)
