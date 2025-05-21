function animateGlossophobia () {
    animateGlossophobia()
}
function SpawnANGELICS () {
    ANGELIC = sprites.create(assets.image`ANGELICS`, SpriteKind.Player)
    controller.moveSprite(ANGELIC)
    scene.cameraFollowSprite(ANGELIC)
    ANGELIC.setStayInScreen(true)
    ANGELIC.setPosition(120, 39)
}
function setupArachnophobia () {
	
}
function setupScopophobia () {
	
}
function setupGlossophobia () {
	
}
function spScopophobiaEyes () {
	
}
function setupNyctophobia () {
	
}
function spArachnophobiaSpiders () {
	
}
function setupAstraphobia () {
    scene.setBackgroundImage(assets.image`AstraphobiaBackground`)
}
function setupLobby () {
    scene.setBackgroundImage(assets.image`Lobby`)
    tiles.setCurrentTilemap(tilemap`levelLOBBY`)
}
function setupApeirophobia () {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`GlossophobiaDoor`, function (sprite, location) {
    setupGlossophobia()
})
function animateNyctophobia () {
	
}
function animateAstraphobiaLightning () {
	
}
let ANGELIC: Sprite = null
SpawnANGELICS()
setupLobby()
