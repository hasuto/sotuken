AFRAME.registerShader('gradation-shader', {
    vertexShader: require('/default.vert')(),
    fragmentShader: require('/gradation.frag')()
})