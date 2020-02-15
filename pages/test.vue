<template>
  <div>
    <canvas id="c" />
  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    methods: {
      initialiseCanvas(){
        // setting up stage
        const canvas = document.querySelector('#c');
        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.autoClearColor = false;
        const camera = new THREE.OrthographicCamera(
          -1, // left
          1, // right
          1, // top
          -1, // bottom
          -1, // near,
          1, // far
        );

        const scene = new THREE.Scene();
        const plane = new THREE.PlaneBufferGeometry(2, 2);
        // shader code
        const fragmentShader = `
        #include <common>
        uniform vec3 iResolution;
        uniform float iTime;
        uniform sampler2D iChannel0;
        float rand2(vec2 co){
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
        }
        void mainImage( out vec4 fragColor, in vec2 fragCoord )
        {
            vec2 uv = fragCoord/iResolution.xy;

            float blue = ((uv.x + 1.0 - uv.y-.1)*.22)+.2;
            float red = ((1.0-uv.x + uv.y-.1)*.3)+.3;
            float green = .25;
            vec3 col = vec3(red, green, blue);
            float fragCoordBlocks = rand(floor(fragCoord/22.5))*(3.14159265359*2.0);
            float variance = sin(iTime*2.6+fragCoordBlocks);
            col = col + ((variance-.5)*.814); // strenght of the effect

            fragColor = vec4(col,1.0);
        }
        void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
        }`;
        //applying shader as material
        const uniforms = {
          iTime: { value: 0 },
          iResolution:  { value: new THREE.Vector2() }
        };
        const material = new THREE.ShaderMaterial({
          fragmentShader,
          uniforms,
        });
        scene.add(new THREE.Mesh(plane, material));
        //function for resize re-rendering
        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
        }
        // loop animation
        function render(time) {
          time *= 0.001;  // convert to seconds
          resizeRendererToDisplaySize(renderer);
          const canvas = renderer.domElement;
          uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
          uniforms.iTime.value = time;
          renderer.render(scene, camera);
          requestAnimationFrame(render);
        }
        requestAnimationFrame(render);
      }
    },

    mounted(){
      this.initialiseCanvas();
    }
  }
</script>

<style>
  #c{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1
  }
</style>
