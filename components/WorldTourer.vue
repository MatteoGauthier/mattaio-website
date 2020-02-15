<template>
  <div>
    <canvas ref="canvas" id="worldtourer-canvas"></canvas>
  </div>
</template>

<script>
// import * as THREE from 'three';
export default {
  name: "WorldTourer",
  methods: {
    initialiseCanvas(colorDark) {
      var renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#worldtourer-canvas"),
        antialias: true,
        alpha: true
      });

      var canvas = renderer.domElement;

      var width = canvas.width;
      var height = canvas.height;
      renderer.setSize(200, 200);
      // document.body.appendChild(renderer.domElement);
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(1, canvas.width / canvas.height, 1, 1000);
      // var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 )
      camera.position.z = 450;

      camera.lookAt(new THREE.Vector3());
      new THREE.OrbitControls(camera, canvas);
      scene.add(camera);

      const torusGeo = new THREE.TorusGeometry(2, 0.1, 32, 100);
      const torusMat = new THREE.MeshBasicMaterial({
        color: colorDark ?  0x00030a : 0xffffff,
        side: THREE.DoubleSide
      });

      const circleGeo = new THREE.CircleGeometry(1.9, 128);
      const circleMat = new THREE.MeshBasicMaterial({

        color: colorDark ?  0xffffff : 0x00030a,
        side: THREE.DoubleSide
      });

      //#region groupWorldSurface
      var insideCircleGeo = new THREE.CircleGeometry(1.9, 128);

      var insideCircle = new THREE.Mesh(insideCircleGeo, circleMat);

      var ringGeo = new THREE.RingGeometry(1.9, 2.1, 128);

      var circle = new THREE.Mesh(ringGeo, torusMat);

      var groupWorldSurface = new THREE.Group();
      groupWorldSurface.add(insideCircle);
      groupWorldSurface.add(circle);

      scene.add(groupWorldSurface);
      //#endregion

      //#region groupRing1

      var torus1 = new THREE.Mesh(torusGeo, torusMat);
      var circle1 = new THREE.Mesh(circleGeo, circleMat);

      var groupRing1 = new THREE.Group();
      groupRing1.add(torus1);
      groupRing1.add(circle1);
      scene.add(groupRing1);

      groupRing1.rotation.z += Math.PI / 2;
      groupRing1.rotation.y += (1 * Math.PI) / 3;

      //#endregion

      //#region groupRing2
      var torus2 = new THREE.Mesh(torusGeo, torusMat);

      var circle2 = new THREE.Mesh(circleGeo, circleMat);
      var groupRing2 = new THREE.Group();

      groupRing2.add(torus2);
      groupRing2.add(circle2);
      scene.add(groupRing2);

      groupRing2.rotation.z += Math.PI / 2;
      groupRing2.rotation.y += (2 * Math.PI) / 3;

      //#endregion

      //#region groupRing3
      var torus3 = new THREE.Mesh(torusGeo, torusMat);
      var circle3 = new THREE.Mesh(circleGeo, circleMat);
      var groupRing3 = new THREE.Group();

      groupRing3.add(torus3);
      groupRing3.add(circle3);
      scene.add(groupRing3);

      groupRing3.rotation.z += Math.PI / 2;
      groupRing3.rotation.y += (3 * Math.PI) / 3;
      //#endregion

      var light = new THREE.AmbientLight(0x404040); // soft white light

      scene.add(light);

      function render() {
        requestAnimationFrame(render);

        groupRing1.rotation.y += 0.01;
        groupRing2.rotation.y += 0.01;
        groupRing3.rotation.y += 0.01;

        renderer.render(scene, camera);
      }

      render();
    }
  },
  mounted() {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeMediaQuery.addListener(e => {
      const darkModeOn = e.matches;
      console.log(`Dark mode is ${darkModeOn ? "🌒 on" : "☀️ off"}.`);

      this.initialiseCanvas(darkModeOn);
    });
    console.log(this)
    this.initialiseCanvas(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
};
</script>
