import { BufferGeometry, EdgesGeometry } from 'three';
import { mergeAttributes } from 'three/addons/utils/BufferGeometryUtils.js';


class MeshEdgesGeometry extends BufferGeometry {

	constructor( object, thresholdAngle=1 ) {

		super();

		object.updateWorldMatrix( true, true );

		var position = this.extractEdges( object, thresholdAngle );

		this.setAttribute( 'position', position );

	} // MeshEdgesGeometry.constructor


	// extract edges - each edge is individual segment
	// return position buffer attribute
	extractEdges( object, thresholdAngle ) {

		var attributes = [];

		object.traverse( child => {

			if ( child.geometry ) {

				var geo = new EdgesGeometry( child.geometry, thresholdAngle );
				var pos = geo.getAttribute( 'position' );

				attributes.push( pos.applyMatrix4( child.matrixWorld ) );

			} // if

		} ); // object.traverse

		return mergeAttributes( attributes );

	} // MeshEdgesGeometry.extractEdges

} // MeshEdgesGeometry


export { MeshEdgesGeometry };
