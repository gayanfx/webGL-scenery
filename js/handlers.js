function onDocumentKeyDown(event){ 
	var keyCode = event.keyCode;
	keyMap[keyCode] = true;
}

function onDocumentKeyUp(event){
	var keyCode = event.keyCode;
	keyMap[keyCode] = false;
}

function executeMovement(){
	var cameraNeck = cameraEquipment.getNeck();
	var camera = cameraEquipment.getCamera();
	if(keyMap[37] == true){
		cameraNeck.rotateOnAxis(new THREE.Vector3(0,1,0), degInRad(4));
	}
	if(keyMap[39] == true){
		cameraNeck.rotateOnAxis(new THREE.Vector3(0,1,0), degInRad(-4));
	}
	if(keyMap[38] == true){
		cameraNeck.translateZ(-1);
		if(!canMoveIn(cameraNeck.position.x, cameraNeck.position.y, scene)){
			cameraNeck.translateZ(+1);
		}
		joggingAngle += elapsed * 0.4;
        cameraNeck.position.z = Math.sin(degInRad(joggingAngle)) / 0.15 + cameraNeck.getNeckOffsetY();
	}
	if(keyMap[40] == true){
		cameraNeck.translateZ(+1);
		if(!canMoveIn(cameraNeck.position.x, cameraNeck.position.y, scene)){
			cameraNeck.translateZ(-1);
		}
		joggingAngle += elapsed * 0.4;
        cameraNeck.position.z = Math.sin(degInRad(joggingAngle)) / 0.15 + cameraNeck.getNeckOffsetY();
	}
	if(keyMap[82] == true){
		camera.rotateOnAxis(new THREE.Vector3(1,0,0), degInRad(8));
	}
	if(keyMap[70] == true){
		camera.rotateOnAxis(new THREE.Vector3(1,0,0), degInRad(-8));
	}
}