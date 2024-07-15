# MeshEdgesGeometry

**MeshEdgesGeometry** is a simple class to extract edges from a [**Three.js**](https://threejs.org/) object
&ndash; a mesh or a group with children. The hierarchy and substructures of the
input object are flattened out. Their positions, scales and rotations are baked
into world coordinates. 

**MeshEdgesGeometry** is like [**THREE.EdgesGeometry**](https://threejs.org/docs/index.html#api/en/geometries/EdgesGeometry),
except that it does not work on [**THREE.BufferGeometry**](https://threejs.org/docs/index.html#api/en/core/BufferGeometry), but on 
[**THREE.Object3D**](https://threejs.org/docs/index.html#api/en/core/Object3D).


### Code example

```js
var box = new THREE.Mesh(
	new THREE.BoxGeometry( 2, 2, 2 ),
);
		
var edges = new THREE.LineSegments(
	new MeshEdgesGeometry( box ),
	new THREE.LineBasicMaterial( {color: 'black'} )
)
```


### Demonstrations

Somewhat minimalistic demos of using **MeshEdgesGeometry** on a cube, on a group
of pyramids and on GLTF models. Click on an image to run it live:

[<img width="225" src="https://boytchev.github.io/MeshEdgesGeometry/demos/snapshots/demo-cube.jpg">](https://boytchev.github.io/MeshEdgesGeometry/demos/demo-cube.html)
[<img width="225" src="https://boytchev.github.io/MeshEdgesGeometry/demos/snapshots/demo-group.jpg">](https://boytchev.github.io/MeshEdgesGeometry/demos/demo-group.html)
[<img width="225" src="https://boytchev.github.io/MeshEdgesGeometry/demos/snapshots/demo-model.jpg">](https://boytchev.github.io/MeshEdgesGeometry/demos/demo-model.html)


### Source code

[https://github.com/boytchev/MeshEdgesGeometry](https://github.com/boytchev/MeshEdgesGeometry)